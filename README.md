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
**80 catalogue articles** are published; the live status remains in [the 270-topic catalogue](docs/feature-inventory.md). Two additional introductory studies appear above.

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

### Flow engine, SLAs and event orchestration

- [PFA-047: Assignment SLAs across time zones and holiday calendars](docs/articles/flow-sla/pfa-047-business-calendar-sla-timezones.md)
- [PFA-049: Wait steps versus externally signalled continuation](docs/articles/flow-sla/pfa-049-wait-step-versus-external-event.md)
- [PFA-050: Compensation when a downstream action fails](docs/articles/flow-sla/pfa-050-compensation-after-partial-integration.md)

### Data pages, caching and clipboard

- [PFA-062: Thread versus Requestor versus Node data scope](docs/articles/data-pages/pfa-062-thread-requestor-node-cache-isolation.md)
- [PFA-063: Cache refresh strategies and business freshness contracts](docs/articles/data-pages/pfa-063-refresh-strategy-freshness-contract.md)
- [PFA-064: Cache invalidation after external system updates](docs/articles/data-pages/pfa-064-external-event-cache-invalidation.md)
- [PFA-067: Chained Data Pages and hidden integration fan-out](docs/articles/data-pages/pfa-067-chained-data-pages-connector-fanout.md)
- [PFA-068: Read-only versus editable Data Pages](docs/articles/data-pages/pfa-068-read-only-editable-savable-write-path.md)
- [PFA-069: Report-backed versus connector-backed Data Pages](docs/articles/data-pages/pfa-069-report-versus-connector-data-pages.md)
- [PFA-075: Caching secure lookups after access revocation](docs/articles/data-pages/pfa-075-authorization-revocation-cached-lookups.md)

### Persistence, data modelling and search

- [PFA-078: Optimising Report Definitions through query plans](docs/articles/persistence/pfa-078-report-definition-query-plan-tuning.md)
- [PFA-079: Index design for worklists and case search](docs/articles/persistence/pfa-079-index-design-worklists-case-search.md)

### Integration architecture and API contracts

- [PFA-091: Connect REST timeout, retry and idempotency design](docs/articles/integrations/PFA-091-connect-rest-timeouts-and-retries.md)
- [PFA-093: OAuth token refresh and credential rotation](docs/articles/integrations/pfa-093-oauth-credentials-rotation-and-cache.md)
- [PFA-098: Handling asynchronous partner callbacks securely](docs/articles/integrations/pfa-098-asynchronous-callback-version-correlation.md)

### Queue processors and scheduled background work

- [PFA-106: Standard versus Dedicated Queue Processor selection](docs/articles/background-processing/pfa-106-standard-versus-dedicated-queue-processor.md)
- [PFA-107: Queue Processor execution, retry and failure lifecycle](docs/articles/background-processing/pfa-107-queue-processor-error-classification.md)
- [PFA-110: Job Scheduler versus Queue Processor responsibilities](docs/articles/background-processing/PFA-110-job-schedulers-versus-queue-processors.md)

### Constellation, DX API and experience design

- [PFA-121: Constellation rendering architecture and DX API boundaries](docs/articles/constellation/PFA-121-dx-api-view-boundaries.md)
- [PFA-123: Building extensible Constellation UI components](docs/articles/constellation/pfa-123-supported-dx-component-upgrade-design.md)
- [PFA-124: Traditional UI versus Constellation migration decisions](docs/articles/constellation/pfa-124-traditional-ui-constellation-assessment.md)
- [PFA-125: Building reusable views across case types](docs/articles/constellation/pfa-125-reusable-views-constellation-metadata.md)

### Identity, security and data protection

- [PFA-136: SAML federation and access group assignment](docs/articles/security/pfa-136-saml-federation-access-group-mapping.md)
- [PFA-138: Access Roles versus Access Control Policies](docs/articles/security/PFA-138-rbac-abac-customer-isolation.md)
- [PFA-140: Securing service packages independently of case UI](docs/articles/security/pfa-140-service-package-api-security.md)

### Production observability and incident diagnosis

- [PFA-151: Reading PAL results to locate rule execution cost](docs/articles/observability/PFA-151-pal-latency-attribution.md)
- [PFA-154: PDC event triage and evidence-driven diagnosis](docs/articles/observability/pfa-154-pdc-evidence-led-incident-diagnosis.md)

### Performance engineering and scalability

- [PFA-166: Defining repeatable Pega load testing scenarios](docs/articles/performance/pfa-166-repeatable-case-load-test-design.md)
- [PFA-170: Avoiding N+1 connector calls from parameterized sources](docs/articles/performance/pfa-170-parameterized-data-pages-n-plus-one.md)

### Delivery pipelines and safe upgrades

- [PFA-181: Deployment Manager pipeline topology and control gates](docs/articles/devops/PFA-181-deployment-manager-release-gates.md)
- [PFA-184: Schema changes during rolling deployments](docs/articles/devops/pfa-184-rolling-deployment-schema-compatibility.md)

### Verification, testing and quality engineering

- [PFA-196: PegaUnit test strategy for reusable rule components](docs/articles/testing/pfa-196-pegaunit-shared-rule-contract-testing.md)
- [PFA-198: Contract tests for service REST integrations](docs/articles/testing/pfa-198-rest-service-consumer-contract-testing.md)

### Customer Decision Hub and real-time decisioning

- [PFA-211: Next Best Action request and arbitration pipeline](docs/articles/decisioning/PFA-211-cdh-decisioning-arbitration.md)
- [PFA-214: Contact policy enforcement in concurrent channels](docs/articles/decisioning/pfa-214-cross-channel-contact-policy-consistency.md)

### GenAI and intelligent automation

- [PFA-226: Pega GenAI architecture and enterprise data boundaries](docs/articles/genai/PFA-226-genai-control-plane-data-boundaries.md)
- [PFA-228: Prompt injection threats in case attachments](docs/articles/genai/pfa-228-prompt-injection-case-attachment-boundaries.md)

### Process Fabric, external work and robotics

- [PFA-241: Pega Process Fabric architecture across systems](docs/articles/process-fabric/pfa-241-process-fabric-federated-worklist.md)

### Modernization, governance and architecture decisions

- [PFA-257: Application framework rationalization after acquisitions](docs/articles/application-architecture/PFA-257-modular-applications-instead-of-framework-sprawl.md)
- [PFA-263: Migration from Traditional UI to Constellation](docs/articles/modernization/pfa-263-traditional-ui-to-constellation-transition.md)

<!-- END AUTO ARTICLE INDEX -->

## Article standard

Every substantive article aims to cover a concrete enterprise requirement or failure, relevant Pega rule types and runtime boundaries, an architecture diagram, implementation options, security and performance implications, operational failure analysis, and a reproducible verification matrix.

Content must be checked for the actual Pega release and execution environment. **Hypothetical diagrams, calculations and acceptance criteria are explicitly labelled.** No invented screenshots, measured results, or client-confidential examples.

## Contributing and publishing

New articles begin in `drafts/`. The [GitHub publishing workflow](.github/workflows/publish-article.yml) moves approved drafts into `docs/articles/`, updates the catalogue and records when they entered this repository. Git author/committer dates can be set to historical dates for repository organisation; those dates **must not be interpreted as the original publication date**. Use `docs/commit-date-register.tsv` for real publication timestamps.

To publish the website, enable **Settings > Pages > Deploy from a branch > main > /docs**.

**Independent community project. Not affiliated with Pegasystems. Pega product names belong to their respective owners.**
