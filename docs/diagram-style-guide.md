---
layout: default
title: Diagram design standard
---

# Diagram design standard — Pega Feature Atlas

Architecture diagrams throughout Pega Feature Atlas use a single shared renderer:

- **Shared CSS:** `docs/assets/css/diagram-system.css`
- **Shared renderer:** `docs/assets/js/diagram-system.js`
- **Layout integration:** `docs/_layouts/default.html`

## Visual language

Use the same deep-blue labels, light-blue numbered steps, restrained connectors, white cards, rounded borders and soft neutral backgrounds. A responsive article must show the whole simple flow without horizontal clipping.

## Authoring rules

1. **Simple linear flows:** Create an ordinary fenced Mermaid flowchart, define all nodes separately with a quoted label, and connect nodes with simple one-to-one `-->` arrows. The shared renderer automatically transforms a *strictly linear* graph into an ordered, compact two-row snake layout on desktop and a vertical one-column flow on mobile.
2. **Branching diagrams:** Keep Mermaid flowcharts where node paths branch, merge, are annotated, or cannot be faithfully reduced to a single ordered list. These use the site-wide Mermaid theme with a Fit/Actual size option. Do not linearise away decision branches for appearances.
3. **Interaction sequences:** Use Mermaid `sequenceDiagram`. The shared theme applies but keeps all participant relationships and timing semantics intact.
4. **Custom vector artwork:** Use SVG assets inside `docs/assets/diagrams/` and reference them with Jekyll's `relative_url` filter. The shared renderer frames these images consistently and supports an expanded view.
5. **Evidence:** Clearly distinguish conceptual diagrams from captured runtime traces and measured lab data. Do not present speculative flows as screenshots of Pega behaviour.

### Example: automatically formatted flow

~~~mermaid
flowchart LR
  A["Client"]
  B["Authenticate"]
  C["Execute"]
  D["Persist"]
  E["Respond"]
  A --> B
  B --> C
  C --> D
  D --> E
~~~

The source order may be left-to-right; the website will display a space-efficient 3+2 arrangement on desktop without changing the directed links.

## Testing checklist

- On desktop, every label is readable and no simple linear diagram requires sideways scrolling.
- At mobile width, step cards appear in sequence and arrows remain connected.
- For branching and sequence diagrams, check that every edge, label and participant survives the Mermaid render.
- Expand and Fit/Actual size controls work where applicable.
- Inspect a technical article after modifying the shared renderer and check that no raw Mermaid code appears unexpectedly.
- Keep code-source fallbacks available when the external Mermaid library cannot load.

**Validation scope:** The shared layout automatically applies to site articles, but article-by-article visual QA remains necessary for unusual graph syntax and SVG source assets. No claim is made that every existing graph has been manually inspected.
