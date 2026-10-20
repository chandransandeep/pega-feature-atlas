---
layout: default
title: "Hands-on #01 — Parameterized Data Pages"
---

# Parameterized Data Pages: why is customer A seeing customer B's orders?

**Feature:** Data Page, Report Definition, parameters, Clipboard  
**Scenario:** Customer-specific order lookup in a service application  
**Status:** Research-backed recipe — **NOT yet run in a Pega lab**  
**Estimated hands-on time:** 25–40 minutes after you have a demo application and test data  
**Applies to:** General Pega Platform data page concepts; exact Dev Studio labels and UI setup should be checked against your installed version.

## 1. The real problem

A customer service agent opens an order lookup. They select customer **C1001**, then **C2002**. The application must show only the selected customer's orders. A non-parameterized list or a data page reference with a missing parameter could show an unfiltered list. A badly chosen load management strategy might replace an instance that another component expected to reuse.

**Desired behaviour:** A query for C1001 returns two C1001 orders; a query for C2002 returns only the C2002 order. Switching back returns the correct data.

## 2. The demo we're building

Use **fictional** data:

| OrderID | CustomerID | Status |
|---|---|---|
| ORD-100 | C1001 | Open |
| ORD-101 | C1001 | Shipped |
| ORD-200 | C2002 | Open |

| Pega item | Example name / value |
|---|---|
| Data class | `Atlas-Data-Order` |
| Data properties | `.OrderID`, `.CustomerID`, `.Status` |
| Report Definition | `R_OrdersByCustomer` on `Atlas-Data-Order` |
| Report parameter | `CustomerID` (Text) |
| Data Page | `D_OrdersByCustomer` |
| Data Page structure | List |
| Data Page parameter | `CustomerID` (Text, required) |
| Data source | Report Definition `R_OrdersByCustomer` |
| Example reference | `D_OrdersByCustomer[CustomerID:C1001]` |

**Data flow**

    Selected customer → Data Page parameter
                      → Report Definition filter
                      → Filtered order results → Lookup view

## 3. Build it — follow these steps

### Step 1 — Create the sample data

Create or reuse an Order data type with the three properties in the table. Seed *three* demo records as above, using an appropriate local data storage mechanism for your application. Use a separate sandbox, not production customer records.

### Step 2 — Create the filtered Report Definition

In Dev Studio, create report `R_OrdersByCustomer` under `Atlas-Data-Order`.

- Expose the columns `OrderID`, `CustomerID` and `Status`.
- Add report parameter **CustomerID** (Text).
- Add a filter: **CustomerID equals the report parameter CustomerID**.
- Run the report using parameter C1001. Expect two rows.
- Run it with C2002. Expect one row.

**Important:** Get the report filter working *before* introducing the data page. Otherwise, you won't know whether the fault is in filtering or parameter passing.

### Step 3 — Create the Data Page

Create `D_OrdersByCustomer` under the Order data class.

| Setting | Choose |
|---|---|
| Structure | List |
| Mode | Read-only |
| Scope | Thread for this isolated demo |
| Parameters tab | CustomerID — Text — required |
| Data source | Report Definition: R_OrdersByCustomer |
| Source parameter mapping | Map Data Page `Param.CustomerID` to the report's `CustomerID` parameter |

The **source parameter mapping** is the crucial step: declaring a data page parameter without passing it into the report is not enough.

On **Load Management**, don't enable **Limit to a single Data Page** when the application must keep *multiple distinct customer parameter instances* available in the same scope. That option intentionally overwrites one parameterized instance as parameters change. It can be appropriate for a one-at-a-time pattern, but it changes the caching behaviour.

### Step 4 — Use it in your lookup

Pass the selected CustomerID from the UI/query context to the Data Page reference. Conceptually:

    D_OrdersByCustomer[CustomerID:C1001]

**Do not** hard-code C1001 in production; bind the customer selector or case property to the Data Page parameter. The exact UI binding depends on whether your application uses Constellation or a Traditional UI.

## 4. Test it — a real engineer's checklist

| Test | Action | Expected result (not yet observed) |
|---|---|---|
| A | Request CustomerID=C1001 | ORD-100 and ORD-101 only |
| B | Request CustomerID=C2002 | ORD-200 only |
| C | Re-request C1001 | C1001 rows; never ORD-200 |
| D | Supply an unknown CustomerID | Empty result, not all orders |
| E | Omit required parameter | Rejected or clearly handled; never silently expose another customer's data |

In **Clipboard**, inspect the loaded Data Page instances and parameter values. Multiple parameter values can cause multiple Data Page instances; that's normal unless you chose single-instance behaviour. Confirm the actual contents for each parameter. Pega's parameterized Data Page reference uses bracket syntax; see official reference below.

## 5. Break it deliberately

**Fault:** Remove the parameter mapping in the Data Page's report data source while leaving the report filter unchanged.

**Symptom:** Results may be empty, unfiltered or otherwise incorrect, depending on how the report handles the missing value.

**Debug sequence:**
1. Check that the UI passes the *current* CustomerID.
2. Inspect the referenced page and its parameter values in Clipboard.
3. Run the Report Definition independently with the same CustomerID.
4. Inspect Data Page source parameter mapping.
5. Check scope, refresh behaviour and whether single-instance caching was selected.
6. Fix mapping and rerun tests A–E.

## 6. Production advice

- **A filter is not security.** Verify authorization and record-level access independently; never rely only on the selected customer parameter to restrict sensitive orders.
- **Scope matters.** Thread/requestor/node scope determines when and where loaded data can be reused; choose with access and staleness requirements in mind.
- **Memory matters.** Many distinct parameter combinations can create many cached pages. Test memory and refresh behaviour with realistic data volumes.
- **No stale assumptions.** Define the freshness policy explicitly, especially if order status changes during a session.
- **Use a keyed lookup** instead of loading an entire list when the UI only needs one unique order.

## 7. What to screenshot once lab-verified

1. Report Definition parameter and filter
2. Data Page Parameters tab + data source mapping
3. Load Management strategy
4. Clipboard instances for C1001 vs C2002
5. Incorrect output before the fix and corrected output afterward

*No screenshots included yet: this article has not been executed in a live Pega environment.*

## References

- [Pega Academy — Data Pages](https://academy.pega.com/topic/data-pages/v5) — parameterized references, multiple Clipboard instances and Limit to a single Data Page.
- [Pega Academy — Data sources](https://academy.pega.com/pt-br/node/79271/in/72681/67491/67581) — data source parameter/filter use.

---

[← All tutorials]({{ '/' | relative_url }})
