# Pega Feature Atlas

**Technical architecture and implementation guidance for Pega Senior System Architects, Lead System Architects and enterprise engineers.**

Independent, example-driven studies about how Pega features behave, how to design them at scale, and how to diagnose real system failures. Not a product glossary, Pega Academy replacement, or basic Dev Studio click-through site.

## Start here

- **[Published architecture articles](docs/articles/index.md)**: browse articles and technical studies.
- **[270-topic architecture catalogue](docs/feature-inventory.md)**: all 18 subject areas, published entries and future articles.
- **[GitHub Pages site source](docs/index.md)**: website navigation; [site address](https://chandransandeep.github.io/pega-feature-atlas/) once Pages is enabled.
- [Editorial standard and evidence rules](docs/article-template.md)
- [Publication process and dating transparency](docs/publication-process.md)
- [Actual publication timestamp register](docs/commit-date-register.tsv)

## Featured deep dives

- [Pega Data Page caching: parameters, scope, freshness and tenant isolation](docs/articles/01-data-page-customer-lookup.md)
- [Queue Processor architecture: idempotency, retries and external side effects](docs/articles/002-queue-processors-idempotent-integration.md)

## Published articles by subject

<!-- BEGIN AUTO ARTICLE INDEX -->
**218 catalogue articles** are published; the live status remains in [the 270-topic catalogue](docs/feature-inventory.md). Two additional introductory studies appear above.

### Platform runtime and distributed deployment

- [PFA-001: Request lifecycle from HTTP entry point to rule execution](docs/articles/platform-runtime/pfa-001-request-lifecycle-http-to-rule.md)
- [PFA-002: Requestor and thread lifecycle during simultaneous cases](docs/articles/platform-runtime/pfa-002-requestor-thread-lifecycle-clipboard.md)
- [PFA-003: Pega node roles and split deployment architecture](docs/articles/platform-runtime/pfa-003-web-background-nodes-classification.md)
- [PFA-004: Cluster behaviour during node loss and session failover](docs/articles/platform-runtime/pfa-004-node-loss-session-and-background-recovery.md)
- [PFA-005: Session affinity versus stateless application assumptions](docs/articles/platform-runtime/pfa-005-session-affinity-versus-stateless-application-assumptions.md)
- [PFA-006: Sizing JVM heap for high requestor concurrency](docs/articles/platform-runtime/pfa-006-jvm-requestor-memory-capacity.md)
- [PFA-007: What actually scales when additional nodes are added](docs/articles/platform-runtime/pfa-007-what-actually-scales-when-additional-nodes-are-added.md)
- [PFA-008: Shared stream service dependencies and their failure modes](docs/articles/platform-runtime/pfa-008-stream-service-and-background-recovery.md)
- [PFA-009: Multi-region deployment and latency-sensitive workflows](docs/articles/platform-runtime/pfa-009-multi-region-deployment-and-latency-sensitive-workflows.md)
- [PFA-010: Pega Cloud connectivity boundaries for enterprise APIs](docs/articles/platform-runtime/pfa-010-pega-cloud-connectivity-boundaries-for-enterprise-apis.md)
- [PFA-011: Managing internal service discovery and endpoint changes](docs/articles/platform-runtime/pfa-011-managing-internal-service-discovery-and-endpoint-changes.md)
- [PFA-012: Separating interaction and background service capacity](docs/articles/platform-runtime/pfa-012-separating-interaction-and-background-service-capacity.md)
- [PFA-013: Disaster recovery objectives for case processing](docs/articles/platform-runtime/pfa-013-disaster-recovery-objectives-for-case-processing.md)
- [PFA-014: Identifying bottlenecks during a new regional rollout](docs/articles/platform-runtime/pfa-014-identifying-bottlenecks-during-a-new-regional-rollout.md)
- [PFA-015: Startup sequencing after infrastructure maintenance](docs/articles/platform-runtime/pfa-015-startup-sequencing-after-infrastructure-maintenance.md)

### Rule resolution and application composition

- [PFA-016: Rule resolution precedence across inherited classes](docs/articles/rule-resolution/PFA-016-rule-resolution-framework-overrides.md)
- [PFA-017: Circumstancing across regions and business lines](docs/articles/rule-resolution/pfa-017-circumstancing-across-regions-and-business-lines.md)
- [PFA-018: Access group and application stack resolution context](docs/articles/rule-resolution/pfa-018-access-group-and-application-stack-resolution-context.md)
- [PFA-019: Ruleset versioning for parallel delivery teams](docs/articles/rule-resolution/pfa-019-parallel-team-ruleset-release-contracts.md)
- [PFA-020: When directed inheritance beats pattern inheritance](docs/articles/rule-resolution/pfa-020-pattern-versus-directed-inheritance.md)
- [PFA-021: Designing reusable component applications](docs/articles/rule-resolution/pfa-021-reusable-built-on-component-contracts.md)
- [PFA-022: Avoiding dependency cycles across shared rulesets](docs/articles/rule-resolution/pfa-022-avoiding-dependency-cycles-across-shared-rulesets.md)
- [PFA-023: Specialisation patterns without copying whole rules](docs/articles/rule-resolution/pfa-023-specialisation-patterns-without-copying-whole-rules.md)
- [PFA-024: Dynamic class referencing and long-term maintainability](docs/articles/rule-resolution/pfa-024-dynamic-class-referencing-and-long-term-maintainability.md)
- [PFA-025: Rule availability and production rollback constraints](docs/articles/rule-resolution/pfa-025-rule-availability-and-production-rollback-constraints.md)
- [PFA-026: Delegated business rules with architectural boundaries](docs/articles/rule-resolution/pfa-026-delegated-business-rules-with-architectural-boundaries.md)
- [PFA-027: Branch conflicts in high-churn decision tables](docs/articles/rule-resolution/pfa-027-branch-conflicts-in-high-churn-decision-tables.md)
- [PFA-028: Safe customization of locked product extensions](docs/articles/rule-resolution/pfa-028-safe-customization-of-locked-product-extensions.md)
- [PFA-029: Detecting application stack drift across environments](docs/articles/rule-resolution/pfa-029-detecting-application-stack-drift-across-environments.md)
- [PFA-030: Upgrading frameworks without breaking implementation rules](docs/articles/rule-resolution/pfa-030-upgrading-frameworks-without-breaking-implementation-rules.md)

### Case architecture and concurrency

- [PFA-031: Modelling multi-party enterprise case hierarchies](docs/articles/case-management/pfa-031-modelling-multi-party-enterprise-case-hierarchies.md)
- [PFA-032: Parent-child orchestration across bounded contexts](docs/articles/case-management/PFA-032-parent-child-multi-team-dependencies.md)
- [PFA-033: Case locking under concurrent agent access](docs/articles/case-management/PFA-033-concurrent-case-locking.md)
- [PFA-034: Optimistic locking and user conflict recovery](docs/articles/case-management/pfa-034-optimistic-locking-conflict-recovery.md)
- [PFA-035: Long-running cases spanning months or years](docs/articles/case-management/pfa-035-long-running-case-release-compatibility.md)
- [PFA-036: Active case migration after flow redesign](docs/articles/case-management/pfa-036-active-case-migration-after-flow-redesign.md)
- [PFA-037: Cross-case dependencies without circular waits](docs/articles/case-management/pfa-037-cross-case-dependencies-without-circular-waits.md)
- [PFA-038: Parallel approvals and partial completion handling](docs/articles/case-management/pfa-038-parallel-approvals-and-partial-completion-handling.md)
- [PFA-039: Re-opening cases without duplicate side effects](docs/articles/case-management/pfa-039-re-opening-cases-without-duplicate-side-effects.md)
- [PFA-040: Case archival with searchable audit history](docs/articles/case-management/pfa-040-case-archival-with-searchable-audit-history.md)
- [PFA-041: Temporary cases versus immediate persistence](docs/articles/case-management/pfa-041-temporary-cases-versus-immediate-persistence.md)
- [PFA-042: High-volume case creation through service endpoints](docs/articles/case-management/pfa-042-high-volume-case-creation-through-service-endpoints.md)
- [PFA-043: Bulk case transitions without lock storms](docs/articles/case-management/pfa-043-bulk-case-transitions-without-lock-storms.md)
- [PFA-044: Case attachments and content lifecycle boundaries](docs/articles/case-management/pfa-044-case-attachments-and-content-lifecycle-boundaries.md)
- [PFA-045: Case ownership models across teams and jurisdictions](docs/articles/case-management/pfa-045-case-ownership-models-across-teams-and-jurisdictions.md)

### Flow engine, SLAs and event orchestration

- [PFA-046: Flow persistence and transaction checkpoints](docs/articles/flow-sla/pfa-046-flow-persistence-and-transaction-checkpoints.md)
- [PFA-047: Assignment SLAs across time zones and holiday calendars](docs/articles/flow-sla/pfa-047-business-calendar-sla-timezones.md)
- [PFA-048: Escalation architecture that avoids notification floods](docs/articles/flow-sla/pfa-048-escalation-architecture-that-avoids-notification-floods.md)
- [PFA-049: Wait steps versus externally signalled continuation](docs/articles/flow-sla/pfa-049-wait-step-versus-external-event.md)
- [PFA-050: Compensation when a downstream action fails](docs/articles/flow-sla/pfa-050-compensation-after-partial-integration.md)
- [PFA-051: Parallel branches and joining asynchronous results](docs/articles/flow-sla/pfa-051-parallel-branches-and-joining-asynchronous-results.md)
- [PFA-052: Routing on dynamic workload rather than fixed groups](docs/articles/flow-sla/pfa-052-routing-on-dynamic-workload-rather-than-fixed-groups.md)
- [PFA-053: Case cancellation while integration is in flight](docs/articles/flow-sla/pfa-053-case-cancellation-while-integration-is-in-flight.md)
- [PFA-054: Timeout budgets across an end-to-end case step](docs/articles/flow-sla/pfa-054-timeout-budgets-across-an-end-to-end-case-step.md)
- [PFA-055: Orchestrating human and robotic assignments together](docs/articles/flow-sla/pfa-055-orchestrating-human-and-robotic-assignments-together.md)
- [PFA-056: Recovering stalled flows after an application release](docs/articles/flow-sla/pfa-056-recovering-stalled-flows-after-an-application-release.md)
- [PFA-057: SLA rules and custom timer design trade-offs](docs/articles/flow-sla/pfa-057-sla-rules-and-custom-timer-design-trade-offs.md)
- [PFA-058: Business event ingestion without duplicate resumes](docs/articles/flow-sla/pfa-058-business-event-ingestion-without-duplicate-resumes.md)
- [PFA-059: Validation rules at trusted execution boundaries](docs/articles/flow-sla/pfa-059-validation-rules-at-trusted-execution-boundaries.md)
- [PFA-060: Workflow exception models for regulated processes](docs/articles/flow-sla/pfa-060-workflow-exception-models-for-regulated-processes.md)

### Data pages, caching and clipboard

- [PFA-061: Parameterized Data Pages at scale and tenant isolation](docs/articles/data-pages/pfa-061-parameterized-data-pages-at-scale-and-tenant-isolation.md)
- [PFA-062: Thread versus Requestor versus Node data scope](docs/articles/data-pages/pfa-062-thread-requestor-node-cache-isolation.md)
- [PFA-063: Cache refresh strategies and business freshness contracts](docs/articles/data-pages/pfa-063-refresh-strategy-freshness-contract.md)
- [PFA-064: Cache invalidation after external system updates](docs/articles/data-pages/pfa-064-external-event-cache-invalidation.md)
- [PFA-065: Handling large parameter cardinality in agent sessions](docs/articles/data-pages/pfa-065-handling-large-parameter-cardinality-in-agent-sessions.md)
- [PFA-066: Limit to a single Data Page and overwritten instances](docs/articles/data-pages/pfa-066-limit-to-a-single-data-page-and-overwritten-instances.md)
- [PFA-067: Chained Data Pages and hidden integration fan-out](docs/articles/data-pages/pfa-067-chained-data-pages-connector-fanout.md)
- [PFA-068: Read-only versus editable Data Pages](docs/articles/data-pages/pfa-068-read-only-editable-savable-write-path.md)
- [PFA-069: Report-backed versus connector-backed Data Pages](docs/articles/data-pages/pfa-069-report-versus-connector-data-pages.md)
- [PFA-070: Designing a business-safe cache key](docs/articles/data-pages/pfa-070-designing-a-business-safe-cache-key.md)
- [PFA-071: Avoiding repeated load during complex view rendering](docs/articles/data-pages/pfa-071-avoiding-repeated-load-during-complex-view-rendering.md)
- [PFA-072: Managing error states on cached external responses](docs/articles/data-pages/pfa-072-managing-error-states-on-cached-external-responses.md)
- [PFA-073: Reference data distribution across multiple nodes](docs/articles/data-pages/pfa-073-reference-data-distribution-across-multiple-nodes.md)
- [PFA-074: Clipboard growth in deeply nested case models](docs/articles/data-pages/pfa-074-clipboard-growth-in-deeply-nested-case-models.md)
- [PFA-075: Caching secure lookups after access revocation](docs/articles/data-pages/pfa-075-authorization-revocation-cached-lookups.md)

### Persistence, data modelling and search

- [PFA-076: Class-to-table mapping for large operational datasets](docs/articles/persistence/pfa-076-class-to-table-mapping-for-large-operational-datasets.md)
- [PFA-077: Exposed columns and reporting selectivity](docs/articles/persistence/pfa-077-exposed-columns-and-reporting-selectivity.md)
- [PFA-078: Optimising Report Definitions through query plans](docs/articles/persistence/pfa-078-report-definition-query-plan-tuning.md)
- [PFA-079: Index design for worklists and case search](docs/articles/persistence/pfa-079-index-design-worklists-case-search.md)
- [PFA-080: Embedded page lists versus normalized child records](docs/articles/persistence/pfa-080-embedded-page-lists-versus-normalized-child-records.md)
- [PFA-081: Large BLOB storage and retrieval trade-offs](docs/articles/persistence/pfa-081-large-blob-storage-and-retrieval-trade-offs.md)
- [PFA-082: Search index consistency in time-critical screens](docs/articles/persistence/pfa-082-search-index-consistency-in-time-critical-screens.md)
- [PFA-083: Batch data migration while active cases continue](docs/articles/persistence/pfa-083-batch-data-migration-while-active-cases-continue.md)
- [PFA-084: Database transactions across case and API boundaries](docs/articles/persistence/pfa-084-database-transactions-across-case-and-api-boundaries.md)
- [PFA-085: Dealing with hotspot rows in shared business counters](docs/articles/persistence/pfa-085-dealing-with-hotspot-rows-in-shared-business-counters.md)
- [PFA-086: Reconciliation after partial data import failures](docs/articles/persistence/pfa-086-reconciliation-after-partial-data-import-failures.md)
- [PFA-087: Reporting warehouses versus operational reports](docs/articles/persistence/pfa-087-reporting-warehouses-versus-operational-reports.md)
- [PFA-088: Pagination for million-row data sets](docs/articles/persistence/pfa-088-pagination-for-million-row-data-sets.md)
- [PFA-089: Purging cases without erasing required audit evidence](docs/articles/persistence/pfa-089-purging-cases-without-erasing-required-audit-evidence.md)
- [PFA-090: Managing reference data versioning across releases](docs/articles/persistence/pfa-090-managing-reference-data-versioning-across-releases.md)

### Integration architecture and API contracts

- [PFA-091: Connect REST timeout, retry and idempotency design](docs/articles/integrations/PFA-091-connect-rest-timeouts-and-retries.md)
- [PFA-092: Service REST for synchronous case creation](docs/articles/integrations/pfa-092-service-rest-for-synchronous-case-creation.md)
- [PFA-093: OAuth token refresh and credential rotation](docs/articles/integrations/pfa-093-oauth-credentials-rotation-and-cache.md)
- [PFA-094: Circuit breaker and bulkhead placement around Pega](docs/articles/integrations/pfa-094-circuit-breaker-and-bulkhead-placement-around-pega.md)
- [PFA-095: API gateway responsibilities versus service rules](docs/articles/integrations/pfa-095-api-gateway-responsibilities-versus-service-rules.md)
- [PFA-096: End-to-end correlation IDs for distributed diagnostics](docs/articles/integrations/pfa-096-end-to-end-correlation-ids-for-distributed-diagnostics.md)
- [PFA-097: REST schema evolution without breaking consumers](docs/articles/integrations/pfa-097-rest-schema-evolution-without-breaking-consumers.md)
- [PFA-098: Handling asynchronous partner callbacks securely](docs/articles/integrations/pfa-098-asynchronous-callback-version-correlation.md)
- [PFA-099: Integration error taxonomies and business recovery](docs/articles/integrations/pfa-099-integration-error-taxonomies-and-business-recovery.md)
- [PFA-100: Controlling fan-out to dozens of downstream services](docs/articles/integrations/pfa-100-controlling-fan-out-to-dozens-of-downstream-services.md)
- [PFA-101: API rate limits under seasonal transaction peaks](docs/articles/integrations/pfa-101-api-rate-limits-under-seasonal-transaction-peaks.md)
- [PFA-102: Large payload handling and streaming alternatives](docs/articles/integrations/pfa-102-large-payload-handling-and-streaming-alternatives.md)
- [PFA-103: Signed webhooks and replay attack prevention](docs/articles/integrations/pfa-103-signed-webhooks-and-replay-attack-prevention.md)
- [PFA-104: Transactional outbox options for critical integrations](docs/articles/integrations/pfa-104-transactional-outbox-options-for-critical-integrations.md)
- [PFA-105: Preventing sensitive fields from reaching remote logs](docs/articles/integrations/pfa-105-preventing-sensitive-fields-from-reaching-remote-logs.md)

### Queue processors and scheduled background work

- [PFA-106: Standard versus Dedicated Queue Processor selection](docs/articles/background-processing/pfa-106-standard-versus-dedicated-queue-processor.md)
- [PFA-107: Queue Processor execution, retry and failure lifecycle](docs/articles/background-processing/pfa-107-queue-processor-error-classification.md)
- [PFA-108: Idempotent consumers for financial transactions](docs/articles/background-processing/pfa-108-idempotent-consumers-for-financial-transactions.md)
- [PFA-109: Delayed Queue Processor scheduling semantics](docs/articles/background-processing/pfa-109-delayed-queue-processor-scheduling-semantics.md)
- [PFA-110: Job Scheduler versus Queue Processor responsibilities](docs/articles/background-processing/PFA-110-job-schedulers-versus-queue-processors.md)
- [PFA-111: Broken queue remediation and safe manual replay](docs/articles/background-processing/pfa-111-broken-queue-remediation-and-safe-manual-replay.md)
- [PFA-112: Processing order versus horizontal throughput](docs/articles/background-processing/pfa-112-processing-order-versus-horizontal-throughput.md)
- [PFA-113: Backlog sizing during upstream traffic spikes](docs/articles/background-processing/pfa-113-backlog-sizing-during-upstream-traffic-spikes.md)
- [PFA-114: Scaling background processing without API overload](docs/articles/background-processing/pfa-114-scaling-background-processing-without-api-overload.md)
- [PFA-115: Queue item locking and concurrent case updates](docs/articles/background-processing/pfa-115-queue-item-locking-and-concurrent-case-updates.md)
- [PFA-116: Execution access groups and security context](docs/articles/background-processing/pfa-116-execution-access-groups-and-security-context.md)
- [PFA-117: Commit boundaries before and after enqueueing work](docs/articles/background-processing/pfa-117-commit-boundaries-before-and-after-enqueueing-work.md)
- [PFA-118: Replacing legacy agents safely](docs/articles/background-processing/pfa-118-replacing-legacy-agents-safely.md)
- [PFA-119: Separating poison-message retries from business retries](docs/articles/background-processing/pfa-119-separating-poison-message-retries-from-business-retries.md)
- [PFA-120: Monitoring queue latency against customer-facing SLAs](docs/articles/background-processing/pfa-120-monitoring-queue-latency-against-customer-facing-slas.md)

### Constellation, DX API and experience design

- [PFA-121: Constellation rendering architecture and DX API boundaries](docs/articles/constellation/PFA-121-dx-api-view-boundaries.md)
- [PFA-122: View metadata and server-side business rules](docs/articles/constellation/pfa-122-view-metadata-and-server-side-business-rules.md)
- [PFA-123: Building extensible Constellation UI components](docs/articles/constellation/pfa-123-supported-dx-component-upgrade-design.md)
- [PFA-124: Traditional UI versus Constellation migration decisions](docs/articles/constellation/pfa-124-traditional-ui-constellation-assessment.md)
- [PFA-125: Building reusable views across case types](docs/articles/constellation/pfa-125-reusable-views-constellation-metadata.md)
- [PFA-126: Embedding a case experience into an external portal](docs/articles/constellation/pfa-126-embedding-a-case-experience-into-an-external-portal.md)
- [PFA-127: State refresh when data changes outside the browser](docs/articles/constellation/pfa-127-state-refresh-when-data-changes-outside-the-browser.md)
- [PFA-128: Validation design across UI and server boundaries](docs/articles/constellation/pfa-128-validation-design-across-ui-and-server-boundaries.md)
- [PFA-129: Optimizing payload size for large case views](docs/articles/constellation/pfa-129-optimizing-payload-size-for-large-case-views.md)
- [PFA-130: Accessibility architecture for enterprise forms](docs/articles/constellation/pfa-130-accessibility-architecture-for-enterprise-forms.md)
- [PFA-131: Routing and navigation across multi-application portals](docs/articles/constellation/pfa-131-routing-and-navigation-across-multi-application-portals.md)
- [PFA-132: Custom component upgrade compatibility](docs/articles/constellation/pfa-132-custom-component-upgrade-compatibility.md)
- [PFA-133: Attachment workflows across browser and Pega storage](docs/articles/constellation/pfa-133-attachment-workflows-browser-pega-storage.md)
- [PFA-134: Testing Constellation views through stable contracts](docs/articles/constellation/pfa-134-testing-constellation-views-stable-contracts.md)
- [PFA-135: Deciding when a separate frontend is justified](docs/articles/constellation/pfa-135-separate-frontend-decision-boundaries.md)

### Identity, security and data protection

- [PFA-136: SAML federation and access group assignment](docs/articles/security/pfa-136-saml-federation-access-group-mapping.md)
- [PFA-137: OpenID Connect architecture for enterprise SSO](docs/articles/security/pfa-137-openid-connect-enterprise-sso.md)
- [PFA-138: Access Roles versus Access Control Policies](docs/articles/security/PFA-138-rbac-abac-customer-isolation.md)
- [PFA-139: Attribute-based authorization for customer records](docs/articles/security/pfa-139-attribute-based-authorization-customer-records.md)
- [PFA-140: Securing service packages independently of case UI](docs/articles/security/pfa-140-service-package-api-security.md)
- [PFA-141: Multi-tenant data partitioning and cache isolation](docs/articles/security/pfa-141-multi-tenant-data-partitioning-cache-isolation.md)
- [PFA-142: Controlling privileges for background processing](docs/articles/security/pfa-142-controlling-privileges-background-processing.md)
- [PFA-143: Sensitive field encryption and key management](docs/articles/security/pfa-143-sensitive-field-encryption-key-management.md)
- [PFA-144: Secrets management for integration connectors](docs/articles/security/pfa-144-secrets-management-integration-connectors.md)
- [PFA-145: Authorization after a user's access changes](docs/articles/security/pfa-145-authorization-after-operator-access-changes.md)
- [PFA-146: Attachment access controls and malware checks](docs/articles/security/pfa-146-attachment-access-controls-malware-checks.md)
- [PFA-147: Handling cross-border data residency constraints](docs/articles/security/pfa-147-cross-border-data-residency-constraints.md)

### Production observability and incident diagnosis

- [PFA-151: Reading PAL results to locate rule execution cost](docs/articles/observability/PFA-151-pal-latency-attribution.md)
- [PFA-152: Using Tracer without changing business behaviour](docs/articles/observability/pfa-152-using-tracer-without-changing-business-behaviour.md)
- [PFA-153: Clipboard inspection for wrong-instance failures](docs/articles/observability/pfa-153-clipboard-inspection-wrong-instance-failures.md)
- [PFA-154: PDC event triage and evidence-driven diagnosis](docs/articles/observability/pfa-154-pdc-evidence-led-incident-diagnosis.md)
- [PFA-155: Correlating service requests with background work](docs/articles/observability/pfa-155-correlating-service-requests-background-work.md)
- [PFA-156: Finding root causes of intermittent case lock failures](docs/articles/observability/pfa-156-intermittent-case-lock-root-cause.md)
- [PFA-157: Investigating queue processor items in broken status](docs/articles/observability/pfa-157-investigating-broken-queue-processor-items.md)
- [PFA-158: Distinguishing API timeout from slow rule execution](docs/articles/observability/pfa-158-distinguishing-api-timeout-from-slow-rule-execution.md)
- [PFA-159: Detecting repeated data page loads](docs/articles/observability/pfa-159-detecting-repeated-data-page-loads.md)
- [PFA-160: Diagnosing memory pressure in long requestor sessions](docs/articles/observability/pfa-160-diagnosing-memory-pressure-long-requestor-sessions.md)

### Performance engineering and scalability

- [PFA-166: Defining repeatable Pega load testing scenarios](docs/articles/performance/pfa-166-repeatable-case-load-test-design.md)
- [PFA-167: Latency budgets across case views and external APIs](docs/articles/performance/pfa-167-latency-budgets-case-views-external-apis.md)
- [PFA-168: Hot path optimisation of data transforms](docs/articles/performance/pfa-168-hot-path-optimisation-data-transforms.md)
- [PFA-169: Thread contention during mass case updates](docs/articles/performance/pfa-169-thread-contention-mass-case-updates.md)
- [PFA-170: Avoiding N+1 connector calls from parameterized sources](docs/articles/performance/pfa-170-parameterized-data-pages-n-plus-one.md)
- [PFA-171: Scaling workers for bursty Queue Processor demand](docs/articles/performance/pfa-171-scaling-queue-processor-bursts.md)
- [PFA-172: Response time variation after cache refresh](docs/articles/performance/pfa-172-cache-refresh-response-time-variation.md)
- [PFA-173: Database performance impact of indexing decisions](docs/articles/performance/pfa-173-database-performance-impact-indexing-decisions.md)
- [PFA-174: Sizing attachment processing capacity](docs/articles/performance/pfa-174-sizing-attachment-processing-capacity.md)
- [PFA-175: Garbage collection pauses and interactive response time](docs/articles/performance/pfa-175-garbage-collection-pauses-interactive-response-time.md)

### Delivery pipelines and safe upgrades

- [PFA-181: Deployment Manager pipeline topology and control gates](docs/articles/devops/PFA-181-deployment-manager-release-gates.md)
- [PFA-182: Parallel branch development in shared rule applications](docs/articles/delivery/pfa-182-parallel-branch-development-shared-rule-applications.md)
- [PFA-183: Packaging rules and data with product definitions](docs/articles/delivery/pfa-183-packaging-rules-data-product-definitions.md)
- [PFA-184: Schema changes during rolling deployments](docs/articles/devops/pfa-184-rolling-deployment-schema-compatibility.md)
- [PFA-185: Upgrade preparation for retired features](docs/articles/delivery/pfa-185-upgrade-preparation-retired-features.md)
- [PFA-186: Feature toggles for controlled business rollout](docs/articles/delivery/pfa-186-feature-toggles-controlled-business-rollout.md)
- [PFA-187: Rollback when active cases use newly changed rules](docs/articles/delivery/pfa-187-rollback-active-cases-changed-rules.md)
- [PFA-188: Releasing queue processor changes safely](docs/articles/delivery/pfa-188-releasing-queue-processor-changes-safely.md)
- [PFA-189: Promoting endpoint configuration across environments](docs/articles/delivery/pfa-189-promoting-endpoint-configuration-across-environments.md)
- [PFA-190: Guardrail exceptions as architectural debt signals](docs/articles/delivery/pfa-190-guardrail-exceptions-architectural-debt-signals.md)

### Verification, testing and quality engineering

- [PFA-196: PegaUnit test strategy for reusable rule components](docs/articles/testing/pfa-196-pegaunit-shared-rule-contract-testing.md)
- [PFA-197: Concurrency tests for case locking and optimistic updates](docs/articles/testing/pfa-197-concurrency-tests-case-locking-optimistic-updates.md)
- [PFA-198: Contract tests for service REST integrations](docs/articles/testing/pfa-198-rest-service-consumer-contract-testing.md)
- [PFA-199: Failure injection for unavailable downstream APIs](docs/articles/testing/pfa-199-failure-injection-unavailable-downstream-apis.md)
- [PFA-200: Testing retry and duplicate message processing](docs/articles/testing/pfa-200-testing-retry-duplicate-message-processing.md)
- [PFA-201: Data page isolation tests across user identities](docs/articles/testing/pfa-201-data-page-isolation-tests-user-identities.md)
- [PFA-202: Load tests with diverse real-world case shapes](docs/articles/testing/pfa-202-load-tests-diverse-case-shapes.md)
- [PFA-203: Testing access revocation in an active requestor](docs/articles/testing/pfa-203-testing-access-revocation-in-active-requestors.md)
- [PFA-204: Comparing old and new rules during modernization](docs/articles/testing/pfa-204-comparing-old-new-rules-modernization.md)

### Customer Decision Hub and real-time decisioning

- [PFA-211: Next Best Action request and arbitration pipeline](docs/articles/decisioning/PFA-211-cdh-decisioning-arbitration.md)
- [PFA-212: Customer Decision Hub channel integration patterns](docs/articles/decisioning/pfa-212-customer-decision-hub-channel-integration-patterns.md)
- [PFA-213: Action eligibility and suitability design](docs/articles/decisioning/pfa-213-action-eligibility-suitability-design.md)
- [PFA-214: Contact policy enforcement in concurrent channels](docs/articles/decisioning/pfa-214-cross-channel-contact-policy-consistency.md)
- [PFA-215: Interaction history data flow and persistence](docs/articles/decisioning/pfa-215-interaction-history-data-flow-persistence.md)
- [PFA-216: Adaptive model feedback and delayed outcomes](docs/articles/decisioning/pfa-216-adaptive-model-feedback-delayed-outcomes.md)
- [PFA-217: Champion challenger strategies in decisioning](docs/articles/decisioning/pfa-217-champion-challenger-decisioning-strategies.md)
- [PFA-218: Treatment design across web, agent and outbound channels](docs/articles/decisioning/pfa-218-treatment-design-web-agent-outbound-channels.md)
- [PFA-219: Real-time container integration resilience](docs/articles/decisioning/pfa-219-real-time-container-integration-resilience.md)

### GenAI and intelligent automation

- [PFA-226: Pega GenAI architecture and enterprise data boundaries](docs/articles/genai/PFA-226-genai-control-plane-data-boundaries.md)
- [PFA-227: GenAI-assisted case summary with sensitive data controls](docs/articles/genai/pfa-227-genai-case-summary-sensitive-data-controls.md)
- [PFA-228: Prompt injection threats in case attachments](docs/articles/genai/pfa-228-prompt-injection-case-attachment-boundaries.md)
- [PFA-229: Human approval for AI-generated recommendations](docs/articles/genai/pfa-229-human-approval-ai-generated-recommendations.md)
- [PFA-230: Grounding strategies for case-specific knowledge](docs/articles/genai/pfa-230-grounding-strategies-case-specific-knowledge.md)
- [PFA-231: Agentic process design versus deterministic flows](docs/articles/genai/pfa-231-agentic-process-design-versus-deterministic-flows.md)
- [PFA-232: Safe tool invocation by autonomous workflows](docs/articles/genai/pfa-232-safe-tool-invocation-autonomous-workflows.md)
- [PFA-233: Retrieval architecture for internal procedural knowledge](docs/articles/genai/pfa-233-retrieval-architecture-internal-procedural-knowledge.md)
- [PFA-234: Evaluating AI output with traceable test sets](docs/articles/genai/pfa-234-evaluating-ai-output-traceable-test-sets.md)

### Process Fabric, external work and robotics

- [PFA-241: Pega Process Fabric architecture across systems](docs/articles/process-fabric/pfa-241-process-fabric-federated-worklist.md)
- [PFA-242: Federated worklist design and ownership boundaries](docs/articles/robotics/pfa-242-federated-worklist-design-ownership-boundaries.md)
- [PFA-243: External assignment identity and deep linking](docs/articles/robotics/pfa-243-external-assignment-identity-deep-linking.md)
- [PFA-244: Cross-application work discovery and permissions](docs/articles/process-fabric/pfa-244-cross-application-work-discovery-permissions.md)
- [PFA-245: Routing work from different systems into one portal](docs/articles/process-fabric/pfa-245-routing-work-different-systems-one-portal.md)
- [PFA-246: Robotic Desktop Automation deployment options](docs/articles/process-fabric/pfa-246-robotic-desktop-automation-deployment-options.md)
- [PFA-249: When to replace RPA with a stable API](docs/articles/robotics/pfa-249-when-to-replace-rpa-with-stable-api.md)

### Modernization, governance and architecture decisions

- [PFA-256: Decomposing monolithic Pega applications safely](docs/articles/modernization/pfa-256-decomposing-monolithic-pega-applications-safely.md)
- [PFA-257: Application framework rationalization after acquisitions](docs/articles/application-architecture/PFA-257-modular-applications-instead-of-framework-sprawl.md)
- [PFA-258: Transitioning from activity-heavy legacy designs](docs/articles/modernization/pfa-258-transitioning-activity-heavy-legacy-designs.md)
- [PFA-259: Building an enterprise pattern library for Pega](docs/articles/modernization/pfa-259-enterprise-pattern-library-for-pega.md)
- [PFA-260: Governance of shared rules across product teams](docs/articles/modernization/pfa-260-governance-shared-rules-product-teams.md)
- [PFA-261: Cost modelling for platform service consumption](docs/articles/modernization/pfa-261-cost-modelling-platform-service-consumption.md)
- [PFA-263: Migration from Traditional UI to Constellation](docs/articles/modernization/pfa-263-traditional-ui-to-constellation-transition.md)

<!-- END AUTO ARTICLE INDEX -->

## Article standard

Every substantive article aims to cover a concrete enterprise requirement or failure, relevant Pega rule types and runtime boundaries, an architecture diagram, implementation options, security and performance implications, operational failure analysis, and a reproducible verification matrix.

Content must be checked for the actual Pega release and execution environment. **Hypothetical diagrams, calculations and acceptance criteria are explicitly labelled.** No invented screenshots, measured results, or client-confidential examples.

## Contributing and publishing

New articles begin in `drafts/`. The [GitHub publishing workflow](.github/workflows/publish-article.yml) moves approved drafts into `docs/articles/`, updates the catalogue and records when they entered this repository. 

To publish the website, enable **Settings > Pages > Deploy from a branch > main > /docs**.

**Independent community project. Not affiliated with Pegasystems. Pega product names belong to their respective owners.**
