---
layout: default
title: "Large payload handling and streaming alternatives"
topic_id: PFA-102
category: integrations
earliest_git_year: 2018
verification: design-backed-lab-pending
---

# Large payload handling and streaming alternatives

**PFA-102** | Pega SSA/LSA reference implementation | Actual lab test pending

## Incident and business outcome

A claims partner sends PDF evidence of 80MB via a JSON base64 field. The Service REST rule materializes the entire payload into Clipboard and repeats it in diagnostic logging, causing memory spikes and long request times.

The architecture must identify a stable operation identity and separate case state, asynchronous delivery, integration outcome and authorization. The same message can execute more than once unless the business protocol rules out duplicate effects.

## Processing architecture

```mermaid
flowchart LR
  Q0["Client upload"]
  Q1["API gateway limit"]
  Q2["Pega Service REST"]
  Q3["Document content store"]
  Q4["Case attachment reference"]
  Q0 --> Q1
  Q1 --> Q2
  Q2 --> Q3
  Q3 --> Q4
```

## Pega execution artifacts

1. **Service REST**. Document the version, queue/service context, business identifier and observable failure outcome.
2. **Service Package**. Document the version, queue/service context, business identifier and observable failure outcome.
3. **Attachment data model**. Document the version, queue/service context, business identifier and observable failure outcome.
4. **Content repository**. Document the version, queue/service context, business identifier and observable failure outcome.
5. **case metadata**. Document the version, queue/service context, business identifier and observable failure outcome.

## Implementation design steps

1. Set accepted content types and maximum payload limits at gateway and Pega ingress rather than trusting a browser-side check.

2. For large binary documents use an approved direct-to-content-store or chunked upload integration where supported; don't blindly embed raw data in case Page Lists.

3. Store an immutable document reference, hash, size, uploader identity, scan status and permitted owners in Pega case data.

4. Keep download and processing rights separate from upload permission; malware scanning must complete before general access.

5. Avoid logging binary payloads, encoded identifiers or access tokens; instrument processing time, payload size and rejected requests instead.

A complete application example should use a documented rule and class naming scheme, stable case/operation IDs, data shape, service API contract and a support-owned recovery path. Exact settings must be tested in the target Pega release.

## Alternatives

- **Choice 1:** Base64 inside JSON is easy for one small document but wastes memory.
- **Choice 2:** external content-store flow scales better but needs reference/receipt security.

Architecture acceptance depends on business correctness after a duplicate, delay or partial failure, not merely on low response time when the partner is healthy.

## Failure mechanics

A timeout occurs after content upload but before case attachment reference saved; retry creates orphaned files or duplicates.

For diagnostics capture the Pega case version, queue item/operation ID, current access group, retry attempt, outbound request correlation and remote receipt. An error status is not evidence the remote system made no change.

## Validation experiments

1. **Scenario 1:** Upload max-size document. Record actual result, remote side effect count and elapsed time or backlog age.
2. **Scenario 2:** kill request after content-store commit. Record actual result, remote side effect count and elapsed time or backlog age.
3. **Scenario 3:** attempt unauthorized download of stored document. Record actual result, remote side effect count and elapsed time or backlog age.

All tests remain proposed. The article does not claim that a live Pega lab was executed or that hypothetical measurements are production evidence.

## Deployment and ongoing support

Add a rollback or forward-repair plan for in-flight queue items and live cases. Include alerting for broken items, oldest age, invalid business payloads and provider failures, together with safe replay privileges and audit trail. For sensitive data, verify inbound/outbound minimization and identity controls.

## Official Pega reference

- [Pega Academy: Authentication](https://academy.pega.com/topic/authentication/v6)

*Independent technical study with fictional scenario. Verify configuration against the deployed Pega release.*
