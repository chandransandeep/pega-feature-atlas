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
- **PFA-058** Business event ingestion without duplicate resumes. _Planned_
- **PFA-059** Validation rules at trusted execution boundaries. _Planned_
- **PFA-060** Workflow exception models for regulated processes. _Planned_

<a id="section-05"></a>

## 05. Data pages, caching and clipboard

- **PFA-061** Parameterized Data Pages at scale and tenant isolation. _Planned_
- **[PFA-062](articles/data-pages/pfa-062-thread-requestor-node-cache-isolation.md)** Thread versus Requestor versus Node data scope. _Published (lab verification pending)_
- **[PFA-063](articles/data-pages/pfa-063-refresh-strategy-freshness-contract.md)** Cache refresh strategies and business freshness contracts. _Published (lab verification pending)_
- **[PFA-064](articles/data-pages/pfa-064-external-event-cache-invalidation.md)** Cache invalidation after external system updates. _Published (lab verification pending)_
- **PFA-065** Handling large parameter cardinality in agent sessions. _Planned_
- **PFA-066** Limit to a single Data Page and overwritten instances. _Planned_
- **[PFA-067](articles/data-pages/pfa-067-chained-data-pages-connector-fanout.md)** Chained Data Pages and hidden integration fan-out. _Published (lab verification pending)_
- **[PFA-068](articles/data-pages/pfa-068-read-only-editable-savable-write-path.md)** Read-only versus editable Data Pages. _Published (lab verification pending)_
- **[PFA-069](articles/data-pages/pfa-069-report-versus-connector-data-pages.md)** Report-backed versus connector-backed Data Pages. _Published (lab verification pending)_
- **PFA-070** Designing a business-safe cache key. _Planned_
- **PFA-071** Avoiding repeated load during complex view rendering. _Planned_
- **PFA-072** Managing error states on cached external responses. _Planned_
- **PFA-073** Reference data distribution across multiple nodes. _Planned_
- **PFA-074** Clipboard growth in deeply nested case models. _Planned_
- **[PFA-075](articles/data-pages/pfa-075-authorization-revocation-cached-lookups.md)** Caching secure lookups after access revocation. _Published (lab verification pending)_

<a id="section-06"></a>

## 06. Persistence, data modelling and search

- **PFA-076** Class-to-table mapping for large operational datasets. _Planned_
- **PFA-077** Exposed columns and reporting selectivity. _Planned_
- **[PFA-078](articles/persistence/pfa-078-report-definition-query-plan-tuning.md)** Optimising Report Definitions through query plans. _Published (lab verification pending)_
- **[PFA-079](articles/persistence/pfa-079-index-design-worklists-case-search.md)** Index design for worklists and case search. _Published (lab verification pending)_
- **PFA-080** Embedded page lists versus normalized child records. _Planned_
- **PFA-081** Large BLOB storage and retrieval trade-offs. _Planned_
- **PFA-082** Search index consistency in time-critical screens. _Planned_
- **PFA-083** Batch data migration while active cases continue. _Planned_
- **PFA-084** Database transactions across case and API boundaries. _Planned_
- **PFA-085** Dealing with hotspot rows in shared business counters. _Planned_
- **PFA-086** Reconciliation after partial data import failures. _Planned_
- **PFA-087** Reporting warehouses versus operational reports. _Planned_
- **PFA-088** Pagination for million-row data sets. _Planned_
- **PFA-089** Purging cases without erasing required audit evidence. _Planned_
- **PFA-090** Managing reference data versioning across releases. _Planned_

<a id="section-07"></a>

## 07. Integration architecture and API contracts

