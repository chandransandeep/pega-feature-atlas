---
layout: default
title: Architecture article standard
---

# Editorial standard: practical Pega architecture deep dives

**Audience:** SSA, LSA, enterprise architects and production platform engineers.

The test for every article: *Would an experienced architect learn a consequential Pega-specific design insight, or could this be found in a beginner help page?*

## Required outline

1. **The enterprise scenario** — workload, system boundaries, functional and NFR constraints
2. **The architectural question** — decision to make, not definition to memorise
3. **How the Pega feature behaves** — rule resolution, scope, transaction context, runtime/storage, dependencies as relevant, and version-specific caveats
4. **Architecture options** — practical competing patterns, diagrams and decision matrix
5. **Recommended design and why** — class/rule inventory, concrete configuration decisions and explicit assumptions
6. **Design failure modes** — demonstrate stale state, race conditions, security boundaries, partial failure, replays, bottlenecks or relevant issues
7. **Capacity and performance model** — state assumptions and equations; no fabricated measurement
8. **Production observability** — Pega-specific tools and signals, plus what each would prove
9. **Validation plan** — repeatable experiments, expected outcomes and acceptance criteria
10. **Upgrade/Constellation/version applicability**, official primary references and unresolved questions

## Evidence standard

- Mark **design hypothesis**, **documentation-backed behaviour**, **test expectation** and **actually measured observation** separately.
- Cite Pega Platform documentation for feature behaviour; do not copy protected material.
- Do not call a conceptual diagram a runtime trace.
- No invented Pega screenshots, fake metrics, client data, code that was never tested, or unqualified vendor-version statements.
- Once access to a sandbox is available, add actual test versions, captures of relevant evidence, constraints and outcomes.

## Proposed topic titles

- **Parameterized Data Pages at scale: cardinality, scope and safe cache isolation**
- **Queue Processor ≠ exactly-once business processing: designing idempotent downstream writes**
- **Case locking under concurrency: pessimistic vs optimistic approaches**
- **Connect REST in production: timeouts, circuit breaking, retries and correlation**
- **Constellation DX API boundaries: designing a UI-independent business capability**
- **Rule resolution in multi-application frameworks: override risk and upgrade safety**
