---
layout: default
title: 'Routing work from different systems into one portal'
topic_id: PFA-245
category: process-fabric
earliest_git_year: 2021
verification: design-backed-lab-pending
---

# Routing work from different systems into one portal

## Failure scenario: a unified worklist creates duplicate ownership

An enterprise claims department has Pega claims cases, an older BPM approval system and a procurement SaaS task queue. A central portal shows assignments from all three. A supervisor reassigns a procurement task from the portal while the source system independently reassigns it during an escalation. Both users see the task as theirs. One user completes the source task; the portal still shows it as open because the acknowledgement was lost. The portal becomes a second, inconsistent workflow engine.

A federated worklist should be **a discovery and delegation surface, not an accidental second system of record**. Each source system retains ownership of assignment state and completion. The portal needs stable identity mapping, source-specific authorization, conflict resolution and acknowledgement semantics. A central display does not imply the authority to move or complete every external task.

## Pega Process Fabric and integration boundaries

Pega Process Fabric Hub provides an Interwoven Worklist and grouping of assignments from connected applications in supported versions. The PPF:Managers access group applies to certain Insights features, not blanket authority to every source assignment. Confirm connector and assignment capabilities for the installed Hub release; do not infer that all third-party systems support the same actions.

For Pega-origin work, retain the source assignment and case as the authoritative records. For external work, use a connector or approved integration adapter to expose source task ID, source application, assignment status, current owner, priority, due date, allowed actions and deep-link target. A Data Page can provide a typed aggregation for the portal, but should not be the durable assignment store. A Service REST callback or polling adapter can update a read model after a source change. Access Groups and source-specific access checks still govern the actual completion action.

## Federation architecture

~~~mermaid
flowchart TD
 A[Pega case assignments] --> D[Source adapters and identity mapping]
 B[Legacy BPM tasks] --> D
 C[Procurement SaaS tasks] --> D
 D --> E[Federated worklist read model]
 E --> F[Operator selects task]
 F --> G[Revalidate source entitlement and current owner]
 G --> H{Source permits action?}
 H -->|No| I[Refresh stale task and explain conflict]
 H -->|Yes| J[Deep link or delegated source operation]
 J --> K[Source commits completion]
 K --> L[Acknowledgement with source revision]
 L --> E
~~~

## Architecture and implementation

1. **Create a source registry.** Assign a stable SourceSystemId, source task ID namespace, task URL pattern, identity provider, supported action set and synchronization method. A portal task key must include the source identifier to avoid collisions.
2. **Define the minimal read model.** Include task reference, business label, due date, priority, owner, status, last source revision and a restricted deep-link target. Exclude sensitive case details unless the source explicitly permits disclosure to the current user.
3. **Map identities deliberately.** Use a trusted enterprise identity and per-source entitlement mapping. Never treat the portal's authentication as permission to act in an external system. When identity mapping is missing, show a safe error instead of falling back to a privileged service account.
4. **Choose synchronization semantics.** Event-driven updates improve freshness but require replay and duplicate handling. Polling is easier for legacy systems but creates lag and load. Record source revision and last observed timestamp; expose staleness when it affects user decisions.
5. **Keep completion at the source.** Prefer a deep link to the source application when it provides reliable authentication and user experience. Where delegated completion is required, send a conditional command with expected task revision and an idempotency key. Treat timeouts as unknown outcomes and reconcile by reading the source.
6. **Implement conflict handling.** If ownership or status changes after the portal renders, reject the stale operation, refresh the task and explain which system now owns it. Do not overwrite the source assignment based on portal cache.
7. **Instrument reconciliation.** Track tasks absent from source, duplicated in the read model, stale beyond agreed freshness, and completion acknowledgements pending. A nightly full reconciliation can repair missed events without reissuing business commands.

## Tradeoffs and production failure mechanics

A unified portal reduces context switching but expands the attack surface across systems. Deep links preserve source security and transaction semantics but interrupt the user experience. Delegated operations feel seamless yet require robust per-source authentication, concurrency control and error recovery. Polling offers simple integration but can produce stale worklists; event streams are fresher but must survive replay and out-of-order delivery.

A portal may show a task after it is completed because its read model is eventually consistent. That is acceptable only if the completion boundary revalidates source state. Avoid inventing a universal SLA or priority interpretation across systems: one source's urgency code may not match another's. Define a normalization policy and retain raw source values for investigation.

## Reproducible verification matrix

| Scenario | Source behavior | Expected portal behavior |
|---|---|---|
| Duplicate task IDs | Two systems both use task 123 | Distinct portal identities |
| Source reassignment | Owner changes after list render | Stale completion denied and task refreshed |
| Lost acknowledgement | Source completes, callback fails | Reconciliation marks task complete, no second command |
| Revoked entitlement | User loses source permission | No details or delegated completion exposed |
| Source outage | Legacy BPM unavailable | Last-known state labeled stale; action disabled |
| Event replay | Same completion event twice | One read-model transition |
| Deep-link session | Source requires reauthentication | Safe redirect, no shared privileged token |
| Priority mapping | Sources use different priority scales | Documented normalized order with raw values retained |

Test with synthetic source adapters and controlled failure injection. No live Process Fabric deployment or measured synchronization latency is claimed.

## Primary Pega references

- [Grouping assignments in Pega Process Fabric Hub 3.1](https://docs.pega.com/bundle/pega-process-fabric-hub-31/page/platform/pega-process-fabric/grouping-assignments-pega-process-fabric.html)
- [Pega Platform case management and integration overview](https://docs.pega.com/bundle/platform-242)

**Version boundary:** Process Fabric Hub integration adapters, UI and available delegated actions differ by version and connected system. Validate capabilities before treating a federated task as executable.
