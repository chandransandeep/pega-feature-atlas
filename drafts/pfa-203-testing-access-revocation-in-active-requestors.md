---
layout: default
title: 'Testing access revocation in an active requestor'
topic_id: PFA-203
category: testing
earliest_git_year: 2019
verification: design-backed-lab-pending
---

# Testing access revocation in an active requestor

## Failure scenario: the test suite logs out too early

A healthcare organization changes a nurse's access group after the nurse transfers departments. Automated regression tests log in afresh after every role update, so all tests pass. In production, the nurse's already-open case form still posts a sensitive note, while an open API client continues to fetch the patient record. The application relied on hiding navigation and assumed that updating an Operator ID invalidated every requestor instantly.

A meaningful revocation test must preserve **the original requestor and its stale client state** across the entitlement change. The acceptance criterion is a server-side denial of unauthorized data access or mutation within the documented revocation window, not merely the disappearance of a menu entry. Distinguish session invalidation, application stack resolution, class-level permissions, record-level policy and assignment access.

## Security rules and test fixtures

Create two synthetic departments, East and West, and two cases with synthetic patient identifiers. Define a test Access Group for a clinician and a separate security administrator. Configure least-privilege Access Roles, Access of Role to Object and, where supported, Access Control Policy conditions on the work and sensitive data classes. Include a Flow Action that updates a sensitive note and a Service REST read endpoint. Use a Data Page for departmental entitlement only if its cache scope and invalidation are explicit.

Do not use actual patient data. Build an entitlement fixture with a monotonically increasing revision, such as Revision 17 before revocation and Revision 18 afterward. Record the revision evaluated by the authorization rule so a failed test can distinguish stale cached authorization from a missing policy.

## Test sequence

~~~mermaid
sequenceDiagram
 participant T as Test harness
 participant U as Active requestor
 participant I as Identity authority
 participant P as Pega authorization
 participant C as Case storage
 T->>U: Login and open sensitive case
 U->>P: Read authorized case
 P->>C: Return case
 T->>I: Revoke East department
 I-->>P: Entitlement update or invalidation
 T->>U: Submit previously loaded Flow Action
 U->>P: Attempt sensitive update
 P-->>U: Deny or require reauthentication
 T->>C: Inspect persisted record and audit
 C-->>T: No unauthorized change
~~~

## Reproducible implementation

1. **Build the authorization contract.** List which operations must be denied: case open, list search, Flow Action submission, assignment completion, attachment download and Service REST read/update. Define the propagation deadline and whether a session should be terminated or a new policy evaluation should occur.
2. **Prepare controlled operators and cases.** Create an active clinician requestor with an East entitlement and a second operator with West-only access. Keep the browser tab and authentication cookies alive. Prime any entitlement Data Page on at least two nodes.
3. **Capture a baseline.** Prove the East operator can view and edit the East case and cannot access the West case. Capture only synthetic identifiers, policy revision and HTTP status. Baseline success is a precondition, not evidence of revocation.
4. **Change the authority while preserving the session.** Revoke the East entitlement in the authoritative store. Trigger the supported propagation mechanism, or measure its natural delay. Do not manually log out unless forced logout is the explicit product design.
5. **Replay stale interactions.** Submit the previously rendered Flow Action, reuse a known case URL, call the read API and try an attachment URL. Include a forged region parameter and an assignment ID known before revocation.
6. **Inspect server-side persistence.** Verify pyWorkPage changes were not committed, the case history has no unauthorized update, and the denied attempt is auditable. A browser error alone is insufficient because a commit might have succeeded before the response failed.
7. **Test recovery.** Restore access through the authority, renew the requestor as required and prove the authorized operation works again. Confirm an unrelated operator is unaffected.

## Automation boundaries and tradeoffs

PegaUnit tests are valuable for deterministic policy conditions, decision rules and data transforms. They do not by themselves reproduce browser cookies, requestor lifetime, gateway identity propagation or node-scoped caches. Use a controlled integration harness for active-session cases, with PegaUnit supporting the rule-level predicate tests. Browser automation is appropriate for stale forms; API tests must independently assert server-side denial.

Forced logout gives a clear revocation boundary but disrupts unfinished work. Periodic policy revalidation reduces login churn but allows a bounded stale interval. The test suite must validate the selected architecture, not assume one universal Pega behavior. An asynchronous job already accepted before revocation needs a separately defined system-versus-human authority policy.

## Verification matrix

| Test | Precondition | Required assertion |
|---|---|---|
| Existing tab | Sensitive Flow Action loaded before revocation | Server denies stale submission; no case mutation |
| Direct case link | Case ID known before revocation | Access policy denies record |
| Data Page cache | Warm requestor and node cache | Revocation takes effect inside approved window |
| Second node | Same operator routed to alternate node | Same decision as first node |
| Service identity | API called with valid service token | Caller business scope enforced |
| Attachment | Previously issued attachment URL | Content not disclosed after revocation |
| Concurrent save | Revocation races with case commit | Defined ordering and audit, no unexplained partial write |
| Restoration | New approved entitlement revision | Access resumes only after expected refresh |

Capture the release, session policy and policy-rule names with each run. No test execution is claimed in this article.

## Primary Pega references

- [Viewing case authorizations for an Access Group](https://docs.pega.com/bundle/platform-242/page/platform/security/view-authorizations-case-type-items-single-access-group.html)
- [Creating an access control policy](https://docs.pega.com/bundle/platform-23/page/platform/security/create-access-control-policy.html)
- [Pega development practices including unit tests](https://docs.pega.com/bundle/platform-242/page/platform/app-dev/best-practices-infinity-application-development.html)

**Version boundary:** The active-requestor behavior and available policy enforcement points must be verified on the installed Pega release. This matrix is a proposed regression suite, not a claim about automatic invalidation.
