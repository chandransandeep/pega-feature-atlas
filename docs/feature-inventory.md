---
layout: default
title: Pega Architecture Topic Catalogue
---

# Architecture topic catalogue

This is the editorial plan for Pega Feature Atlas. It is not a list of completed articles. Every entry is an architectural question or design challenge intended for experienced Pega engineers. Content is published only after technical review.

**Coverage:** 18 domains, 270 subjects.

## Browse domains

- [01. Platform runtime and distributed deployment](#section-01)
- [02. Rule resolution and application composition](#section-02)
- [03. Case architecture and concurrency](#section-03)
- [04. Flow engine, SLAs and event orchestration](#section-04)
- [05. Data pages, caching and clipboard](#section-05)
- [06. Persistence, data modelling and search](#section-06)
- [07. Integration architecture and API contracts](#section-07)
- [08. Queue processors and scheduled background work](#section-08)
- [09. Constellation, DX API and experience design](#section-09)
- [10. Identity, security and data protection](#section-10)
- [11. Production observability and incident diagnosis](#section-11)
- [12. Performance engineering and scalability](#section-12)
- [13. Delivery pipelines and safe upgrades](#section-13)
- [14. Verification, testing and quality engineering](#section-14)
- [15. Customer Decision Hub and real-time decisioning](#section-15)
- [16. GenAI and intelligent automation](#section-16)
- [17. Process Fabric, external work and robotics](#section-17)
- [18. Modernization, governance and architecture decisions](#section-18)

<a id="section-01"></a>

## 01. Platform runtime and distributed deployment

- **[PFA-001](articles/platform-runtime/pfa-001-request-lifecycle-http-to-rule.md)** Request lifecycle from HTTP entry point to rule execution. _Published (lab verification pending)_
- **[PFA-002](articles/platform-runtime/pfa-002-requestor-thread-lifecycle-clipboard.md)** Requestor and thread lifecycle during simultaneous cases. _Published (lab verification pending)_
- **[PFA-003](articles/platform-runtime/pfa-003-web-background-nodes-classification.md)** Pega node roles and split deployment architecture. _Published (lab verification pending)_
- **[PFA-004](articles/platform-runtime/pfa-004-node-loss-session-and-background-recovery.md)** Cluster behaviour during node loss and session failover. _Published (lab verification pending)_
- **[PFA-005](articles/platform-runtime/pfa-005-session-affinity-versus-stateless-application-assumptions.md)** Session affinity versus stateless application assumptions. _Published (lab verification pending)_
- **[PFA-006](articles/platform-runtime/pfa-006-jvm-requestor-memory-capacity.md)** Sizing JVM heap for high requestor concurrency. _Published (lab verification pending)_
- **[PFA-007](articles/platform-runtime/pfa-007-what-actually-scales-when-additional-nodes-are-added.md)** What actually scales when additional nodes are added. _Published (lab verification pending)_
- **[PFA-008](articles/platform-runtime/pfa-008-stream-service-and-background-recovery.md)** Shared stream service dependencies and their failure modes. _Published (lab verification pending)_
- **[PFA-009](articles/platform-runtime/pfa-009-multi-region-deployment-and-latency-sensitive-workflows.md)** Multi-region deployment and latency-sensitive workflows. _Published (lab verification pending)_
- **[PFA-010](articles/platform-runtime/pfa-010-pega-cloud-connectivity-boundaries-for-enterprise-apis.md)** Pega Cloud connectivity boundaries for enterprise APIs. _Published (lab verification pending)_
- **[PFA-011](articles/platform-runtime/pfa-011-managing-internal-service-discovery-and-endpoint-changes.md)** Managing internal service discovery and endpoint changes. _Published (lab verification pending)_
- **[PFA-012](articles/platform-runtime/pfa-012-separating-interaction-and-background-service-capacity.md)** Separating interaction and background service capacity. _Published (lab verification pending)_
- **[PFA-013](articles/platform-runtime/pfa-013-disaster-recovery-objectives-for-case-processing.md)** Disaster recovery objectives for case processing. _Published (lab verification pending)_
- **[PFA-014](articles/platform-runtime/pfa-014-identifying-bottlenecks-during-a-new-regional-rollout.md)** Identifying bottlenecks during a new regional rollout. _Published (lab verification pending)_
- **[PFA-015](articles/platform-runtime/pfa-015-startup-sequencing-after-infrastructure-maintenance.md)** Startup sequencing after infrastructure maintenance. _Published (lab verification pending)_

<a id="section-02"></a>

## 02. Rule resolution and application composition

- **[PFA-016](articles/rule-resolution/PFA-016-rule-resolution-framework-overrides.md)** Rule resolution precedence across inherited classes. _Published (lab verification pending)_
- **[PFA-017](articles/rule-resolution/pfa-017-circumstancing-across-regions-and-business-lines.md)** Circumstancing across regions and business lines. _Published (lab verification pending)_
- **[PFA-018](articles/rule-resolution/pfa-018-access-group-and-application-stack-resolution-context.md)** Access group and application stack resolution context. _Published (lab verification pending)_
- **[PFA-019](articles/rule-resolution/pfa-019-parallel-team-ruleset-release-contracts.md)** Ruleset versioning for parallel delivery teams. _Published (lab verification pending)_
- **[PFA-020](articles/rule-resolution/pfa-020-pattern-versus-directed-inheritance.md)** When directed inheritance beats pattern inheritance. _Published (lab verification pending)_
- **[PFA-021](articles/rule-resolution/pfa-021-reusable-built-on-component-contracts.md)** Designing reusable component applications. _Published (lab verification pending)_
- **[PFA-022](articles/rule-resolution/pfa-022-avoiding-dependency-cycles-across-shared-rulesets.md)** Avoiding dependency cycles across shared rulesets. _Published (lab verification pending)_
- **[PFA-023](articles/rule-resolution/pfa-023-specialisation-patterns-without-copying-whole-rules.md)** Specialisation patterns without copying whole rules. _Published (lab verification pending)_
- **[PFA-024](articles/rule-resolution/pfa-024-dynamic-class-referencing-and-long-term-maintainability.md)** Dynamic class referencing and long-term maintainability. _Published (lab verification pending)_
- **[PFA-025](articles/rule-resolution/pfa-025-rule-availability-and-production-rollback-constraints.md)** Rule availability and production rollback constraints. _Published (lab verification pending)_
- **[PFA-026](articles/rule-resolution/pfa-026-delegated-business-rules-with-architectural-boundaries.md)** Delegated business rules with architectural boundaries. _Published (lab verification pending)_
- **[PFA-027](articles/rule-resolution/pfa-027-branch-conflicts-in-high-churn-decision-tables.md)** Branch conflicts in high-churn decision tables. _Published (lab verification pending)_
- **[PFA-028](articles/rule-resolution/pfa-028-safe-customization-of-locked-product-extensions.md)** Safe customization of locked product extensions. _Published (lab verification pending)_
- **[PFA-029](articles/rule-resolution/pfa-029-detecting-application-stack-drift-across-environments.md)** Detecting application stack drift across environments. _Published (lab verification pending)_
- **[PFA-030](articles/rule-resolution/pfa-030-upgrading-frameworks-without-breaking-implementation-rules.md)** Upgrading frameworks without breaking implementation rules. _Published (lab verification pending)_

<a id="section-03"></a>

## 03. Case architecture and concurrency

- **[PFA-031](articles/case-management/pfa-031-modelling-multi-party-enterprise-case-hierarchies.md)** Modelling multi-party enterprise case hierarchies. _Published (lab verification pending)_
- **[PFA-032](articles/case-management/PFA-032-parent-child-multi-team-dependencies.md)** Parent-child orchestration across bounded contexts. _Published (lab verification pending)_
- **[PFA-033](articles/case-management/PFA-033-concurrent-case-locking.md)** Case locking under concurrent agent access. _Published (lab verification pending)_
- **[PFA-034](articles/case-management/pfa-034-optimistic-locking-conflict-recovery.md)** Optimistic locking and user conflict recovery. _Published (lab verification pending)_
- **[PFA-035](articles/case-management/pfa-035-long-running-case-release-compatibility.md)** Long-running cases spanning months or years. _Published (lab verification pending)_
- **[PFA-036](articles/case-management/pfa-036-active-case-migration-after-flow-redesign.md)** Active case migration after flow redesign. _Published (lab verification pending)_
- **[PFA-037](articles/case-management/pfa-037-cross-case-dependencies-without-circular-waits.md)** Cross-case dependencies without circular waits. _Published (lab verification pending)_
- **[PFA-038](articles/case-management/pfa-038-parallel-approvals-and-partial-completion-handling.md)** Parallel approvals and partial completion handling. _Published (lab verification pending)_
- **[PFA-039](articles/case-management/pfa-039-re-opening-cases-without-duplicate-side-effects.md)** Re-opening cases without duplicate side effects. _Published (lab verification pending)_
- **[PFA-040](articles/case-management/pfa-040-case-archival-with-searchable-audit-history.md)** Case archival with searchable audit history. _Published (lab verification pending)_
- **[PFA-041](articles/case-management/pfa-041-temporary-cases-versus-immediate-persistence.md)** Temporary cases versus immediate persistence. _Published (lab verification pending)_
- **[PFA-042](articles/case-management/pfa-042-high-volume-case-creation-through-service-endpoints.md)** High-volume case creation through service endpoints. _Published (lab verification pending)_
- **[PFA-043](articles/case-management/pfa-043-bulk-case-transitions-without-lock-storms.md)** Bulk case transitions without lock storms. _Published (lab verification pending)_
- **[PFA-044](articles/case-management/pfa-044-case-attachments-and-content-lifecycle-boundaries.md)** Case attachments and content lifecycle boundaries. _Published (lab verification pending)_
- **[PFA-045](articles/case-management/pfa-045-case-ownership-models-across-teams-and-jurisdictions.md)** Case ownership models across teams and jurisdictions. _Published (lab verification pending)_

<a id="section-04"></a>

## 04. Flow engine, SLAs and event orchestration

- **[PFA-046](articles/flow-sla/pfa-046-flow-persistence-and-transaction-checkpoints.md)** Flow persistence and transaction checkpoints. _Published (lab verification pending)_
- **[PFA-047](articles/flow-sla/pfa-047-business-calendar-sla-timezones.md)** Assignment SLAs across time zones and holiday calendars. _Published (lab verification pending)_
- **[PFA-048](articles/flow-sla/pfa-048-escalation-architecture-that-avoids-notification-floods.md)** Escalation architecture that avoids notification floods. _Published (lab verification pending)_
- **[PFA-049](articles/flow-sla/pfa-049-wait-step-versus-external-event.md)** Wait steps versus externally signalled continuation. _Published (lab verification pending)_
- **[PFA-050](articles/flow-sla/pfa-050-compensation-after-partial-integration.md)** Compensation when a downstream action fails. _Published (lab verification pending)_
- **[PFA-051](articles/flow-sla/pfa-051-parallel-branches-and-joining-asynchronous-results.md)** Parallel branches and joining asynchronous results. _Published (lab verification pending)_
- **[PFA-052](articles/flow-sla/pfa-052-routing-on-dynamic-workload-rather-than-fixed-groups.md)** Routing on dynamic workload rather than fixed groups. _Published (lab verification pending)_
- **[PFA-053](articles/flow-sla/pfa-053-case-cancellation-while-integration-is-in-flight.md)** Case cancellation while integration is in flight. _Published (lab verification pending)_
- **[PFA-054](articles/flow-sla/pfa-054-timeout-budgets-across-an-end-to-end-case-step.md)** Timeout budgets across an end-to-end case step. _Published (lab verification pending)_
- **[PFA-055](articles/flow-sla/pfa-055-orchestrating-human-and-robotic-assignments-together.md)** Orchestrating human and robotic assignments together. _Published (lab verification pending)_
- **[PFA-056](articles/flow-sla/pfa-056-recovering-stalled-flows-after-an-application-release.md)** Recovering stalled flows after an application release. _Published (lab verification pending)_
- **[PFA-057](articles/flow-sla/pfa-057-sla-rules-and-custom-timer-design-trade-offs.md)** SLA rules and custom timer design trade-offs. _Published (lab verification pending)_
- **[PFA-058](articles/flow-sla/pfa-058-business-event-ingestion-without-duplicate-resumes.md)** Business event ingestion without duplicate resumes. _Published (lab verification pending)_
- **[PFA-059](articles/flow-sla/pfa-059-validation-rules-at-trusted-execution-boundaries.md)** Validation rules at trusted execution boundaries. _Published (lab verification pending)_
- **[PFA-060](articles/flow-sla/pfa-060-workflow-exception-models-for-regulated-processes.md)** Workflow exception models for regulated processes. _Published (lab verification pending)_

<a id="section-05"></a>

## 05. Data pages, caching and clipboard

- **[PFA-061](articles/data-pages/pfa-061-parameterized-data-pages-at-scale-and-tenant-isolation.md)** Parameterized Data Pages at scale and tenant isolation. _Published (lab verification pending)_
- **[PFA-062](articles/data-pages/pfa-062-thread-requestor-node-cache-isolation.md)** Thread versus Requestor versus Node data scope. _Published (lab verification pending)_
- **[PFA-063](articles/data-pages/pfa-063-refresh-strategy-freshness-contract.md)** Cache refresh strategies and business freshness contracts. _Published (lab verification pending)_
- **[PFA-064](articles/data-pages/pfa-064-external-event-cache-invalidation.md)** Cache invalidation after external system updates. _Published (lab verification pending)_
- **[PFA-065](articles/data-pages/pfa-065-handling-large-parameter-cardinality-in-agent-sessions.md)** Handling large parameter cardinality in agent sessions. _Published (lab verification pending)_
- **[PFA-066](articles/data-pages/pfa-066-limit-to-a-single-data-page-and-overwritten-instances.md)** Limit to a single Data Page and overwritten instances. _Published (lab verification pending)_
- **[PFA-067](articles/data-pages/pfa-067-chained-data-pages-connector-fanout.md)** Chained Data Pages and hidden integration fan-out. _Published (lab verification pending)_
- **[PFA-068](articles/data-pages/pfa-068-read-only-editable-savable-write-path.md)** Read-only versus editable Data Pages. _Published (lab verification pending)_
- **[PFA-069](articles/data-pages/pfa-069-report-versus-connector-data-pages.md)** Report-backed versus connector-backed Data Pages. _Published (lab verification pending)_
- **[PFA-070](articles/data-pages/pfa-070-designing-a-business-safe-cache-key.md)** Designing a business-safe cache key. _Published (lab verification pending)_
- **[PFA-071](articles/data-pages/pfa-071-avoiding-repeated-load-during-complex-view-rendering.md)** Avoiding repeated load during complex view rendering. _Published (lab verification pending)_
- **[PFA-072](articles/data-pages/pfa-072-managing-error-states-on-cached-external-responses.md)** Managing error states on cached external responses. _Published (lab verification pending)_
- **[PFA-073](articles/data-pages/pfa-073-reference-data-distribution-across-multiple-nodes.md)** Reference data distribution across multiple nodes. _Published (lab verification pending)_
- **[PFA-074](articles/data-pages/pfa-074-clipboard-growth-in-deeply-nested-case-models.md)** Clipboard growth in deeply nested case models. _Published (lab verification pending)_
- **[PFA-075](articles/data-pages/pfa-075-authorization-revocation-cached-lookups.md)** Caching secure lookups after access revocation. _Published (lab verification pending)_

<a id="section-06"></a>

## 06. Persistence, data modelling and search

- **[PFA-076](articles/persistence/pfa-076-class-to-table-mapping-for-large-operational-datasets.md)** Class-to-table mapping for large operational datasets. _Published (lab verification pending)_
- **[PFA-077](articles/persistence/pfa-077-exposed-columns-and-reporting-selectivity.md)** Exposed columns and reporting selectivity. _Published (lab verification pending)_
- **[PFA-078](articles/persistence/pfa-078-report-definition-query-plan-tuning.md)** Optimising Report Definitions through query plans. _Published (lab verification pending)_
- **[PFA-079](articles/persistence/pfa-079-index-design-worklists-case-search.md)** Index design for worklists and case search. _Published (lab verification pending)_
- **[PFA-080](articles/persistence/pfa-080-embedded-page-lists-versus-normalized-child-records.md)** Embedded page lists versus normalized child records. _Published (lab verification pending)_
- **[PFA-081](articles/persistence/pfa-081-large-blob-storage-and-retrieval-trade-offs.md)** Large BLOB storage and retrieval trade-offs. _Published (lab verification pending)_
- **[PFA-082](articles/persistence/pfa-082-search-index-consistency-in-time-critical-screens.md)** Search index consistency in time-critical screens. _Published (lab verification pending)_
- **[PFA-083](articles/persistence/pfa-083-batch-data-migration-while-active-cases-continue.md)** Batch data migration while active cases continue. _Published (lab verification pending)_
- **[PFA-084](articles/persistence/pfa-084-database-transactions-across-case-and-api-boundaries.md)** Database transactions across case and API boundaries. _Published (lab verification pending)_
- **[PFA-085](articles/persistence/pfa-085-dealing-with-hotspot-rows-in-shared-business-counters.md)** Dealing with hotspot rows in shared business counters. _Published (lab verification pending)_
- **[PFA-086](articles/persistence/pfa-086-reconciliation-after-partial-data-import-failures.md)** Reconciliation after partial data import failures. _Published (lab verification pending)_
- **[PFA-087](articles/persistence/pfa-087-reporting-warehouses-versus-operational-reports.md)** Reporting warehouses versus operational reports. _Published (lab verification pending)_
- **[PFA-088](articles/persistence/pfa-088-pagination-for-million-row-data-sets.md)** Pagination for million-row data sets. _Published (lab verification pending)_
- **[PFA-089](articles/persistence/pfa-089-purging-cases-without-erasing-required-audit-evidence.md)** Purging cases without erasing required audit evidence. _Published (lab verification pending)_
- **[PFA-090](articles/persistence/pfa-090-managing-reference-data-versioning-across-releases.md)** Managing reference data versioning across releases. _Published (lab verification pending)_

<a id="section-07"></a>

## 07. Integration architecture and API contracts

- **[PFA-091](articles/integrations/PFA-091-connect-rest-timeouts-and-retries.md)** Connect REST timeout, retry and idempotency design. _Published (lab verification pending)_
- **[PFA-092](articles/integrations/pfa-092-service-rest-for-synchronous-case-creation.md)** Service REST for synchronous case creation. _Published (lab verification pending)_
- **[PFA-093](articles/integrations/pfa-093-oauth-credentials-rotation-and-cache.md)** OAuth token refresh and credential rotation. _Published (lab verification pending)_
- **[PFA-094](articles/integrations/pfa-094-circuit-breaker-and-bulkhead-placement-around-pega.md)** Circuit breaker and bulkhead placement around Pega. _Published (lab verification pending)_
- **[PFA-095](articles/integrations/pfa-095-api-gateway-responsibilities-versus-service-rules.md)** API gateway responsibilities versus service rules. _Published (lab verification pending)_
- **[PFA-096](articles/integrations/pfa-096-end-to-end-correlation-ids-for-distributed-diagnostics.md)** End-to-end correlation IDs for distributed diagnostics. _Published (lab verification pending)_
- **[PFA-097](articles/integrations/pfa-097-rest-schema-evolution-without-breaking-consumers.md)** REST schema evolution without breaking consumers. _Published (lab verification pending)_
- **[PFA-098](articles/integrations/pfa-098-asynchronous-callback-version-correlation.md)** Handling asynchronous partner callbacks securely. _Published (lab verification pending)_
- **[PFA-099](articles/integrations/pfa-099-integration-error-taxonomies-and-business-recovery.md)** Integration error taxonomies and business recovery. _Published (lab verification pending)_
- **[PFA-100](articles/integrations/pfa-100-controlling-fan-out-to-dozens-of-downstream-services.md)** Controlling fan-out to dozens of downstream services. _Published (lab verification pending)_
- **[PFA-101](articles/integrations/pfa-101-api-rate-limits-under-seasonal-transaction-peaks.md)** API rate limits under seasonal transaction peaks. _Published (lab verification pending)_
- **[PFA-102](articles/integrations/pfa-102-large-payload-handling-and-streaming-alternatives.md)** Large payload handling and streaming alternatives. _Published (lab verification pending)_
- **[PFA-103](articles/integrations/pfa-103-signed-webhooks-and-replay-attack-prevention.md)** Signed webhooks and replay attack prevention. _Published (lab verification pending)_
- **[PFA-104](articles/integrations/pfa-104-transactional-outbox-options-for-critical-integrations.md)** Transactional outbox options for critical integrations. _Published (lab verification pending)_
- **[PFA-105](articles/integrations/pfa-105-preventing-sensitive-fields-from-reaching-remote-logs.md)** Preventing sensitive fields from reaching remote logs. _Published (lab verification pending)_

<a id="section-08"></a>

## 08. Queue processors and scheduled background work

- **[PFA-106](articles/background-processing/pfa-106-standard-versus-dedicated-queue-processor.md)** Standard versus Dedicated Queue Processor selection. _Published (lab verification pending)_
- **[PFA-107](articles/background-processing/pfa-107-queue-processor-error-classification.md)** Queue Processor execution, retry and failure lifecycle. _Published (lab verification pending)_
- **[PFA-108](articles/background-processing/pfa-108-idempotent-consumers-for-financial-transactions.md)** Idempotent consumers for financial transactions. _Published (lab verification pending)_
- **[PFA-109](articles/background-processing/pfa-109-delayed-queue-processor-scheduling-semantics.md)** Delayed Queue Processor scheduling semantics. _Published (lab verification pending)_
- **[PFA-110](articles/background-processing/PFA-110-job-schedulers-versus-queue-processors.md)** Job Scheduler versus Queue Processor responsibilities. _Published (lab verification pending)_
- **[PFA-111](articles/background-processing/pfa-111-broken-queue-remediation-and-safe-manual-replay.md)** Broken queue remediation and safe manual replay. _Published (lab verification pending)_
- **[PFA-112](articles/background-processing/pfa-112-processing-order-versus-horizontal-throughput.md)** Processing order versus horizontal throughput. _Published (lab verification pending)_
- **[PFA-113](articles/background-processing/pfa-113-backlog-sizing-during-upstream-traffic-spikes.md)** Backlog sizing during upstream traffic spikes. _Published (lab verification pending)_
- **[PFA-114](articles/background-processing/pfa-114-scaling-background-processing-without-api-overload.md)** Scaling background processing without API overload. _Published (lab verification pending)_
- **[PFA-115](articles/background-processing/pfa-115-queue-item-locking-and-concurrent-case-updates.md)** Queue item locking and concurrent case updates. _Published (lab verification pending)_
- **[PFA-116](articles/background-processing/pfa-116-execution-access-groups-and-security-context.md)** Execution access groups and security context. _Published (lab verification pending)_
- **[PFA-117](articles/background-processing/pfa-117-commit-boundaries-before-and-after-enqueueing-work.md)** Commit boundaries before and after enqueueing work. _Published (lab verification pending)_
- **[PFA-118](articles/background-processing/pfa-118-replacing-legacy-agents-safely.md)** Replacing legacy agents safely. _Published (lab verification pending)_
- **[PFA-119](articles/background-processing/pfa-119-separating-poison-message-retries-from-business-retries.md)** Separating poison-message retries from business retries. _Published (lab verification pending)_
- **[PFA-120](articles/background-processing/pfa-120-monitoring-queue-latency-against-customer-facing-slas.md)** Monitoring queue latency against customer-facing SLAs. _Published (lab verification pending)_

<a id="section-09"></a>

## 09. Constellation, DX API and experience design

- **[PFA-121](articles/constellation/PFA-121-dx-api-view-boundaries.md)** Constellation rendering architecture and DX API boundaries. _Published (lab verification pending)_
- **[PFA-122](articles/constellation/pfa-122-view-metadata-and-server-side-business-rules.md)** View metadata and server-side business rules. _Published (lab verification pending)_
- **[PFA-123](articles/constellation/pfa-123-supported-dx-component-upgrade-design.md)** Building extensible Constellation UI components. _Published (lab verification pending)_
- **[PFA-124](articles/constellation/pfa-124-traditional-ui-constellation-assessment.md)** Traditional UI versus Constellation migration decisions. _Published (lab verification pending)_
- **[PFA-125](articles/constellation/pfa-125-reusable-views-constellation-metadata.md)** Building reusable views across case types. _Published (lab verification pending)_
- **[PFA-126](articles/constellation/pfa-126-embedding-a-case-experience-into-an-external-portal.md)** Embedding a case experience into an external portal. _Published (lab verification pending)_
- **[PFA-127](articles/constellation/pfa-127-state-refresh-when-data-changes-outside-the-browser.md)** State refresh when data changes outside the browser. _Published (lab verification pending)_
- **[PFA-128](articles/constellation/pfa-128-validation-design-across-ui-and-server-boundaries.md)** Validation design across UI and server boundaries. _Published (lab verification pending)_
- **[PFA-129](articles/constellation/pfa-129-optimizing-payload-size-for-large-case-views.md)** Optimizing payload size for large case views. _Published (lab verification pending)_
- **[PFA-130](articles/constellation/pfa-130-accessibility-architecture-for-enterprise-forms.md)** Accessibility architecture for enterprise forms. _Published (lab verification pending)_
- **[PFA-131](articles/constellation/pfa-131-routing-and-navigation-across-multi-application-portals.md)** Routing and navigation across multi-application portals. _Published (lab verification pending)_
- **[PFA-132](articles/constellation/pfa-132-custom-component-upgrade-compatibility.md)** Custom component upgrade compatibility. _Published (lab verification pending)_
- **[PFA-133](articles/constellation/pfa-133-attachment-workflows-browser-pega-storage.md)** Attachment workflows across browser and Pega storage. _Published (lab verification pending)_
- **[PFA-134](articles/constellation/pfa-134-testing-constellation-views-stable-contracts.md)** Testing Constellation views through stable contracts. _Published (lab verification pending)_
- **[PFA-135](articles/constellation/pfa-135-separate-frontend-decision-boundaries.md)** Deciding when a separate frontend is justified. _Published (lab verification pending)_

<a id="section-10"></a>

## 10. Identity, security and data protection

- **[PFA-136](articles/security/pfa-136-saml-federation-access-group-mapping.md)** SAML federation and access group assignment. _Published (lab verification pending)_
- **[PFA-137](articles/security/pfa-137-openid-connect-enterprise-sso.md)** OpenID Connect architecture for enterprise SSO. _Published (lab verification pending)_
- **[PFA-138](articles/security/PFA-138-rbac-abac-customer-isolation.md)** Access Roles versus Access Control Policies. _Published (lab verification pending)_
- **[PFA-139](articles/security/pfa-139-attribute-based-authorization-customer-records.md)** Attribute-based authorization for customer records. _Published (lab verification pending)_
- **[PFA-140](articles/security/pfa-140-service-package-api-security.md)** Securing service packages independently of case UI. _Published (lab verification pending)_
- **[PFA-141](articles/security/pfa-141-multi-tenant-data-partitioning-cache-isolation.md)** Multi-tenant data partitioning and cache isolation. _Published (lab verification pending)_
- **[PFA-142](articles/security/pfa-142-controlling-privileges-background-processing.md)** Controlling privileges for background processing. _Published (lab verification pending)_
- **[PFA-143](articles/security/pfa-143-sensitive-field-encryption-key-management.md)** Sensitive field encryption and key management. _Published (lab verification pending)_
- **[PFA-144](articles/security/pfa-144-secrets-management-integration-connectors.md)** Secrets management for integration connectors. _Published (lab verification pending)_
- **[PFA-145](articles/security/pfa-145-authorization-after-operator-access-changes.md)** Authorization after a user's access changes. _Published (lab verification pending)_
- **[PFA-146](articles/security/pfa-146-attachment-access-controls-malware-checks.md)** Attachment access controls and malware checks. _Published (lab verification pending)_
- **[PFA-147](articles/security/pfa-147-cross-border-data-residency-constraints.md)** Handling cross-border data residency constraints. _Published (lab verification pending)_
- **[PFA-148](articles/security/pfa-148-reducing-personal-data-in-trace-and-diagnostic-logs.md)** Reducing personal data in trace and diagnostic logs. _Published (lab verification pending)_
- **[PFA-149](articles/security/pfa-149-privilege-escalation-pathways-through-custom-activities.md)** Privilege escalation pathways through custom activities. _Published (lab verification pending)_
- **[PFA-150](articles/security/pfa-150-security-regression-testing-during-application-upgrades.md)** Security regression testing during application upgrades. _Published (lab verification pending)_

<a id="section-11"></a>

## 11. Production observability and incident diagnosis

- **[PFA-151](articles/observability/PFA-151-pal-latency-attribution.md)** Reading PAL results to locate rule execution cost. _Published (lab verification pending)_
- **[PFA-152](articles/observability/pfa-152-using-tracer-without-changing-business-behaviour.md)** Using Tracer without changing business behaviour. _Published (lab verification pending)_
- **[PFA-153](articles/observability/pfa-153-clipboard-inspection-wrong-instance-failures.md)** Clipboard inspection for wrong-instance failures. _Published (lab verification pending)_
- **[PFA-154](articles/observability/pfa-154-pdc-evidence-led-incident-diagnosis.md)** PDC event triage and evidence-driven diagnosis. _Published (lab verification pending)_
- **[PFA-155](articles/observability/pfa-155-correlating-service-requests-background-work.md)** Correlating service requests with background work. _Published (lab verification pending)_
- **[PFA-156](articles/observability/pfa-156-intermittent-case-lock-root-cause.md)** Finding root causes of intermittent case lock failures. _Published (lab verification pending)_
- **[PFA-157](articles/observability/pfa-157-investigating-broken-queue-processor-items.md)** Investigating queue processor items in broken status. _Published (lab verification pending)_
- **[PFA-158](articles/observability/pfa-158-distinguishing-api-timeout-from-slow-rule-execution.md)** Distinguishing API timeout from slow rule execution. _Published (lab verification pending)_
- **[PFA-159](articles/observability/pfa-159-detecting-repeated-data-page-loads.md)** Detecting repeated data page loads. _Published (lab verification pending)_
- **[PFA-160](articles/observability/pfa-160-diagnosing-memory-pressure-long-requestor-sessions.md)** Diagnosing memory pressure in long requestor sessions. _Published (lab verification pending)_
- **[PFA-161](articles/observability/pfa-161-distributed-logging-design-across-platform-nodes.md)** Distributed logging design across platform nodes. _Published (lab verification pending)_
- **[PFA-162](articles/observability/pfa-162-safe-production-instrumentation-of-confidential-data.md)** Safe production instrumentation of confidential data. _Published (lab verification pending)_
- **[PFA-163](articles/observability/pfa-163-incident-analysis-after-a-ruleset-deployment.md)** Incident analysis after a ruleset deployment. _Published (lab verification pending)_
- **[PFA-164](articles/observability/pfa-164-creating-a-support-runbook-for-missing-case-updates.md)** Creating a support runbook for missing case updates. _Published (lab verification pending)_
- **[PFA-165](articles/observability/pfa-165-defining-useful-alerts-for-background-backlog-growth.md)** Defining useful alerts for background backlog growth. _Published (lab verification pending)_

<a id="section-12"></a>

## 12. Performance engineering and scalability

- **[PFA-166](articles/performance/pfa-166-repeatable-case-load-test-design.md)** Defining repeatable Pega load testing scenarios. _Published (lab verification pending)_
- **[PFA-167](articles/performance/pfa-167-latency-budgets-case-views-external-apis.md)** Latency budgets across case views and external APIs. _Published (lab verification pending)_
- **[PFA-168](articles/performance/pfa-168-hot-path-optimisation-data-transforms.md)** Hot path optimisation of data transforms. _Published (lab verification pending)_
- **[PFA-169](articles/performance/pfa-169-thread-contention-mass-case-updates.md)** Thread contention during mass case updates. _Published (lab verification pending)_
- **[PFA-170](articles/performance/pfa-170-parameterized-data-pages-n-plus-one.md)** Avoiding N+1 connector calls from parameterized sources. _Published (lab verification pending)_
- **[PFA-171](articles/performance/pfa-171-scaling-queue-processor-bursts.md)** Scaling workers for bursty Queue Processor demand. _Published (lab verification pending)_
- **[PFA-172](articles/performance/pfa-172-cache-refresh-response-time-variation.md)** Response time variation after cache refresh. _Published (lab verification pending)_
- **[PFA-173](articles/performance/pfa-173-database-performance-impact-indexing-decisions.md)** Database performance impact of indexing decisions. _Published (lab verification pending)_
- **[PFA-174](articles/performance/pfa-174-sizing-attachment-processing-capacity.md)** Sizing attachment processing capacity. _Published (lab verification pending)_
- **[PFA-175](articles/performance/pfa-175-garbage-collection-pauses-interactive-response-time.md)** Garbage collection pauses and interactive response time. _Published (lab verification pending)_
- **[PFA-176](articles/performance/pfa-176-measuring-coldstart-versus-steadystate-experience.md)** Measuring cold-start versus steady-state experience. _Published (lab verification pending)_
- **[PFA-177](articles/performance/pfa-177-back-pressure-when-dependencies-cannot-keep-up.md)** Back pressure when dependencies cannot keep up. _Published (lab verification pending)_
- **[PFA-178](articles/performance/pfa-178-quantifying-the-cost-of-unnecessary-clipboard-pages.md)** Quantifying the cost of unnecessary clipboard pages. _Published (lab verification pending)_
- **[PFA-179](articles/performance/pfa-179-protecting-high-priority-transactions-from-batch-workloads.md)** Protecting high priority transactions from batch workloads. _Published (lab verification pending)_
- **[PFA-180](articles/performance/pfa-180-performance-regression-gates-before-a-pega-upgrade.md)** Performance regression gates before Pega upgrade. _Published (lab verification pending)_

<a id="section-13"></a>

## 13. Delivery pipelines and safe upgrades

- **[PFA-181](articles/devops/PFA-181-deployment-manager-release-gates.md)** Deployment Manager pipeline topology and control gates. _Published (lab verification pending)_
- **[PFA-182](articles/delivery/pfa-182-parallel-branch-development-shared-rule-applications.md)** Parallel branch development in shared rule applications. _Published (lab verification pending)_
- **[PFA-183](articles/delivery/pfa-183-packaging-rules-data-product-definitions.md)** Packaging rules and data with product definitions. _Published (lab verification pending)_
- **[PFA-184](articles/devops/pfa-184-rolling-deployment-schema-compatibility.md)** Schema changes during rolling deployments. _Published (lab verification pending)_
- **[PFA-185](articles/delivery/pfa-185-upgrade-preparation-retired-features.md)** Upgrade preparation for retired features. _Published (lab verification pending)_
- **[PFA-186](articles/delivery/pfa-186-feature-toggles-controlled-business-rollout.md)** Feature toggles for controlled business rollout. _Published (lab verification pending)_
- **[PFA-187](articles/delivery/pfa-187-rollback-active-cases-changed-rules.md)** Rollback when active cases use newly changed rules. _Published (lab verification pending)_
- **[PFA-188](articles/delivery/pfa-188-releasing-queue-processor-changes-safely.md)** Releasing queue processor changes safely. _Published (lab verification pending)_
- **[PFA-189](articles/delivery/pfa-189-promoting-endpoint-configuration-across-environments.md)** Promoting endpoint configuration across environments. _Published (lab verification pending)_
- **[PFA-190](articles/delivery/pfa-190-guardrail-exceptions-architectural-debt-signals.md)** Guardrail exceptions as architectural debt signals. _Published (lab verification pending)_
- **[PFA-191](articles/devops/pfa-191-managing-hotfixes-without-environments-drifting.md)** Managing hotfixes without environments drifting. _Published (lab verification pending)_
- **[PFA-192](articles/delivery/pfa-192-testing-migration-of-longrunning-open-cases.md)** Testing migration of long-running open cases. _Published (lab verification pending)_
- **[PFA-193](articles/delivery/pfa-193-deployment-ordering-across-dependent-pega-components.md)** Deployment ordering across dependent Pega components. _Published (lab verification pending)_
- **[PFA-194](articles/delivery/pfa-194-production-cutover-for-a-new-case-platform.md)** Production cutover for a new case platform. _Published (lab verification pending)_
- **[PFA-195](articles/delivery/pfa-195-release-evidence-and-audit-requirements.md)** Release evidence and audit requirements. _Published (lab verification pending)_

<a id="section-14"></a>

## 14. Verification, testing and quality engineering

- **[PFA-196](articles/testing/pfa-196-pegaunit-shared-rule-contract-testing.md)** PegaUnit test strategy for reusable rule components. _Published (lab verification pending)_
- **[PFA-197](articles/testing/pfa-197-concurrency-tests-case-locking-optimistic-updates.md)** Concurrency tests for case locking and optimistic updates. _Published (lab verification pending)_
- **[PFA-198](articles/testing/pfa-198-rest-service-consumer-contract-testing.md)** Contract tests for service REST integrations. _Published (lab verification pending)_
- **[PFA-199](articles/testing/pfa-199-failure-injection-unavailable-downstream-apis.md)** Failure injection for unavailable downstream APIs. _Published (lab verification pending)_
- **[PFA-200](articles/testing/pfa-200-testing-retry-duplicate-message-processing.md)** Testing retry and duplicate message processing. _Published (lab verification pending)_
- **[PFA-201](articles/testing/pfa-201-data-page-isolation-tests-user-identities.md)** Data page isolation tests across user identities. _Published (lab verification pending)_
- **[PFA-202](articles/testing/pfa-202-load-tests-diverse-case-shapes.md)** Load tests with diverse real-world case shapes. _Published (lab verification pending)_
- **[PFA-203](articles/testing/pfa-203-testing-access-revocation-in-active-requestors.md)** Testing access revocation in an active requestor. _Published (lab verification pending)_
- **[PFA-204](articles/testing/pfa-204-comparing-old-new-rules-modernization.md)** Comparing old and new rules during modernization. _Published (lab verification pending)_
- **[PFA-205](articles/testing/pfa-205-synthetic-production-monitoring-high-value-journeys.md)** Synthetic production monitoring of high-value journeys. _Published (lab verification pending)_
- **[PFA-206](articles/testing/pfa-206-validating-longrunning-flow-resumptions-after-release.md)** Validating long-running flow resumptions after release. _Published (lab verification pending)_
- **[PFA-207](articles/testing/pfa-207-regression-testing-complex-decision-tables.md)** Regression testing complex decision tables. _Published (lab verification pending)_
- **[PFA-208](articles/testing/pfa-208-testing-attachment-security-and-size-limits.md)** Testing attachment security and size limits. _Published (lab verification pending)_
- **PFA-209** End-to-end correlation for failed test journeys. _Planned_
- **PFA-210** Acceptance criteria for architecture quality attributes. _Planned_

<a id="section-15"></a>

## 15. Customer Decision Hub and real-time decisioning

- **[PFA-211](articles/decisioning/PFA-211-cdh-decisioning-arbitration.md)** Next Best Action request and arbitration pipeline. _Published (lab verification pending)_
- **[PFA-212](articles/decisioning/pfa-212-customer-decision-hub-channel-integration-patterns.md)** Customer Decision Hub channel integration patterns. _Published (lab verification pending)_
- **[PFA-213](articles/decisioning/pfa-213-action-eligibility-suitability-design.md)** Action eligibility and suitability design. _Published (lab verification pending)_
- **[PFA-214](articles/decisioning/pfa-214-cross-channel-contact-policy-consistency.md)** Contact policy enforcement in concurrent channels. _Published (lab verification pending)_
- **[PFA-215](articles/decisioning/pfa-215-interaction-history-data-flow-persistence.md)** Interaction history data flow and persistence. _Published (lab verification pending)_
- **[PFA-216](articles/decisioning/pfa-216-adaptive-model-feedback-delayed-outcomes.md)** Adaptive model feedback and delayed outcomes. _Published (lab verification pending)_
- **[PFA-217](articles/decisioning/pfa-217-champion-challenger-decisioning-strategies.md)** Champion challenger strategies in decisioning. _Published (lab verification pending)_
- **[PFA-218](articles/decisioning/pfa-218-treatment-design-web-agent-outbound-channels.md)** Treatment design across web, agent and outbound channels. _Published (lab verification pending)_
- **[PFA-219](articles/decisioning/pfa-219-real-time-container-integration-resilience.md)** Real-time container integration resilience. _Published (lab verification pending)_
- **[PFA-220](articles/decisioning/pfa-220-strategy-execution-latency-budgets.md)** Strategy execution latency budgets. _Published (lab verification pending)_
- **[PFA-221](articles/decisioning/pfa-221-proposition-data-lifecycle-and-ownership.md)** Proposition data lifecycle and ownership. _Published (lab verification pending)_
- **PFA-222** Data quality failure modes in real-time decisions. _Planned_
- **PFA-223** Business-managed decisions with approval controls. _Planned_
- **PFA-224** Auditability of automated customer recommendations. _Planned_
- **PFA-225** Designing decision fallback when models are unavailable. _Planned_

<a id="section-16"></a>

## 16. GenAI and intelligent automation

- **[PFA-226](articles/genai/PFA-226-genai-control-plane-data-boundaries.md)** Pega GenAI architecture and enterprise data boundaries. _Published (lab verification pending)_
- **[PFA-227](articles/genai/pfa-227-genai-case-summary-sensitive-data-controls.md)** GenAI-assisted case summary with sensitive data controls. _Published (lab verification pending)_
- **[PFA-228](articles/genai/pfa-228-prompt-injection-case-attachment-boundaries.md)** Prompt injection threats in case attachments. _Published (lab verification pending)_
- **[PFA-229](articles/genai/pfa-229-human-approval-ai-generated-recommendations.md)** Human approval for AI-generated recommendations. _Published (lab verification pending)_
- **[PFA-230](articles/genai/pfa-230-grounding-strategies-case-specific-knowledge.md)** Grounding strategies for case-specific knowledge. _Published (lab verification pending)_
- **[PFA-231](articles/genai/pfa-231-agentic-process-design-versus-deterministic-flows.md)** Agentic process design versus deterministic flows. _Published (lab verification pending)_
- **[PFA-232](articles/genai/pfa-232-safe-tool-invocation-autonomous-workflows.md)** Safe tool invocation by autonomous workflows. _Published (lab verification pending)_
- **[PFA-233](articles/genai/pfa-233-retrieval-architecture-internal-procedural-knowledge.md)** Retrieval architecture for internal procedural knowledge. _Published (lab verification pending)_
- **[PFA-234](articles/genai/pfa-234-evaluating-ai-output-traceable-test-sets.md)** Evaluating AI output with traceable test sets. _Published (lab verification pending)_
- **[PFA-235](articles/genai/pfa-235-llm-request-cost-latency-budgets.md)** LLM request cost and latency budgets. _Published (lab verification pending)_
- **[PFA-236](articles/genai/pfa-236-fallback-when-a-model-provider-is-unavailable.md)** Fallback when a model provider is unavailable. _Published (lab verification pending)_
- **PFA-237** Governance of AI-generated rule changes. _Planned_
- **PFA-238** Versioning AI prompts alongside case rules. _Planned_
- **PFA-239** Auditing automated decisions and human overrides. _Planned_
- **PFA-240** Designing safe escalation from AI assistant to agent. _Planned_

<a id="section-17"></a>

## 17. Process Fabric, external work and robotics

- **[PFA-241](articles/process-fabric/pfa-241-process-fabric-federated-worklist.md)** Pega Process Fabric architecture across systems. _Published (lab verification pending)_
- **[PFA-242](articles/robotics/pfa-242-federated-worklist-design-ownership-boundaries.md)** Federated worklist design and ownership boundaries. _Published (lab verification pending)_
- **[PFA-243](articles/robotics/pfa-243-external-assignment-identity-deep-linking.md)** External assignment identity and deep linking. _Published (lab verification pending)_
- **[PFA-244](articles/process-fabric/pfa-244-cross-application-work-discovery-permissions.md)** Cross-application work discovery and permissions. _Published (lab verification pending)_
- **[PFA-245](articles/process-fabric/pfa-245-routing-work-different-systems-one-portal.md)** Routing work from different systems into one portal. _Published (lab verification pending)_
- **[PFA-246](articles/process-fabric/pfa-246-robotic-desktop-automation-deployment-options.md)** Robotic Desktop Automation deployment options. _Published (lab verification pending)_
- **[PFA-247](articles/robotics/pfa-247-robotic-runtime-identity-unattended-execution.md)** Robotic runtime identity and unattended execution. _Published (lab verification pending)_
- **[PFA-248](articles/robotics/pfa-248-ui-automation-brittleness-and-recovery-strategies.md)** UI automation brittleness and recovery strategies. _Published (lab verification pending)_
- **[PFA-249](articles/robotics/pfa-249-when-to-replace-rpa-with-stable-api.md)** When to replace RPA with a stable API. _Published (lab verification pending)_
- **PFA-250** Human-in-the-loop correction of robotic results. _Planned_
- **PFA-251** Cross-system work completion acknowledgement. _Planned_
- **PFA-252** Monitoring robotic failure at scale. _Planned_
- **PFA-253** Coordinating Pega cases with external workflow engines. _Planned_
- **PFA-254** Avoiding duplicate assignments during synchronization. _Planned_
- **PFA-255** Security design for shared operator work surfaces. _Planned_

<a id="section-18"></a>

## 18. Modernization, governance and architecture decisions

- **[PFA-256](articles/modernization/pfa-256-decomposing-monolithic-pega-applications-safely.md)** Decomposing monolithic Pega applications safely. _Published (lab verification pending)_
- **[PFA-257](articles/application-architecture/PFA-257-modular-applications-instead-of-framework-sprawl.md)** Application framework rationalization after acquisitions. _Published (lab verification pending)_
- **[PFA-258](articles/modernization/pfa-258-transitioning-activity-heavy-legacy-designs.md)** Transitioning from activity-heavy legacy designs. _Published (lab verification pending)_
- **[PFA-259](articles/modernization/pfa-259-enterprise-pattern-library-for-pega.md)** Building an enterprise pattern library for Pega. _Published (lab verification pending)_
- **[PFA-260](articles/modernization/pfa-260-governance-shared-rules-product-teams.md)** Governance of shared rules across product teams. _Published (lab verification pending)_
- **[PFA-261](articles/modernization/pfa-261-cost-modelling-platform-service-consumption.md)** Cost modelling for platform service consumption. _Published (lab verification pending)_
- **[PFA-262](articles/modernization/pfa-262-identifying-boundaries-non-pega-services.md)** Identifying boundaries for non-Pega services. _Published (lab verification pending)_
- **[PFA-263](articles/modernization/pfa-263-traditional-ui-to-constellation-transition.md)** Migration from Traditional UI to Constellation. _Published (lab verification pending)_
- **PFA-264** Choosing system of record for case data. _Planned_
- **PFA-265** Designing integration standards across portfolios. _Planned_
- **PFA-266** Evaluating when a reusable component adds more cost. _Planned_
- **PFA-267** Operating model for enterprise Pega platform teams. _Planned_
- **PFA-268** Architecture decision records for platform-specific choices. _Planned_
- **PFA-269** Creating a deprecation roadmap for legacy rules. _Planned_
- **PFA-270** Measuring architectural fitness during quarterly releases. _Planned_

## Publishing policy

Status values: **Planned**, **Researching**, **Draft**, **Technical review**, **Published**, **Lab-verified**. A committed article is not described as lab-verified without recorded test evidence.

Historical Git timestamps are selected by the publishing workflow. The separate `docs/commit-date-register.tsv` records when content actually entered the repository. Never infer an article's age from its Git timestamp alone.