- **[PFA-091](articles/integrations/PFA-091-connect-rest-timeouts-and-retries.md)** Connect REST timeout, retry and idempotency design. _Published (lab verification pending)_
- **PFA-092** Service REST for synchronous case creation. _Planned_
- **[PFA-093](articles/integrations/pfa-093-oauth-credentials-rotation-and-cache.md)** OAuth token refresh and credential rotation. _Published (lab verification pending)_
- **PFA-094** Circuit breaker and bulkhead placement around Pega. _Planned_
- **PFA-095** API gateway responsibilities versus service rules. _Planned_
- **PFA-096** End-to-end correlation IDs for distributed diagnostics. _Planned_
- **PFA-097** REST schema evolution without breaking consumers. _Planned_
- **[PFA-098](articles/integrations/pfa-098-asynchronous-callback-version-correlation.md)** Handling asynchronous partner callbacks securely. _Published (lab verification pending)_
- **PFA-099** Integration error taxonomies and business recovery. _Planned_
- **PFA-100** Controlling fan-out to dozens of downstream services. _Planned_
- **PFA-101** API rate limits under seasonal transaction peaks. _Planned_
- **PFA-102** Large payload handling and streaming alternatives. _Planned_
- **PFA-103** Signed webhooks and replay attack prevention. _Planned_
- **PFA-104** Transactional outbox options for critical integrations. _Planned_
- **PFA-105** Preventing sensitive fields from reaching remote logs. _Planned_

<a id="section-08"></a>

## 08. Queue processors and scheduled background work

- **[PFA-106](articles/background-processing/pfa-106-standard-versus-dedicated-queue-processor.md)** Standard versus Dedicated Queue Processor selection. _Published (lab verification pending)_
- **[PFA-107](articles/background-processing/pfa-107-queue-processor-error-classification.md)** Queue Processor execution, retry and failure lifecycle. _Published (lab verification pending)_
- **PFA-108** Idempotent consumers for financial transactions. _Planned_
- **PFA-109** Delayed Queue Processor scheduling semantics. _Planned_
- **[PFA-110](articles/background-processing/PFA-110-job-schedulers-versus-queue-processors.md)** Job Scheduler versus Queue Processor responsibilities. _Published (lab verification pending)_
- **PFA-111** Broken queue remediation and safe manual replay. _Planned_
- **PFA-112** Processing order versus horizontal throughput. _Planned_
- **PFA-113** Backlog sizing during upstream traffic spikes. _Planned_
- **PFA-114** Scaling background processing without API overload. _Planned_
- **PFA-115** Queue item locking and concurrent case updates. _Planned_
- **PFA-116** Execution access groups and security context. _Planned_
- **PFA-117** Commit boundaries before and after enqueueing work. _Planned_
- **PFA-118** Replacing legacy agents safely. _Planned_
- **PFA-119** Separating poison-message retries from business retries. _Planned_
- **PFA-120** Monitoring queue latency against customer-facing SLAs. _Planned_

<a id="section-09"></a>

## 09. Constellation, DX API and experience design

- **[PFA-121](articles/constellation/PFA-121-dx-api-view-boundaries.md)** Constellation rendering architecture and DX API boundaries. _Published (lab verification pending)_
- **PFA-122** View metadata and server-side business rules. _Planned_
- **[PFA-123](articles/constellation/pfa-123-supported-dx-component-upgrade-design.md)** Building extensible Constellation UI components. _Published (lab verification pending)_
- **[PFA-124](articles/constellation/pfa-124-traditional-ui-constellation-assessment.md)** Traditional UI versus Constellation migration decisions. _Published (lab verification pending)_
- **[PFA-125](articles/constellation/pfa-125-reusable-views-constellation-metadata.md)** Building reusable views across case types. _Published (lab verification pending)_
- **PFA-126** Embedding a case experience into an external portal. _Planned_
- **PFA-127** State refresh when data changes outside the browser. _Planned_
- **PFA-128** Validation design across UI and server boundaries. _Planned_
- **PFA-129** Optimizing payload size for large case views. _Planned_
- **PFA-130** Accessibility architecture for enterprise forms. _Planned_
- **PFA-131** Routing and navigation across multi-application portals. _Planned_
- **PFA-132** Custom component upgrade compatibility. _Planned_
- **PFA-133** Attachment workflows across browser and Pega storage. _Planned_
- **PFA-134** Testing Constellation views through stable contracts. _Planned_
- **PFA-135** Deciding when a separate frontend is justified. _Planned_

