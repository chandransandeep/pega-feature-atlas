---
layout: default
title: "Controlling fan-out to dozens of downstream services"
topic_id: PFA-100
category: integrations
earliest_git_year: 2018
verification: design-backed-lab-pending
---

# Controlling fan-out to dozens of downstream services

**PFA-100** | Pega Lead System Architect study | Lab verification pending

## Business situation

A compliance check request populates a page with 40 officers. For each officer Pega calls identity, sanctions and corporate registry APIs. One case generates 120 synchronous calls, making even a small partner outage magnify into a full portal incident.

The engineering objective is to prove a bounded, authorized and recoverable transaction. A response from an interface or query is useful evidence but not, by itself, proof that a remote effect and Pega case state were committed as one unit.

## Proposed processing design

```mermaid
flowchart LR
  N0["List Data Page"]
  N1["Per-row nested Data Pages"]
  N2["Connector fan-out"]
  N3["Partner quotas"]
  N4["Bounded aggregate response"]
  N0 --> N1
  N1 --> N2
  N2 --> N3
  N3 --> N4
```

## Relevant Pega rules and interfaces

1. **Data Pages:** record real class/ruleset, source system, trusted principal and support responsibility for this component.
2. **Connect REST:** record real class/ruleset, source system, trusted principal and support responsibility for this component.
3. **Data Transform:** record real class/ruleset, source system, trusted principal and support responsibility for this component.
4. **PAL:** record real class/ruleset, source system, trusted principal and support responsibility for this component.
5. **bulk API design:** record real class/ruleset, source system, trusted principal and support responsibility for this component.

## Detailed implementation decisions

1. Instrument all calls in one interaction, including those hidden in nested Data Page references and declarative processing.

2. Calculate maximum calls as list length times dependency count times retry factor, and compare to vendor rate limits.

3. Use documented bulk endpoints, bounded parallelism or pagination where the business doesn't need all enrichment immediately.

4. Keep the per-officer entitlement and data isolation policy when combining requests into a batch.

5. Return a partial-status object when one noncritical source is unavailable; avoid failing the whole case without business reason.

Before coding, create a lightweight interface specification containing endpoint or source, message/record identity, required fields, timeout/consistency objective and expected behavior for missing or duplicated information.

## Design alternatives

- **Pattern 1:** Per-row lookups maximize rule reuse but unbounded fan-out.
- **Pattern 2:** bulk/paged design trades complexity for predictable capacity.

The ADR should identify which requirement would fail under the rejected pattern and how the selected design handles both slow and unavailable dependencies.

## Failure scenario to diagnose

A slow downstream API expands case p95, worker concurrency amplifies rate limiting, and retries produce a self-sustaining storm.

Use Pega Tracer, PAL, DBTrace and service-side request/receipt logs when relevant. Reconcile case ID with external operation ID and event/version so a retry is not accidentally interpreted as a new business command.

## Acceptance tests

1. **Controlled test 1:** Count calls with 1,10,40 officers. Capture the committed state, error type, elapsed time and whether any remote effect occurred.
2. **Controlled test 2:** simulate API 429. Capture the committed state, error type, elapsed time and whether any remote effect occurred.
3. **Controlled test 3:** replay under 100 concurrent users. Capture the committed state, error type, elapsed time and whether any remote effect occurred.

These are test instructions. No benchmarks, live screenshots or successful lab outcomes have been fabricated. A validated edition must state its Pega release and retain sanitized configuration evidence.

## Production runbook requirements

Specify who can replay failed actions, the expiry time for unresolved outcomes, backpressure or throttling limits and a repair path. For reporting and data retention, verify authorization, point-in-time interpretation and historical evidence as well as throughput. For integrations, distinguish callback acceptance from final business completion.

## Primary reading

- [Pega Academy: Data Pages](https://academy.pega.com/topic/data-pages/v5)

*Independent architectural reference using fictional examples. Version-sensitive details should be rechecked against the deployed release.*
