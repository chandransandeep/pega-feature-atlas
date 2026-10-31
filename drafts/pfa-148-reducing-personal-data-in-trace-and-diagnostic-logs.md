---
layout: default
title: 'Reducing personal data in trace and diagnostic logs'
topic_id: PFA-148
category: security
earliest_git_year: 2018
verification: design-backed-lab-pending
---

# Reducing personal data in trace and diagnostic logs

## Enterprise incident and architectural boundary

A claims investigator enables Tracer with clipboard values while investigating an intermittent authorization defect. A customer identifier, bank detail and free-text medical note reach a shared diagnostic archive. The incident is now a privacy exposure rather than merely a slow case. This is a design scenario, not a claim about a measured production incident. The central architecture question is which component owns the control, how failure is observed, and how the team proves that the control survives an upgrade and an operational incident. A successful happy-path demonstration is insufficient because the damaging behavior often appears on retry, restart, migration, or operator handoff.

## Pega implementation surface

Relevant Pega objects and runtime surfaces include Tracer, PAL, PegaRULES logs, access groups, properties, data pages, and security event logging. The implementation team must inspect actual rule resolution in the deployed application stack rather than assume that the latest edited rule is the runtime rule. Access groups, application rules, class inheritance and ruleset availability can change the effective behavior. Where a named capability differs by Pega Platform or product release, validate it against the target version before choosing a rule form or configuration field.

## Design decision

Use a controlled diagnostic access group, an approved redacted correlation token, and a time-boxed Tracer session. Keep sensitive properties out of log statements and custom exception messages. Route production diagnostics through restricted sinks with retention controls. Keep the control at the narrowest stable boundary that covers interactive requests and asynchronous execution. Separate business policy from infrastructure failure handling so that a timeout, a retry, or a delayed message cannot silently change the business outcome. Record the owning team, escalation path, configuration location and safe rollback trigger in the architecture decision record.

## Technical flow

```mermaid
flowchart TD
    A[Business request or queued work] --> B[Resolve application rules and identity]
    B --> C[Validate policy and correlation context]
    C --> D{Preconditions satisfied?}
    D -- Yes --> E[Execute bounded Pega processing]
    D -- No --> F[Reject or route for human review]
    E --> G{Verified outcome?}
    G -- Yes --> H[Persist outcome and audit reference]
    G -- Unknown --> I[Quarantine and reconcile]
    I --> J[Controlled retry or manual correction]
    J --> C
    H --> K[Operational evidence and monitoring]
    F --> K
```

The diagram is a logical control flow, not an assertion that every release provides a built-in circuit breaker, correlation propagation or quarantine queue. Implement missing controls in the application integration layer and test their behavior. The verified outcome is a business fact, not merely a successful HTTP response or an Activity step returning without an exception.

## Step-by-step architecture and implementation

1. **Baseline the deployed application.** Capture application version, ruleset stack, rule keys, access group, relevant class mappings, node topology and dependency endpoints. Record the current business behavior using synthetic data and a repeatable case identifier. Distinguish configuration owned by Pega from configuration owned by the connected system.
2. **Map the failure path.** Trace only the minimal rule set and event types; inspect whether a Data Transform or Activity writes pyWorkPage or parameter values to logs; replace identifiers with irreversible support tokens; set retention and access policy on central logs; rehearse the incident with synthetic records. Break the sequence into entry, authorization, processing, persistence, downstream acknowledgement and operational recovery. For every transition identify the unique correlation token and the system that owns authoritative state.
3. **Implement the guardrail.** Configure the appropriate Pega rule or integration wrapper so invalid state cannot enter the expensive or irreversible path. Keep validation separate from presentation. Avoid copying entire clipboard pages into log messages or external payloads when only a few properties are required.
4. **Handle retries explicitly.** Choose an idempotency key based on the business operation, not the requestor session. Define which failures are retryable, the maximum retry window and the reconciliation path for unknown completion. An asynchronous retry must not create a second case outcome or overwrite a newer approved value.
5. **Instrument with privacy controls.** Emit event type, case reference token, rule version, attempt number, elapsed duration and result class. Restrict access to diagnostics, use an appropriate retention policy and redact customer values before they leave the requestor context.
6. **Deploy through a controlled release.** Package dependent rules and data with explicit version requirements. Rehearse the rollback while representative open cases and queued work exist. If reverting a rule cannot safely undo persisted changes, use a forward-fix or compatibility adapter instead of an unconditional rollback.
7. **Transfer to operations.** Provide a runbook with symptoms, dashboards, evidence queries, safe pause/resume instructions, decision owner and escalation criteria. The runbook must identify when human intervention is required and how to prevent repeat processing.

