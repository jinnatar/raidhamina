---
layout: page
title: Ryhmät
---

|  | Linkki | Kuvaus | Ohjeet |
|------|--------|--------|--------|{% for group in site.data.ryhmat %}
|![{{group.chat}}]({{site.baseurl}}/assets/img/{{group.slug}}_pieni.jpg){: .circle-icon}|[{{group.name}}](https://t.me/{{group.chat}})|{{group.description}}|{{group.help}}|{% endfor %}
