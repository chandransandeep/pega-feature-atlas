---
layout: default
title: 'Creating a support runbook for missing case updates'
topic_id: PFA-164
category: observability
earliest_git_year: 2019
verification: design-backed-lab-pending
description: 'Creating a support runbook for missing case updates: practical Pega architecture controls, failure analysis and verification.'
---

# Creating a support runbook for missing case updates

## Engineering context and failure scenario

A service agent reports that an approved claim remains unchanged after an external system acknowledges the update. The case history shows a successful request but no visible status transition. This is not merely a user-interface defect. In a distributed Pega application, the effective outcome depends on the access group, resolved rule versions, clipboard state, background processing and the timing of persistence or external acknowledgements. The architecture must specify which component owns the decision, what constitutes a completed operation, and which evidence can be safely retained. The example below is a design exercise, not a claim of observed production results.

## Relevant Pega building blocks

The principal platform objects and diagnostics are **Case History, pxUpdateDateTime, Queue Processor, Data Page, Connect-REST, assignment, Obj-Save, Commit, PDC**. Inspect the exact rule implementations and access configuration in the deployed Pega Platform version; behavior can vary by application stack, UI architecture, deployment model and patch level. Do not assume that a visual control, a connector response or an activity completion implies an authorized durable business outcome. The owner of the relevant case or integration contract must define the authoritative state and acceptable recovery actions.

**Design invariant:** Trace the full command-to-commit-to-read path; distinguish missing write, delayed processing, stale read and wrong-case correlation.

## Reference architecture

```mermaid
flowchart LR
  A[Operator or event] --> B[Pega entry point]
  B --> C{Boundary check}
  C -->|Allowed| D[Rule and data processing]
  C -->|Denied or overloaded| E[Safe rejection or recovery]
  D --> F[Persistence or dependency]
  F --> G[Correlated operational evidence]
```

The boundary decision must happen before an irreversible side effect. Correlation IDs should cross the request, background-work and integration boundaries without carrying protected business payloads. An explicit rejection or pending state is preferable to silently discarding work. Where the decision spans multiple systems, document the transaction boundary and recovery contract instead of promising an atomic commit across services.

## Step-by-step implementation

### 1. Record the incident identifier, case key, operator, expected field, observed field and approximate event window without copying personal data into tickets

Record the incident identifier, case key, operator, expected field, observed field and approximate event window without copying personal data into tickets. Record the responsible rule, configuration owner and expected observable outcome in an architecture decision record. Review whether the behavior is synchronous, asynchronous or eventually consistent, and specify the authorization context for each execution path. Avoid coupling the check to a single screen or portal implementation; direct services and resumed background work require equivalent controls.

### 2. Check the authoritative work object and case history independently of the portal

Check the authoritative work object and case history independently of the portal; compare update timestamp and expected assignment. Record the responsible rule, configuration owner and expected observable outcome in an architecture decision record. Review whether the behavior is synchronous, asynchronous or eventually consistent, and specify the authorization context for each execution path. Avoid coupling the check to a single screen or portal implementation; direct services and resumed background work require equivalent controls.

### 3. Follow the integration correlation ID through connector response, Queue Processor item and retry or broken-item records

Follow the integration correlation ID through connector response, Queue Processor item and retry or broken-item records. Record the responsible rule, configuration owner and expected observable outcome in an architecture decision record. Review whether the behavior is synchronous, asynchronous or eventually consistent, and specify the authorization context for each execution path. Avoid coupling the check to a single screen or portal implementation; direct services and resumed background work require equivalent controls.

### 4. Confirm whether transaction boundaries reached Commit and whether optimistic or pessimistic locking rejected the write

Confirm whether transaction boundaries reached Commit and whether optimistic or pessimistic locking rejected the write. Record the responsible rule, configuration owner and expected observable outcome in an architecture decision record. Review whether the behavior is synchronous, asynchronous or eventually consistent, and specify the authorization context for each execution path. Avoid coupling the check to a single screen or portal implementation; direct services and resumed background work require equivalent controls.

### 5. Invalidate or refresh the relevant Data Page only after identifying its scope and freshness policy

Invalidate or refresh the relevant Data Page only after identifying its scope and freshness policy; avoid treating cache refresh as a write fix. Record the responsible rule, configuration owner and expected observable outcome in an architecture decision record. Review whether the behavior is synchronous, asynchronous or eventually consistent, and specify the authorization context for each execution path. Avoid coupling the check to a single screen or portal implementation; direct services and resumed background work require equivalent controls.