## Tradeoffs and rejected alternatives

Raw clipboard export is easier to debug but exposes nested values. Hashing a customer ID is not automatically anonymous if the input space is small. A token vault offers reversibility but creates a high-value secret. The chosen design should optimize for predictable failure, recoverability and auditability, not only average throughput. A lower implementation cost is not sufficient justification if an operator cannot distinguish completed, failed and unknown outcomes. A more centralized control may improve consistency but increase blast radius; decentralized controls require contract tests to prevent drift. Document the alternative, its cost and the condition that would justify revisiting it.

## How production failure actually develops

The exception handler logs the entire request page on a retry, so a one-time redaction in the initial request is bypassed. A background queue processor logs the same payload under a different service account. The incident can be amplified by a second node, a stale data page, a retry after timeout, or a new ruleset version resolving for a resumed assignment. Treat an acknowledgement as evidence only for the operation it actually confirms. Monitor both technical symptoms and business invariants, because a green infrastructure dashboard can coexist with an incorrect case state. Preserve enough immutable identifiers to reconstruct the event chain without retaining unnecessary personal information.

## Reproducible verification matrix

| Test | Setup and action | Required evidence |
|---|---|---|
| V1 | Synthetic sensitive field never appears in Tracer export or central log using synthetic test cases and a controlled fault or configuration change | Case audit, rule version, correlated logs and before/after state; record actual observed result in lab |
| V2 | Failing connector retains only correlation token using synthetic test cases and a controlled fault or configuration change | Case audit, rule version, correlated logs and before/after state; record actual observed result in lab |
| V3 | Support role cannot access raw payload using synthetic test cases and a controlled fault or configuration change | Case audit, rule version, correlated logs and before/after state; record actual observed result in lab |
| V4 | Retention expiry deletes diagnostic copy using synthetic test cases and a controlled fault or configuration change | Case audit, rule version, correlated logs and before/after state; record actual observed result in lab |
| V5 | Deploy a compatible rule change while an old case or queued item is pending | No duplicate or lost business outcome; explicit reconciliation record if uncertain |
| V6 | Revoke relevant operator or service permissions during the workflow | Denied operation with no unauthorized state change and no sensitive diagnostic leak |

**Evidence status:** These are acceptance tests to execute, not test results. No latency, success rate, screenshot or security certification is claimed. Capture environment version, exact configuration, test input, timestamp and observed outcome before changing verification status.

## Architecture review checklist

The LSA review should confirm that business ownership is explicit, rule resolution is understood, asynchronous paths have equivalent controls, failure can be safely replayed, and observability does not introduce a new privacy or availability risk. Confirm the decision is compatible with the target Pega Platform release and product licenses. Prefer supported Pega configuration and documented extension points over private runtime internals. Where the platform does not expose a required hook, identify an integration boundary rather than assuming undocumented behavior.

## Operational exit criteria

Release approval requires an identified owner for the business invariant, an executable negative-path test, a monitored error budget, and a rollback or forward-recovery plan that has been rehearsed with non-production data. A production incident must be recoverable from case history and correlation records without manual database edits. Review these criteria after every significant application upgrade or dependency change.