<a id="section-10"></a>

## 10. Identity, security and data protection

- **[PFA-136](articles/security/pfa-136-saml-federation-access-group-mapping.md)** SAML federation and access group assignment. _Published (lab verification pending)_
- **PFA-137** OpenID Connect architecture for enterprise SSO. _Planned_
- **[PFA-138](articles/security/PFA-138-rbac-abac-customer-isolation.md)** Access Roles versus Access Control Policies. _Published (lab verification pending)_
- **PFA-139** Attribute-based authorization for customer records. _Planned_
- **[PFA-140](articles/security/pfa-140-service-package-api-security.md)** Securing service packages independently of case UI. _Published (lab verification pending)_
- **PFA-141** Multi-tenant data partitioning and cache isolation. _Planned_
- **PFA-142** Controlling privileges for background processing. _Planned_
- **PFA-143** Sensitive field encryption and key management. _Planned_
- **PFA-144** Secrets management for integration connectors. _Planned_
- **PFA-145** Authorization after a user's access changes. _Planned_
- **PFA-146** Attachment access controls and malware checks. _Planned_
- **PFA-147** Handling cross-border data residency constraints. _Planned_
- **PFA-148** Reducing personal data in trace and diagnostic logs. _Planned_
- **PFA-149** Privilege escalation pathways through custom activities. _Planned_
- **PFA-150** Security regression testing during application upgrades. _Planned_

<a id="section-11"></a>

## 11. Production observability and incident diagnosis

- **[PFA-151](articles/observability/PFA-151-pal-latency-attribution.md)** Reading PAL results to locate rule execution cost. _Published (lab verification pending)_
- **PFA-152** Using Tracer without changing business behaviour. _Planned_
- **PFA-153** Clipboard inspection for wrong-instance failures. _Planned_
- **[PFA-154](articles/observability/pfa-154-pdc-evidence-led-incident-diagnosis.md)** PDC event triage and evidence-driven diagnosis. _Published (lab verification pending)_
- **PFA-155** Correlating service requests with background work. _Planned_
- **PFA-156** Finding root causes of intermittent case lock failures. _Planned_
- **PFA-157** Investigating queue processor items in broken status. _Planned_
- **PFA-158** Distinguishing API timeout from slow rule execution. _Planned_
- **PFA-159** Detecting repeated data page loads. _Planned_
- **PFA-160** Diagnosing memory pressure in long requestor sessions. _Planned_
- **PFA-161** Distributed logging design across platform nodes. _Planned_
- **PFA-162** Safe production instrumentation of confidential data. _Planned_
- **PFA-163** Incident analysis after a ruleset deployment. _Planned_
- **PFA-164** Creating a support runbook for missing case updates. _Planned_
- **PFA-165** Defining useful alerts for background backlog growth. _Planned_

<a id="section-12"></a>

## 12. Performance engineering and scalability

- **[PFA-166](articles/performance/pfa-166-repeatable-case-load-test-design.md)** Defining repeatable Pega load testing scenarios. _Published (lab verification pending)_
- **PFA-167** Latency budgets across case views and external APIs. _Planned_
- **PFA-168** Hot path optimisation of data transforms. _Planned_
- **PFA-169** Thread contention during mass case updates. _Planned_
- **[PFA-170](articles/performance/pfa-170-parameterized-data-pages-n-plus-one.md)** Avoiding N+1 connector calls from parameterized sources. _Published (lab verification pending)_
- **PFA-171** Scaling workers for bursty Queue Processor demand. _Planned_
- **PFA-172** Response time variation after cache refresh. _Planned_
- **PFA-173** Database performance impact of indexing decisions. _Planned_
- **PFA-174** Sizing attachment processing capacity. _Planned_
- **PFA-175** Garbage collection pauses and interactive response time. _Planned_
- **PFA-176** Measuring cold-start versus steady-state experience. _Planned_
- **PFA-177** Back pressure when dependencies cannot keep up. _Planned_
- **PFA-178** Quantifying the cost of unnecessary clipboard pages. _Planned_
- **PFA-179** Protecting high priority transactions from batch workloads. _Planned_
- **PFA-180** Performance regression gates before Pega upgrade. _Planned_

