---
layout: default
title: "Delayed Queue Processor scheduling semantics"
topic_id: PFA-109
category: background-processing
earliest_git_year: 2018
verification: design-backed-lab-pending
---

# Delayed Queue Processor scheduling semantics

**PFA-109** | Pega SSA/LSA reference implementation | Actual lab test pending

## Incident and business outcome

A medical claims platform schedules Queue Processor work for the next business morning, but a developer uses a fixed 12-hour delay and assumes it is always 9am local time. DST and regional holidays make scheduled processing occur at the wrong time.

The architecture must identify a stable operation identity and separate case state, asynchronous delivery, integration outcome and authorization. The same message can execute more than once unless the business protocol rules out duplicate effects.

## Processing architecture

```mermaid
flowchart LR
  Q0["Business due date"]
  Q1["Timezone calendar conversion"]
  Q2["Delayed Queue Processor"]
  Q3["Eligibility recheck"]
  Q4["Outcome receipt"]
  Q0 --> Q1
  Q1 --> Q2
  Q2 --> Q3
  Q3 --> Q4
```

## Pega execution artifacts

1. **Dedicated Queue Processor**. Document the version, queue/service context, business identifier and observable failure outcome.
2. **Run in Background**. Document the version, queue/service context, business identifier and observable failure outcome.
3. **business calendar**. Document the version, queue/service context, business identifier and observable failure outcome.
4. **case due-date property**. Document the version, queue/service context, business identifier and observable failure outcome.
5. **delay configuration**. Document the version, queue/service context, business identifier and observable failure outcome.

## Implementation design steps

1. Define due time as a timezone-aware business timestamp, not an elapsed delay unless the business truly requires elapsed time.

2. Check the delayed-processing capability and limits for the selected Pega release, including worker/node associations.

3. Persist exact due instant and business calendar version on the case; the queue delay is a transport mechanism, not the only audit record.

4. Before processing, re-check case status, business due date and cancellation/version to reject obsolete scheduled operations.

5. Monitor oldest delayed item, on-time completion rate and fallback recovery after platform maintenance.

A complete application example should use a documented rule and class naming scheme, stable case/operation IDs, data shape, service API contract and a support-owned recovery path. Exact settings must be tested in the target Pega release.

## Alternatives

- **Choice 1:** Fixed delay suits uniform intervals but not calendar-based obligations.
- **Choice 2:** absolute business date supports contract but needs timezone logic.

Architecture acceptance depends on business correctness after a duplicate, delay or partial failure, not merely on low response time when the partner is healthy.

## Failure mechanics

Delayed message executes after case was cancelled or local DST shifts scheduled wall-clock time. A retry may trigger duplicate notices.

For diagnostics capture the Pega case version, queue item/operation ID, current access group, retry attempt, outbound request correlation and remote receipt. An error status is not evidence the remote system made no change.

## Validation experiments

1. **Scenario 1:** Test DST forward/back. Record actual result, remote side effect count and elapsed time or backlog age.
2. **Scenario 2:** cancel case before due. Record actual result, remote side effect count and elapsed time or backlog age.
3. **Scenario 3:** restore worker after missed due window. Record actual result, remote side effect count and elapsed time or backlog age.

All tests remain proposed. The article does not claim that a live Pega lab was executed or that hypothetical measurements are production evidence.

## Deployment and ongoing support

Add a rollback or forward-repair plan for in-flight queue items and live cases. Include alerting for broken items, oldest age, invalid business payloads and provider failures, together with safe replay privileges and audit trail. For sensitive data, verify inbound/outbound minimization and identity controls.

## Official Pega reference

- [Pega Academy: Queue processors](https://academy.pega.com/topic/queue-processors-and-job-schedulers/v2)

*Independent technical study with fictional scenario. Verify configuration against the deployed Pega release.*
