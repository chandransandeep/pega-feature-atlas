---
layout: default
title: Pega Architecture Articles
---

# Published architecture studies

This index lists only published technical articles. Browse the [270-topic roadmap]({{ '/feature-inventory.html' | relative_url }}) for planned subjects.

{% assign articles = site.pages | where_exp: "page", "page.topic_id" | sort: "topic_id" %}
{% for article in articles %}
- **{{ article.topic_id }}** [{{ article.title }}]({{ article.url | relative_url }}) | {{ article.category | replace: "-", " " | capitalize }}
{% endfor %}

Articles marked `design-reviewed-pending-lab` contain reference designs and experiments to perform; they have not been tested against a live Pega environment. Historical Git timestamps are not the actual dates of publication. See [the date register]({{ '/commit-date-register.tsv' | relative_url }}) for the real publication UTC.
