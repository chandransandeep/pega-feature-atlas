---
layout: default
title: Publication process
---

# Publication process and dates

Articles are authored into the `drafts/` directory. A GitHub Actions workflow triggered by pushes to `main` publishes staged drafts into topic-specific folders under `docs/articles/`.

Each article has a permanent PFA topic ID matching the 270-topic catalogue. The workflow updates the catalogue entry to **Published (lab verification pending)** and records a separate row in `docs/commit-date-register.tsv`.

## Historical Git timestamps

The workflow sets Git author and committer dates in an earlier-year range, using Git's native `GIT_AUTHOR_DATE` and `GIT_COMMITTER_DATE`. These dates are deliberately selected and are **not** evidence that an article existed in that year. The registry records the actual publication UTC.

The version-specific minimum year in each article's metadata prevents, for example, a GenAI-era feature from being assigned an implausibly early year.

## Technical evidence

A proposed architecture is not represented as a completed lab. No synthetic screenshots are presented as authentic Pega output. Claims about behaviour are supported by primary references where available and the exact version must be validated during lab review.

Original text only. Do not publish client-confidential content, Pega Academy lesson text or third-party screenshots without permission.
