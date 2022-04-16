---
layout: default
title: "End-to-end correlation IDs for distributed diagnostics"
topic_id: PFA-096
category: integrations
earliest_git_year: 2018
verification: design-backed-lab-pending
---

# End-to-end correlation IDs for distributed diagnostics

**PFA-096** | Pega Lead System Architect study | Lab verification pending

## Business situation

A customer complains that a policy was issued twice. Pega logs show one case event, gateway logs show retries, and the partner API logs show different request IDs. Without a stable business correlation model, none of the teams can reconstruct the sequence.

The engineering objective is to prove a bounded, authorized and recoverable transaction. A response from an interface or query is useful evidence but not, by itself, proof that a remote effect and Pega case state were committed as one unit.

## Proposed processing design

```mermaid
flowchart LR
  N0["Incoming trace ID"]
  N1["Pega requestor/case ID"]
  N2["Queue message operation ID"]
  N3["Outbound connector ID"]
  N4["Partner receipt"]
  N0 --> N1
  N1 --> N2
  N2 --> N3
  N3 --> N4
```

## Relevant Pega rules and interfaces

1. **Service REST headers:** record real class/ruleset, source system, trusted principal and support responsibility for this component.
2. **case properties:** record real class/ruleset, source system, trusted principal and support responsibility for this component.
3. **Queue Processor payload:** record real class/ruleset, source system, trusted principal and support responsibility for this component.
4. **Connect REST headers:** record real class/ruleset, source system, trusted principal and support responsibility for this component.
5. **log governance:** record real class/ruleset, source system, trusted principal and support responsibility for this component.

## Detailed implementation decisions

1. Use separate identifiers for trace span, business operation and case; a new HTTP retry may create a new trace but should reuse the same operation ID.

2. Propagate trace/correlation headers to downstream APIs and link queue processing back to the originating operation.

3. Log transition state, event type and outcome category without storing sensitive request payloads or tokens.

4. Record an immutable external receipt keyed by operation ID, enabling safe reconciliation after lost acknowledgement.

5. Test diagnostic lookup across Pega, gateway, stream worker and partner for an intentionally failed operation.

Before coding, create a lightweight interface specification containing endpoint or source, message/record identity, required fields, timeout/consistency objective and expected behavior for missing or duplicated information.

## Design alternatives

- **Pattern 1:** Log only case ID simplifies one platform but can't reconstruct cross-system hops.
- **Pattern 2:** propagated correlation increases diagnostic power with privacy duties.

The ADR should identify which requirement would fail under the rejected pattern and how the selected design handles both slow and unavailable dependencies.

## Failure scenario to diagnose

A connector retry receives a new trace ID and is counted as another business action, masking duplication. Logs lacking version/tenant context can be ambiguous.

Use Pega Tracer, PAL, DBTrace and service-side request/receipt logs when relevant. Reconcile case ID with external operation ID and event/version so a retry is not accidentally interpreted as a new business command.

## Acceptance tests

1. **Controlled test 1:** Drop gateway response after remote commit. Capture the committed state, error type, elapsed time and whether any remote effect occurred.
2. **Controlled test 2:** trace queue retry to original case. Capture the committed state, error type, elapsed time and whether any remote effect occurred.
3. **Controlled test 3:** reconstruct partial timeout event. Capture the committed state, error type, elapsed time and whether any remote effect occurred.

These are test instructions. No benchmarks, live screenshots or successful lab outcomes have been fabricated. A validated edition must state its Pega release and retain sanitized configuration evidence.

## Production runbook requirements

Specify who can replay failed actions, the expiry time for unresolved outcomes, backpressure or throttling limits and a repair path. For reporting and data retention, verify authorization, point-in-time interpretation and historical evidence as well as throughput. For integrations, distinguish callback acceptance from final business completion.

## Primary reading

- [Pega Academy: Queue processors](https://academy.pega.com/topic/queue-processors-and-job-schedulers/v2)

*Independent architectural reference using fictional examples. Version-sensitive details should be rechecked against the deployed release.*
