# howitworks-theme

A minimal, black-and-white Jekyll theme for educational "how it works" sites. Two layouts, dark mode, and nothing else.

## Layouts

| Layout | Purpose |
|--------|---------|
| `default` | Navigation, footer, content slot |
| `doc` | Article with sticky TOC, progress bar, and dark mode toggle |

## Install

```ruby
# Gemfile
gem "howitworks-theme", git: "https://github.com/qalayisleydi/howitworks-theme.git", tag: "v1.0.2"
```

```yaml
# _config.yml
theme: howitworks-theme

howitworks:
  wordmark: "My Site"
  tagline: "A short description"
  copyright: "© 2026"
  dark_mode: true
  edit_base_url: "https://github.com/user/repo/edit/main/"
  nav:
    - label: "Home"
      url: "/"
  footer_links:
    - label: "GitHub"
      url: "https://github.com/..."
```

## Article front matter

```yaml
---
layout: doc
title: "How does X work?"
author: "Name"
updated: "2026-06-18"
topic: "X"
---
```

## Localization

Override `_data/ui.yml` in your site to translate UI strings:

```yaml
toc_label: "Contents"
callout_label: "Note"
author_prefix: "By:"
updated_prefix: "Last updated:"
improve_prompt: "Found a mistake?"
improve_link: "Edit this page →"
figure_prefix: "Figure"
```

## License

MIT
