---
layout: default
title: 'Treatment design across web agent and outbound channels'
topic_id: PFA-218
category: decisioning
earliest_git_year: 2020
verification: design-backed-lab-pending
---

# Treatment design across web, agent and outbound channels

## Failure scenario: the right offer arrives in the wrong channel

A telecom provider uses Pega Customer Decision Hub to select a retention action. The action is eligible and suitable for the customer, but its email treatment contains an offer that can only be redeemed by a contact-center agent. The web channel shows the same copy without the required disclosure, and an outbound campaign sends it again after the customer has already accepted in a live call. A single decision strategy has been mistaken for a complete cross-channel experience contract.

An Action is a business proposition; a Treatment is its channel-specific presentation and delivery configuration. Channel compatibility, consent, contact policy, response capture and offer fulfillment must be modeled separately. The same action can be eligible across channels while requiring different treatment copy, placement, response codes and handoff behavior.

## Pega Customer Decision Hub boundaries

- **Issue, Group and Action** define the proposition taxonomy. The Action should have a stable business identifier independent of creative asset versions.
- **Treatments** provide channel-specific content and configuration. Distinguish web and mobile, agent-assisted and outbound placements; supported treatment types vary by CDH version and licensed capabilities.
- **Next-Best-Action Designer** and **Decision Strategies** apply eligibility, applicability, suitability, contact policies and prioritization. Consent and regulatory restrictions should not be bypassed by a channel adapter.
- **Real-time container** serves a request in the context of a channel and placement. A channel-specific response may omit properties that other channels use; never rely on a universal payload shape.
- **Interaction History and response management** capture impressions, accepts, declines and later outcomes. The meaning of a response must be standardized across agent and digital channels.

## Decision-to-delivery architecture

~~~mermaid
flowchart TD
 A[Customer and consent context] --> B[Eligibility and suitability]
 B --> C[Action candidates]
 C --> D[Arbitration and contact policy]
 D --> E{Channel and placement}
 E -->|Web| F[Web treatment and container response]
 E -->|Agent| G[Agent treatment and assisted script]
 E -->|Outbound| H[Outbound treatment and send policy]
 F --> I[Capture impression and response]
 G --> I
 H --> I
 I --> J[Interaction History and fulfillment]
 J --> K[Suppress or revise future decisions]
~~~

## Architecture and implementation sequence

1. **Define one proposition contract.** Assign a stable Action identifier, product eligibility, financial value, effective dates and fulfillment service. Put regulatory suitability in shared decision policy, not in text copy or a channel-only filter.
2. **Create a treatment matrix.** For each Action, specify permitted channels, placements, locale, required disclosures, creative owner, accessibility standard, response types and expiration. A web banner cannot inherit an agent script without explicit review.
3. **Configure channel context.** Model real-time container identifiers, agent-assisted placement and outbound audience selection in the CDH capabilities supported by the installed release. Validate the exact container request and response schema for each channel rather than copying fields from an old integration.
4. **Enforce shared suppression.** Check contact frequency, consent and recent accepted offers before ranking. Decide whether a customer accepting through the agent should immediately suppress outbound messages or whether eventual propagation is acceptable, then implement and measure that boundary.
5. **Capture a canonical response.** Map each channel's accept, reject, ignore and delivery-failure events into an agreed response taxonomy. Include Action ID, Treatment ID, channel, timestamp and correlation identifier. Avoid recording sensitive free-text agent notes as decision evidence.
6. **Design fulfillment separately.** An agent may complete the offer in a case; web may deep-link to self-service; outbound may require authentication later. Use a durable fulfillment operation ID so a customer cannot accidentally receive duplicate orders through different channels.
7. **Govern treatment changes.** Business users may manage copy and placement within delegated boundaries. A new disclosure, eligibility rule or high-risk product claim needs formal approval and versioned evidence. Re-run channel contract tests when a treatment changes.

## Tradeoffs and production failure mechanics

A shared treatment reduces content maintenance but often produces unsuitable copy or missing legal disclosures. Fully separate treatments improve fit but increase governance and translation effort. Real-time channels need low latency; outbound channels can precompute candidates but may act on stale consent. Favor rechecking critical consent at delivery and preserving the decision version used at selection.

Interaction History is not automatically a transactional lock across channels. A web accept and an agent accept can race before suppression is visible. Fulfillment must remain idempotent even when decision arbitration is correct. CDH '24.2 documents channel-specific real-time container responses, so integrations built on older generic payload assumptions require explicit regression testing.

## Reproducible verification matrix

| Scenario | Channel setup | Expected behavior |
|---|---|---|
| Eligible customer | Web, agent and outbound permitted | Same Action identity with channel-specific Treatment |
| Missing treatment | Web placement lacks approved creative | No malformed offer; defined fallback or no action |
| Consent revoked | Revoke before outbound send | Suppress at delivery boundary |
| Agent accept | Agent accepts then web requests | Contact policy and fulfillment prevent duplicate action |
| Locale mismatch | Customer language unsupported | Approved default or no treatment, never wrong disclosure |
| Expired creative | Treatment expires before decision | Action uses another approved treatment or is withheld |
| Container schema | Agent and web container requests | Only supported channel fields consumed |
| Concurrent acceptance | Two channels accept same Action | One fulfillment operation, reconciled responses |

Use synthetic customers, frozen policy versions and captured channel payloads. Results are pending laboratory execution.

## Primary Pega references

- [Customer Decision Hub overview and channel design](https://docs.pega.com/bundle/customer-decision-hub-241/page/customer-decision-hub/overview/cdh-product-overview.html)
- [CDH '24.2 release notes, channel-specific real-time container responses](https://docs.pega.com/bundle/customer-decision-hub-242/page/customer-decision-hub/release-notes/cdh-enhancements.html)
- [Building decision strategies](https://docs.pega.com/bundle/platform-242/page/platform/decision-management/building-strategies.html)

**Version boundary:** Treatment types, channel names, response fields and emergency exclusion controls change across CDH releases. Verify the deployed version and its licensed channels before applying this design.
