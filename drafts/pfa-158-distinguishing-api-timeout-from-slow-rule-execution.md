---
layout: default
title: 'Distinguishing API timeout from slow rule execution'
topic_id: PFA-158
category: observability
earliest_git_year: 2018
verification: design-backed-lab-pending
---

# Distinguishing API timeout from slow rule execution

## Incident: every timeout is blamed on a connector

A public-sector eligibility portal returns HTTP 504 when a citizen submits a case. The team raises the Connect REST timeout from 20 seconds to 60 seconds. The incident worsens because requests occupy application threads longer, and the actual cause is a repeated Report Definition invoked from a Data Transform before the connector runs. A separate subset of requests reaches the downstream benefits API, commits the award, then times out while the response travels back. Blind retries now create duplicate award requests.

The architecture question is **where time is spent and where the outcome becomes uncertain**, not which timeout value is largest. Measure browser, gateway, Pega service execution, rule processing, database and connector phases separately. A gateway timeout proves only that its response deadline expired. It does not prove that Pega failed to commit, or that the downstream system did not act.

## Diagnostic boundaries in Pega

- **Service REST** entry point and service activity/data transform mark the Pega-side start and end of the synchronous request.
- **Connect REST** and its authentication profile define outbound transport. Capture elapsed time, endpoint, status and transport exception class without logging credentials or confidential payloads.
- **Data Pages** may hide multiple nested loads or connector calls. A seemingly local property reference can initiate remote I/O.
- **Report Definitions** can consume time in database query, BLOB retrieval and result materialization. Distinguish query time from later clipboard processing.
- **Performance Analyzer (PAL), Tracer, Pega Diagnostic Center and alert logs** offer complementary evidence. Tracer can materially change timing and should be used selectively in a controlled reproduction; PAL is requestor-contextual and must be interpreted with its scope.

## Trace model

~~~mermaid
flowchart LR
 A[Browser request] --> B[API gateway deadline]
 B --> C[Service REST requestor]
 C --> D[Data Transform and decision rules]
 D --> E[Report Definition and database]
 E --> F[Connect REST outbound call]
 F --> G[Partner service]
 G --> H[Response mapping]
 H --> I[Case commit and HTTP response]
 B -. gateway timeout .-> J[Caller sees unknown outcome]
 G -. possible committed side effect .-> J
~~~

## Implementation and incident runbook

1. **Define one correlation identifier.** Accept a trusted request ID from the gateway or create one at entry. Pass it in approved outbound headers and log it alongside the Pega requestor ID, service rule, case ID, elapsed-time stages and endpoint alias. Do not trust a caller-supplied ID as proof of identity.
2. **Record an elapsed-time ledger.** At minimum: gateway received, Pega entered, rule preparation completed, database phase completed, outbound call started, partner response received, Pega commit completed, HTTP response written. Use monotonic durations within one process; wall clocks across hosts require synchronized clocks and tolerance.
3. **Inspect PDC and alert events.** Correlate high service response times, database alerts and connector exceptions with the same deployment window. Look for a rise in active requestors and thread saturation after timeout increases.
4. **Use PAL before invasive tracing.** Compare rule execution, database and interaction counters on a reproducible request. Capture a baseline with a warm and cold Data Page. If a Tracer session is necessary, filter to the exact rules and one test requestor, then remove instrumentation.
5. **Separate three outcomes.** A timeout before the connector is invoked is internal latency. A connection failure before a request is sent is a transport failure. A timeout after the partner receives the request is an *unknown business outcome* and requires a status lookup or idempotency key before retry.
6. **Design a finite latency budget.** Allocate time for gateway, Pega rule work, database, downstream API and response serialization. The upstream deadline must exceed the sum of realistic inner budgets plus margin, but raising it is not a substitute for fixing repeated queries or thread starvation.
7. **Introduce a recovery contract.** For side-effecting operations, persist a unique business operation ID, ask the partner to enforce idempotency and reconcile uncertain outcomes through a separate case stage or Queue Processor. Do not reissue payment or entitlement operations merely because HTTP returned 504.

## Tradeoffs and failure mechanics

Deep Tracer capture yields rule-level detail but adds overhead and may expose data. Broad logging is cheaper to deploy but expensive to search and risks personal data exposure. Prefer sparse structured spans with sampled detail and an incident-time switch approved by security. A synchronous API can offer immediate feedback but ties up requestor capacity during partner degradation. Moving side effects to a queue decouples latency at the cost of eventual completion and a visible pending state.

Beware Data Page refresh policy: cold loads can make only the first request slow, while chained page references cause a multiplicative call count. A high database elapsed time may originate from one unselective Report Definition rather than the service itself. A connector timeout can also be a consequence of exhausted outbound connection pools, not partner CPU.

## Verification matrix

| Reproduction | Instrumentation | Expected distinction |
|---|---|---|
| Slow Data Transform | Controlled extra rule work in test | Pega internal span dominates; connector not invoked |
| Slow database | Known unselective test Report Definition | DB elapsed and alert evidence dominate |
| Slow partner | Stub holds response within configured timeout | Connect REST span dominates; upstream deadline still valid |
| Partner commits then drops response | Stub stores operation and closes connection | Unknown outcome reconciled without duplicate side effect |
| Warm versus cold Data Page | Run first and subsequent requests | Cache load difference visible |
| Saturated requestors | Bounded concurrent test | Queueing and thread pressure distinguished from connector service time |
| Gateway deadline shorter than Pega work | Controlled deadline mismatch | Caller 504 despite possible later Pega completion |

All durations and thresholds must be measured in the target environment. This is a design-backed test plan, not a report of completed measurements.

## Primary Pega references

- [Pega Platform overview and application execution model](https://docs.pega.com/bundle/platform-242)
- [Browser developer tools for network request timing](https://docs.pega.com/bundle/platform-242/page/platform/user-experience/browser-developer-tools.html)
- [Pega development performance best practices](https://docs.pega.com/bundle/platform-242/page/platform/app-dev/best-practices-infinity-application-development.html)

**Version boundary:** PAL, Tracer and PDC interfaces and available metrics depend on the installed Pega release and hosting model. Verify the actual alert and counter names rather than treating illustrative stages as built-in Pega metrics.
