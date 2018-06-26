---
layout: default
title: 'Database performance impact of indexing decisions'
topic_id: PFA-173
category: performance
earliest_git_year: 2018
verification: design-backed-lab-pending
---

# Database performance impact of indexing decisions

## Incident: an index fixes a report and slows case intake

A retail bank adds an index to support a supervisor's new high-volume exception dashboard. The dashboard query improves, but overnight case creation slows and the database begins spending more time maintaining indexes during inserts and status updates. The dashboard still retrieves a large storage stream for every row because a displayed property was not exposed. Operations assumes the index failed and requests several more composite indexes.

The failure is a **workload-wide indexing decision made from one SELECT statement**. Pega architects must evaluate Report Definition predicates, property exposure, sort order, table mappings, update frequency, statistics and query plans together. The correct unit of optimization is the business workload, not a single screen.

## Pega persistence objects and boundaries

- **Class-to-table mapping** determines which concrete table stores the work or data instances. Confirm whether subclasses share the same table and whether the target table contains unrelated workloads.
- **Property exposure and storage stream** determine whether filtering, sorting and projection can use relational columns. A property buried in pzPVStream is not made indexable by adding an index to a different column.
- **Report Definition** controls filters, associations, joins, sorting and row limits. A report joining work and history tables may multiply rows before pagination.
- **Database indexes and statistics** belong to the supported database change process. Treat the SQL execution plan as evidence, not as an implementation detail hidden from the Pega team.
- **Clipboard result materialization** is a second cost after SQL execution. Fetching many complete work instances may dominate even when the database uses the intended index.

## Query and write path

~~~mermaid
flowchart TD
 A[Supervisor Report Definition] --> B[Resolve class mapping]
 B --> C[Generate SQL predicates and joins]
 C --> D{Selective exposed columns?}
 D -->|No| E[Storage stream reads and extra filtering]
 D -->|Yes| F[Index or scan chosen by optimizer]
 F --> G[Return bounded columns and rows]
 E --> G
 H[Case creation or update] --> I[Write row and maintain every affected index]
 I --> J[Commit latency and lock duration]
 G --> K[Clipboard materialization]
~~~

## Implementation plan

1. **Capture representative queries.** Identify the exact Report Definition, access group, filter parameters, row count and SQL generated for common and worst-case requests. Distinguish interactive worklists, scheduled exports and operational search.
2. **Inspect class mapping and property exposure.** Confirm where pyStatusWork, creation time, assignment ownership and any custom search properties are stored. Expose only genuinely queried properties through the supported schema process. Do not expose confidential data just to simplify a report.
3. **Get actual execution plans.** In a lower environment with production-like distribution, inspect selectivity, estimated versus actual row counts, join order, sort spill and whether an index is used. A plan that works for one region may fail for a large tenant with skewed data.
4. **Design candidate composite indexes from access patterns.** For example, a dashboard filtering by organization and status then sorting by creation time suggests a different key order from a case lookup by case ID. Do not assume the same index serves both. Include selectivity and database-engine specifics in the decision record.
5. **Measure write amplification.** Run a controlled intake workload with realistic case inserts, assignment transitions and updates to indexed fields. Record commit time, lock waits, storage growth and index maintenance cost alongside report latency.
6. **Reduce result work.** Apply a strict result limit, keyset-style continuation where supported, and projection of only required columns. Avoid a report that returns thousands of instances for a portal that displays twenty.
7. **Release with reversibility.** Document schema ownership, migration window, statistics refresh, index rollback and any concurrent-build constraints of the chosen database. Coordinate with Pega Cloud operations or the managed DBA team as applicable.

## Design tradeoffs and production failure mechanics

An index improves a selective read but costs storage, cache memory and write I/O. More columns in an index can avoid table lookups for one report but increase maintenance and reduce cache density. Exposing a property enables relational predicates but can require a careful backfill and may affect existing historical instances. A dedicated reporting replica or warehouse isolates expensive analytics but introduces freshness lag and a separate authorization boundary.

Common false positives include treating a cold database cache as a missing index, comparing plans with stale statistics, and optimizing a query whose latency is dominated by clipboard mapping. A table shared by several case classes can turn a narrow change into a platform-wide regression. If the report is not business critical in real time, consider an asynchronous aggregate or a reporting store instead of adding indexes to a transactional hot table.

## Reproducible verification matrix

| Test | Dataset and operation | Pass evidence |
|---|---|---|
| Selective lookup | Known organization, rare status | Query plan, bounded reads and correct row set |
| Skewed tenant | One tenant dominates rows | No catastrophic plan regression |
| Empty result | Valid filter with no matches | Fast response and no storage-stream scan |
| Intake under load | Concurrent case creation and status updates | Write latency remains inside approved budget |
| Cold cache | Restart controlled test database cache | Separate cold and steady-state measurements |
| Pagination | Navigate first and deep result pages | Stable order, no duplicates or missed rows |
| Confidential fields | Attempt report under restricted access group | Policy denies unauthorized records and columns |
| Rollback | Remove candidate index in lower environment | Previous plan and write behavior recover predictably |

The matrix defines tests to execute, not benchmark results. Index syntax and supported schema operations differ by database vendor and hosting model.

## Primary Pega references

- [Obj-Browse query and exposed-column behavior, Pega Platform '23](https://docs.pega.com/bundle/platform-23/page/platform/reference/methods/obj-browse.html)
- [Pega application development performance practices](https://docs.pega.com/bundle/platform-242/page/platform/app-dev/best-practices-infinity-application-development.html)

**Version boundary:** The SQL generated by a Report Definition, available index controls and Pega Cloud database change process depend on Pega and database versions. Inspect generated SQL rather than assuming a fixed plan.
