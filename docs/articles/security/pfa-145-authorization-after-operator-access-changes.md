---
layout: default
title: 'Authorization after an operator''s access changes'
topic_id: PFA-145
category: security
earliest_git_year: 2018
verification: design-backed-lab-pending
---

# Authorization after an operator's access changes

## Incident: a removed investigator still edits a case

A bank revokes a fraud investigator's regional entitlement at 14:00. The investigator has a browser tab open with a disputed-transfer case and an assignment form already loaded. At 14:07 the investigator submits the form. The portal menu no longer advertises the investigation queue after a later login, yet the existing requestor can still submit a previously loaded action. A second integration exposes the case through Service REST using a technical operator. The security review had tested only fresh login and visible menu items.

This is a **revocation propagation problem**. Authentication, assignment routing, role-based access, object-level authorization and cached requestor context are different boundaries. Hiding a worklist is not equivalent to denying a case update. Define a revocation objective, for example denying all new privileged mutations after the authoritative entitlement change has propagated, with a documented maximum delay and forced session invalidation where needed. Do not claim that an Access Group edit instantly updates every active requestor.

## Pega security architecture

- **Operator ID and Access Group** establish the application's requestor context. Access Roles and Access of Role to Object rules provide baseline class operations. A role or access group change must be tested against active sessions, not inferred from its saved record.
- **Access Control Policy and Access Control Policy Condition** provide attribute-based decisions for sensitive case records. Evaluate tenant, region, legal hold and investigator assignment against authoritative data. Policy enforcement points depend on the operation and Pega release.
- **Flow Action, case stage and assignment** determine which actions are offered. Recheck authorization at the server-side execution boundary; a hidden button is not a security control.
- **Service REST, service package and authentication profile** require explicit service-identity permissions. A shared integration operator must not bypass the caller's record entitlement by default.
- **Data Pages** such as D_InvestigatorEntitlement[OperatorId,Region] can provide a typed entitlement lookup, but a node-scoped cache without revocation semantics is unsafe for time-sensitive decisions.

## Enforcement sequence

~~~mermaid
flowchart TD
 A[Entitlement revoked in IAM] --> B[Event or reconciliation updates authority]
 B --> C[Invalidate entitlement cache and sessions]
 D[Existing browser submits Flow Action] --> E[Server authenticates requestor]
 E --> F[Resolve role and object policy]
 F --> G{Current entitlement and case scope valid?}
 G -->|No| H[Deny mutation and log decision]
 G -->|Yes| I[Check case lock and assignment]
 I --> J[Commit authorized case transition]
 K[Service REST caller] --> L[Map caller identity to business scope]
 L --> F
~~~

## Implementation decisions

1. **Map every privileged entry point.** Inventory portal actions, direct case URLs, DX API calls, Service REST endpoints, queue processor activities and bulk update jobs. Record the exact Pega class and operation each path invokes. Identify paths executing under service or background operators.
2. **Separate authority from presentation.** The identity provider owns workforce entitlement; Pega owns case-specific restrictions. Choose whether region membership is stored in a Pega data type or resolved from a trusted service. Specify update latency, fallback on IAM outage and who approves emergency access.
3. **Build a reusable authorization decision.** Apply least-privilege Access Roles, Access of Role to Object and, where supported, Access Control Policy conditions for sensitive record attributes. Model a case predicate such as assigned-region equals current authorized region and confidentiality clearance is valid. Avoid a client-supplied Region value as the source of truth.
4. **Constrain stale sessions.** Document the authentication service and session timeout controls. If the platform cannot guarantee immediate propagation of an operator or role edit to active requestors, invalidate affected sessions using supported operational procedures, then force a fresh authorization context. Never assume clearing a browser cache is sufficient.
5. **Harden the write path.** Reevaluate permission immediately before executing a Flow Action or sensitive service operation. For asynchronous jobs, carry a business actor reference and validate authorization when policy requires current actor authority; distinguish that from system-owned mandatory work that should continue after an employee leaves.
6. **Log without leaking.** Record decision outcome, case identifier, actor identifier, policy revision and correlation ID. Do not log full sensitive case payloads or tokens. Add an audit view for denied writes after revocation.

## Production failure mechanics and tradeoffs

A requestor may retain an earlier application stack or resolved authorization context. A node-level entitlement Data Page can remain warm after an IAM change. Assignment ownership can also be stale if routing and access control are conflated. For high-risk cases, prefer a fresh authorization lookup or tightly bounded requestor-scoped cache over broad node caching, accepting extra latency. For lower-risk read-only navigation, a short cache may be reasonable if its staleness is documented.

Immediate forced logout reduces exposure but interrupts legitimate work and can lose unsaved form state. Record that operational tradeoff explicitly. A Service REST call executed by a powerful service operator is not automatically authorized merely because the API gateway authenticated the caller; propagate verified business identity or apply a documented service-purpose policy. Fail closed on an unavailable authoritative permission source for privileged writes, while allowing non-sensitive incident reporting.

## Reproducible verification matrix

| Scenario | Setup and action | Expected evidence |
|---|---|---|
| Active requestor | Open assignment, revoke region, submit without logout | Mutation denied within documented revocation window; no case status change |
| Fresh login | Revoke role, authenticate again | No privileged assignment or direct URL access |
| API bypass | Call Service REST for a foreign-region case | Server-side denial, even if case ID is known |
| Warm cache | Prime entitlement Data Page on two nodes, revoke | Both nodes honor invalidation or bounded expiry |
| Background processing | Queue an authorized job, then revoke employee | Outcome follows explicit actor-versus-system policy |
| IAM outage | Disconnect entitlement service before privileged update | Defined fail-closed behavior and actionable alert |
| Recovery | Restore entitlement and renew requestor | Allowed action only after authority confirms restoration |

Run each scenario under the actual access groups, roles and Pega version in a controlled test environment. Capture rule names, response codes and audit events; no laboratory result is claimed here.

## Primary Pega references

- [Creating an access control policy, Pega Platform '23](https://docs.pega.com/bundle/platform-23/page/platform/security/create-access-control-policy.html)
- [Viewing case authorizations for an Access Group, Pega Platform '24.2](https://docs.pega.com/bundle/platform-242/page/platform/security/view-authorizations-case-type-items-single-access-group.html)
- [Authentication and session management, Pega Platform '24.1](https://docs.pega.com/bundle/platform-241/page/platform/security/authentication.html)

**Version boundary:** Security UI, API coverage and policy evaluation behavior vary by Pega release. Verify supported policy enforcement and session invalidation procedures for the deployed version before making a revocation guarantee.
