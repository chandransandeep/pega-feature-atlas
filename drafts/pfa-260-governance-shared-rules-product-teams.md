---
layout: default
title: 'Governance of shared rules across product teams'
topic_id: PFA-260
category: modernization
earliest_git_year: 2018
verification: design-backed-lab-pending
---

# Governance of shared rules across product teams

## Failure scenario: one common rule breaks four applications

A bank's lending, cards, complaints and collections applications depend on a shared CustomerEligibility Decision Table. The cards team changes the table to introduce a new customer segment and checks it into a shared ruleset. Lending begins routing applicants into an unsupported verification stage because the shared table's input assumptions changed. The change passes the cards team's tests but never runs through the consumers' application stacks. A rollback requires a new shared ruleset version and coordinated deployment, not simply restoring one team's branch.

A shared Pega ruleset is a **versioned product interface**. Ownership, dependency compatibility, release cadence and consumer verification matter as much as the rule itself. The fact that a rule can be reused through application composition does not mean it should be shared globally.

## Pega composition and rule boundaries

- **Application rules and built-on applications** establish a dependency graph. A consumer must explicitly choose which shared component version it supports.
- **Ruleset versions and Ruleset security** control which rules are packaged, locked and promoted. Branch rulesets support parallel development but do not replace compatibility review.
- **Class inheritance and rule resolution** determine which specialization executes at runtime. A shared rule that relies on a consumer-specific class or circumstanced property has a hidden dependency.
- **Decision Tables, Data Transforms, Data Pages and Validation rules** are common reuse candidates when they operate on a stable, documented contract. Avoid a shared Data Page whose cache key omits tenant or application context.
- **Product rules and Deployment Manager** provide release packaging and promotion boundaries. A shared component upgrade should be treated as a dependency upgrade with an explicit consumer test matrix.

## Dependency architecture

~~~mermaid
flowchart TD
 A[Shared component application v3] --> B[Contract tests and semantic change review]
 B --> C[Locked versioned ruleset]
 C --> D[Lending application stack]
 C --> E[Cards application stack]
 C --> F[Complaints application stack]
 C --> G[Collections application stack]
 D --> H[Consumer regression suite]
 E --> H
 F --> H
 G --> H
 H --> I{All required consumers compatible?}
 I -->|No| J[Hold release or introduce new interface]
 I -->|Yes| K[Controlled staged promotion]
~~~

## Implementation and governance model

1. **Inventory shared assets and consumers.** Enumerate shared Rulesets, built-on applications, class dependencies and actual rule usage. Record each consuming application's access group, production version and release owner. An unused dependency should be removed, not preserved forever.
2. **Define a contract per component.** For a shared eligibility Decision Table, document input class, required properties, output values, error behavior and versioned policy assumptions. For a Data Page, document parameters, scope, refresh policy, authorization and allowed side effects.
3. **Assign an accountable owner.** A platform team owns compatibility policy and release process, while domain teams own business meaning. Require an architecture decision for any shared rule that mixes unrelated domains. Establish a deprecation owner and end date.
4. **Use explicit version adoption.** Create a new Ruleset version for incompatible behavior. Lock released versions. Do not overwrite an existing locked version or silently widen an application's ruleset version range without testing.
5. **Build consumer contract tests.** Include PegaUnit fixtures for each published rule contract and integration journeys that execute under every relevant application stack. Verify rule resolution, class inheritance, circumstancing and authorized data access.
6. **Promote by dependency order.** Package the shared component before consumers that reference it, and deploy compatible consumers in stages. For active long-running cases, verify that rule resolution after the upgrade remains valid for in-flight assignments.
7. **Manage retirement.** Mark deprecated rules and publish migration instructions. Search rule references before removal, then prove no supported consumer resolves the old rule. Retain old ruleset versions until consumers and active-case obligations are cleared.

## Tradeoffs and production failure mechanics

Sharing reduces duplicated implementation but increases coordination and blast radius. Copying a simple Decision Table into each application permits independent change but risks inconsistent policy. A reusable component is justified when the business semantics are stable and multiple consumers accept a common release contract. If teams need frequent incompatible customization, a narrow API or separate domain-owned rule is often safer than a giant shared ruleset.

Rule resolution can conceal incompatibility: a consumer's specialized rule may shadow a new shared rule in one access group but not another. A shared Data Page can also leak one application's customer context to another if caching scope or parameters are wrong. Testing only the shared component application is therefore insufficient. Keep an application-stack matrix and a rollback plan that respects both current rules and active-case history.

## Reproducible verification matrix

| Scenario | Setup | Required result |
|---|---|---|
| Compatible addition | Add optional output with default | Existing consumers unchanged |
| Breaking output | Remove or rename result code | Contract gate rejects promotion |
| Rule resolution | Execute under four access groups | Expected rule version selected |
| Class specialization | Consumer overrides base rule | Override remains intentional and tested |
| Cache isolation | Same customer ID in different tenants | No cross-application Data Page reuse |
| Partial rollout | One consumer remains on older component | Both supported versions function |
| Long-running case | Open case before shared upgrade | In-flight assignment resumes correctly |
| Rollback | Restore previous consumer dependency | No missing rules or invalid active flow |

The tests require a version-controlled application-stack manifest and real execution in a non-production environment. No compatibility results are claimed.

## Primary Pega references

- [Organizing rules into rulesets and component rulesets](https://docs.pega.com/bundle/platform-242/page/platform/app-dev/organizing-rules-into-rulesets.html)
- [Moving applications between systems](https://docs.pega.com/bundle/platform-242/page/platform/system-administration/migration-applications-systems-moving.html)
- [Pega development best practices](https://docs.pega.com/bundle/platform-242/page/platform/app-dev/best-practices-infinity-application-development.html)

**Version boundary:** Ruleset version numbering conventions, Deployment Manager behavior and application composition details vary by release. Review actual application stacks and package contents before promotion.