<a id="section-13"></a>

## 13. Delivery pipelines and safe upgrades

- **[PFA-181](articles/devops/PFA-181-deployment-manager-release-gates.md)** Deployment Manager pipeline topology and control gates. _Published (lab verification pending)_
- **PFA-182** Parallel branch development in shared rule applications. _Planned_
- **PFA-183** Packaging rules and data with product definitions. _Planned_
- **[PFA-184](articles/devops/pfa-184-rolling-deployment-schema-compatibility.md)** Schema changes during rolling deployments. _Published (lab verification pending)_
- **PFA-185** Upgrade preparation for retired features. _Planned_
- **PFA-186** Feature toggles for controlled business rollout. _Planned_
- **PFA-187** Rollback when active cases use newly changed rules. _Planned_
- **PFA-188** Releasing queue processor changes safely. _Planned_
- **PFA-189** Promoting endpoint configuration across environments. _Planned_
- **PFA-190** Guardrail exceptions as architectural debt signals. _Planned_
- **PFA-191** Managing hotfixes without environments drifting. _Planned_
- **PFA-192** Testing migration of long-running open cases. _Planned_
- **PFA-193** Deployment ordering across dependent Pega components. _Planned_
- **PFA-194** Production cutover for a new case platform. _Planned_
- **PFA-195** Release evidence and audit requirements. _Planned_

<a id="section-14"></a>

## 14. Verification, testing and quality engineering

- **[PFA-196](articles/testing/pfa-196-pegaunit-shared-rule-contract-testing.md)** PegaUnit test strategy for reusable rule components. _Published (lab verification pending)_
- **PFA-197** Concurrency tests for case locking and optimistic updates. _Planned_
- **[PFA-198](articles/testing/pfa-198-rest-service-consumer-contract-testing.md)** Contract tests for service REST integrations. _Published (lab verification pending)_
- **PFA-199** Failure injection for unavailable downstream APIs. _Planned_
- **PFA-200** Testing retry and duplicate message processing. _Planned_
- **PFA-201** Data page isolation tests across user identities. _Planned_
- **PFA-202** Load tests with diverse real-world case shapes. _Planned_
- **PFA-203** Testing access revocation in an active requestor. _Planned_
- **PFA-204** Comparing old and new rules during modernization. _Planned_
- **PFA-205** Synthetic production monitoring of high-value journeys. _Planned_
- **PFA-206** Validating long-running flow resumptions after release. _Planned_
- **PFA-207** Regression testing complex decision tables. _Planned_
- **PFA-208** Testing attachment security and size limits. _Planned_
- **PFA-209** End-to-end correlation for failed test journeys. _Planned_
- **PFA-210** Acceptance criteria for architecture quality attributes. _Planned_

<a id="section-15"></a>

## 15. Customer Decision Hub and real-time decisioning

- **[PFA-211](articles/decisioning/PFA-211-cdh-decisioning-arbitration.md)** Next Best Action request and arbitration pipeline. _Published (lab verification pending)_
- **PFA-212** Customer Decision Hub channel integration patterns. _Planned_
- **PFA-213** Action eligibility and suitability design. _Planned_
- **[PFA-214](articles/decisioning/pfa-214-cross-channel-contact-policy-consistency.md)** Contact policy enforcement in concurrent channels. _Published (lab verification pending)_
- **PFA-215** Interaction history data flow and persistence. _Planned_
- **PFA-216** Adaptive model feedback and delayed outcomes. _Planned_
- **PFA-217** Champion challenger strategies in decisioning. _Planned_
- **PFA-218** Treatment design across web, agent and outbound channels. _Planned_
- **PFA-219** Real-time container integration resilience. _Planned_
- **PFA-220** Strategy execution latency budgets. _Planned_
- **PFA-221** Proposition data lifecycle and ownership. _Planned_
- **PFA-222** Data quality failure modes in real-time decisions. _Planned_
- **PFA-223** Business-managed decisions with approval controls. _Planned_
- **PFA-224** Auditability of automated customer recommendations. _Planned_
- **PFA-225** Designing decision fallback when models are unavailable. _Planned_

