---
layout: default
title: How we write the articles
---

# Article template — LinkedIn-style practical walkthrough

Every post should teach the reader to build, test and troubleshoot a *specific result* in Pega.

## Required sections
1. **The scenario** — name a specific, relatable failure or requirement
2. **Expected outcome** — what will be visibly different once implemented
3. **Example application** — classes, sample data, case type and rule inventory
4. **Step-by-step rule configuration** — actual settings, properties, parameters and expressions
5. **Test it** — inputs, expected outputs and tools to inspect
6. **Break it on purpose** — a failure reproduction and the root-cause checklist
7. **Production choices** — performance, security, errors, scaling and alternative solutions
8. **Version notes and official references**

## Screenshots in every *verified* article
- Rule form with relevant setting clearly highlighted
- Sample data / parameter values (fully anonymised)
- Successful Clipboard/Tracer/PAL/queue evidence
- Failure output and corrected output
- Add alt-text and captions; keep one image per step when useful

**Never generate screenshots that pretend to be real Pega screens.** Until a hands-on Pega environment is available, articles must be labeled **Research-backed recipe · Lab not yet verified** and use only diagrams, examples and test plans.

## Editorial rules
- Don't merely define the feature — solve a problem.
- No unsupported claims such as “tested” or “improves by 70%”.
- Explain exact behaviour and version-specific differences where validated; mark uncertainties.
- No client IP, confidential data or copied third-party screenshots.
- Reference the official Pega source underlying important technical behaviour.
