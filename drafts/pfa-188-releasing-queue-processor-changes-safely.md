---
layout: default
title: 'Releasing queue processor changes safely'
topic_id: PFA-188
category: delivery
earliest_git_year: 2019
verification: design-backed-lab-pending
---

# Releasing queue processor changes safely

## Incident: a new queue processor reads yesterday's messages

An insurer deploys a new version of a claims notification Queue Processor. The new processing activity expects a JSON field named NotificationChannel, but thousands of queued items were created by the previous ruleset and carry only PreferredContact. On deployment, workers begin retrying old messages. The team rolls back the ruleset, but the new release has already emitted some external notifications and advanced the case stage for others. Neither replay nor rollback is safe without understanding the message schema and external receipts.

A Queue Processor release is a **durable message contract migration**, not just a rule promotion. Producer and consumer versions coexist across queued work, running requestors and application nodes. Design forward/backward compatibility, failure isolation, replay and external idempotency before changing a processing activity.

## Pega objects and ownership

- **Queue Processor rule** defines background execution and processing activity. Standard and dedicated processors, partitions, threads and runtime monitoring vary by platform release and deployment model.
- **Queue-For-Processing method** is the producer boundary for stream-backed queue processor work. The item should carry a stable business operation ID and a versioned payload contract rather than an entire mutable clipboard snapshot.
- **Processing Activity** reloads the case or business record as needed, validates the payload version and applies an idempotent side effect.
- **Data Transform** translates versioned input into a canonical work structure. Keep schema migration out of ad hoc Java steps.
- **Ruleset and Application versions**, deployment packages and environment configuration determine which processing rule executes. A rollback must account for persisted work created under newer logic.

## Safe message evolution

~~~mermaid
flowchart TD
 A[Old and new case producers] --> B[Queue item with schema version]
 B --> C[Queue Processor consumer]
 C --> D{Known payload version?}
 D -->|Old| E[Compatibility mapping]
 D -->|New| F[Current mapping]
 D -->|Unknown| G[Quarantine with diagnostic ID]
 E --> H[Check business receipt]
 F --> H
 H --> I{Side effect already applied?}
 I -->|Yes| J[Acknowledge without resending]
 I -->|No| K[Call external service with idempotency key]
 K --> L[Persist receipt and update case]
~~~

## Release sequence

1. **Inventory in-flight work.** Count pending, retrying and broken items by processor and business operation. Identify the oldest message and its payload shape. Include any legacy agent queue still active; do not assume the same operational semantics.
2. **Define a compatibility envelope.** Add SchemaVersion, BusinessOperationId, CaseKey and a minimal immutable payload. Support the previous version until old items are drained or migrated. Reject unknown versions to a controlled incident path rather than defaulting missing fields silently.
3. **Deploy the tolerant consumer first.** The new processing activity must handle old and new payloads while producers still emit the old version. Confirm mapping using controlled queued fixtures before switching producers.
4. **Protect side effects.** Use a unique operation key recognized by the downstream system, or a durable receipt plus reconciliation. A Pega commit and a remote HTTP side effect are not a single distributed transaction. Timeouts can leave an unknown result.
5. **Switch producers behind a release control.** Introduce new payloads gradually. Monitor queue age, retries, broken-item growth, duplicate suppression and external rejection. A successful deployment does not mean old items have finished.
6. **Exercise rollback.** Restore the prior producer while retaining a consumer that understands both versions. If the old consumer cannot understand newly queued items, rollback requires an explicitly tested adapter or a pause-and-drain plan.
7. **Retire compatibility deliberately.** Remove old mapping only after proving no old items remain in active, retry, dead-letter or recovery stores, and after the replay retention period has expired.

## Tradeoffs and failure mechanics

Draining the queue before deployment simplifies schema compatibility but can breach business SLAs and is often impractical for 24-hour processing. A dual-version consumer adds temporary complexity but supports rolling releases and rollback. A versioned event schema increases payload discipline; storing the whole case clipboard is easier initially but brittle across rule and property changes.

Stream-backed Queue Processors must not be confused with legacy Queue-For-Agent entries or their Broken-Process states. Use the queue management and failure controls supported by the installed Pega version. A retry is not harmless if the partner has already accepted a payment, notification or reservation. Monitor *age of oldest unprocessed business operation* as well as raw queue depth; depth alone can look healthy while one poisoned item is stuck.

## Reproducible verification matrix

| Scenario | Injection | Expected outcome |
|---|---|---|
| Old payload | Enqueue previous schema before deployment | New consumer processes through compatibility mapping |
| New payload | Switch producer after consumer promotion | Canonical mapping and business receipt correct |
| Unknown schema | Enqueue unsupported version in test | Quarantine and alert without side effect |
| Partner timeout after commit | Stub accepts then drops response | Reconciliation prevents duplicate send |
| Rollback | Revert producer with mixed queue | No lost or unprocessable item |
| Concurrent workers | Enqueue same operation twice | One externally visible side effect |
| Backlog | Pause consumer then resume under load | Age decreases within tested capacity envelope |
| Poison message | Malformed item before valid items | Failure isolated; healthy items continue |

Capture queue IDs, rule versions, partner receipts and actual workflow deployment logs during the laboratory run. No results are asserted here.

## Primary Pega references

- [Moving applications between systems, Pega Platform '24.2](https://docs.pega.com/bundle/platform-242/page/platform/system-administration/migration-applications-systems-moving.html)
- [Queue-For-Agent legacy behavior, Pega Platform '23](https://docs.pega.com/bundle/platform-23/page/platform/reference/methods/queue-for-agent.html)

**Version boundary:** Queue-For-Processing, Queue Processor recovery controls, stream dependencies and deployment topology must be checked in the deployed Pega version. The legacy agent reference is included specifically to prevent mixing incompatible queue mechanisms.