<a id="section-16"></a>

## 16. GenAI and intelligent automation

- **[PFA-226](articles/genai/PFA-226-genai-control-plane-data-boundaries.md)** Pega GenAI architecture and enterprise data boundaries. _Published (lab verification pending)_
- **PFA-227** GenAI-assisted case summary with sensitive data controls. _Planned_
- **[PFA-228](articles/genai/pfa-228-prompt-injection-case-attachment-boundaries.md)** Prompt injection threats in case attachments. _Published (lab verification pending)_
- **PFA-229** Human approval for AI-generated recommendations. _Planned_
- **PFA-230** Grounding strategies for case-specific knowledge. _Planned_
- **PFA-231** Agentic process design versus deterministic flows. _Planned_
- **PFA-232** Safe tool invocation by autonomous workflows. _Planned_
- **PFA-233** Retrieval architecture for internal procedural knowledge. _Planned_
- **PFA-234** Evaluating AI output with traceable test sets. _Planned_
- **PFA-235** LLM request cost and latency budgets. _Planned_
- **PFA-236** Fallback when a model provider is unavailable. _Planned_
- **PFA-237** Governance of AI-generated rule changes. _Planned_
- **PFA-238** Versioning AI prompts alongside case rules. _Planned_
- **PFA-239** Auditing automated decisions and human overrides. _Planned_
- **PFA-240** Designing safe escalation from AI assistant to agent. _Planned_

<a id="section-17"></a>

## 17. Process Fabric, external work and robotics

- **[PFA-241](articles/process-fabric/pfa-241-process-fabric-federated-worklist.md)** Pega Process Fabric architecture across systems. _Published (lab verification pending)_
- **PFA-242** Federated worklist design and ownership boundaries. _Planned_
- **PFA-243** External assignment identity and deep linking. _Planned_
- **PFA-244** Cross-application work discovery and permissions. _Planned_
- **PFA-245** Routing work from different systems into one portal. _Planned_
- **PFA-246** Robotic Desktop Automation deployment options. _Planned_
- **PFA-247** Robotic runtime identity and unattended execution. _Planned_
- **PFA-248** UI automation brittleness and recovery strategies. _Planned_
- **PFA-249** When to replace RPA with a stable API. _Planned_
- **PFA-250** Human-in-the-loop correction of robotic results. _Planned_
- **PFA-251** Cross-system work completion acknowledgement. _Planned_
- **PFA-252** Monitoring robotic failure at scale. _Planned_
- **PFA-253** Coordinating Pega cases with external workflow engines. _Planned_
- **PFA-254** Avoiding duplicate assignments during synchronization. _Planned_
- **PFA-255** Security design for shared operator work surfaces. _Planned_

<a id="section-18"></a>

## 18. Modernization, governance and architecture decisions

- **PFA-256** Decomposing monolithic Pega applications safely. _Planned_
- **[PFA-257](articles/application-architecture/PFA-257-modular-applications-instead-of-framework-sprawl.md)** Application framework rationalization after acquisitions. _Published (lab verification pending)_
- **PFA-258** Transitioning from activity-heavy legacy designs. _Planned_
- **PFA-259** Building an enterprise pattern library for Pega. _Planned_
- **PFA-260** Governance of shared rules across product teams. _Planned_
- **PFA-261** Cost modelling for platform service consumption. _Planned_
- **PFA-262** Identifying boundaries for non-Pega services. _Planned_
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