### 6. Apply an approved replay or repair procedure with idempotency checks, ownership, audit note and post-repair verification

Apply an approved replay or repair procedure with idempotency checks, ownership, audit note and post-repair verification. Record the responsible rule, configuration owner and expected observable outcome in an architecture decision record. Review whether the behavior is synchronous, asynchronous or eventually consistent, and specify the authorization context for each execution path. Avoid coupling the check to a single screen or portal implementation; direct services and resumed background work require equivalent controls.


## Design alternatives and trade-offs

Automated replay speeds restoration but risks duplicate side effects; manual repair is slower and requires stronger dual control. An architecture review should compare the primary option against a simpler baseline using operational complexity, rollback safety, failure isolation, data sensitivity and support burden. Document what the team deliberately does not automate, especially recovery operations that could produce duplicate business actions. Favor reversible configuration changes and a narrow rollout cohort when the failure mode has not been reproduced in a controlled environment.

## Production failure mechanics

An acknowledged HTTP response is not proof of committed Pega state. Queue items may be retried, a flow may not advance, or a cached Data Page may display an old value. In incident response, distinguish the original triggering event from secondary effects such as retries, stale cache entries, inconsistent sessions or operator rework. Collect a sanitized timeline with request correlation, effective ruleset, node or execution context, queue state and final persistence outcome. Do not infer root cause from a single error message. An apparently successful connector invocation may be followed by a failed commit, and a displayed stale value may conceal a correct committed write.

## Reproducible verification matrix

| Experiment | Setup and stimulus | Expected evidence | Failure interpretation |
|---|---|---|---|
| V1: Write committed but portal stale | Seed synthetic data, pin access group and rule versions, then execute the scenario | Correlated trace, authoritative state, safe error category and pass/fail assertion | Compare rule resolution, boundary decision, transaction or queue outcome |
| V2: Queue item delayed | Seed synthetic data, pin access group and rule versions, then execute the scenario | Correlated trace, authoritative state, safe error category and pass/fail assertion | Compare rule resolution, boundary decision, transaction or queue outcome |
| V3: Duplicate callback received | Seed synthetic data, pin access group and rule versions, then execute the scenario | Correlated trace, authoritative state, safe error category and pass/fail assertion | Compare rule resolution, boundary decision, transaction or queue outcome |
| V4: Lock failure before commit | Seed synthetic data, pin access group and rule versions, then execute the scenario | Correlated trace, authoritative state, safe error category and pass/fail assertion | Compare rule resolution, boundary decision, transaction or queue outcome |
| V5: Wrong case correlation ID | Seed synthetic data, pin access group and rule versions, then execute the scenario | Correlated trace, authoritative state, safe error category and pass/fail assertion | Compare rule resolution, boundary decision, transaction or queue outcome |

Use a version-pinned nonproduction environment with synthetic records. Capture the test input, operator role, application version, rule versions, node type and relevant configuration. Run each experiment both before and after the proposed change, and include a negative test that attempts to bypass the intended UI path. A test passes only when both the business outcome and the security or recovery invariant are satisfied. Do not substitute screenshots for assertions on persisted state, access decisions or integration side effects.

## Operations and rollback

Monitor **case age beyond expected transition, queue lag, retry counts, cache age, mismatched external and internal state**. Agree on an alert owner, escalation window and a documented safe action for each signal. During rollout, use a limited cohort and compare error categories and latency distributions against a recorded baseline rather than a fabricated numerical target. If rollback is required, first identify work already committed or dispatched; reverting rules alone cannot undo external side effects. Keep a replay ledger or idempotency reference for any controlled reprocessing, and audit who approved a manual repair.

## Architecture review checklist

- Is the authoritative state and execution identity explicit at each boundary?
- Are negative paths and direct API or background entry points covered?
- Are logs and diagnostics free of customer payloads and credentials?
- Can support distinguish delayed, rejected, duplicated and committed work?
- Does rollback preserve compatibility with open cases and queued items?
- Are performance and security assumptions testable in the actual platform version?

## Verification status and further reading

**Design-backed, lab verification pending.** The matrix specifies experiments to execute; no lab run, benchmark or platform-version certification is claimed. Use your licensed platform's matching-version documentation for rule configuration and security semantics. Official primary documentation: [Pega Documentation](https://docs.pega.com/) and [Pega Academy](https://academy.pega.com/). Review the actual deployment's supported feature set before adopting these patterns.
