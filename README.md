# Amirreza Davar — academic website

[Live website](https://amirrezadavar.github.io/) · [Repository](https://github.com/AmirrezaDavar/amirrezadavar.github.io)

A personal academic website built with Jekyll and **al-folio**, pinned to `al_folio_core` 1.0.15. Includes About, Research, Publications, Projects, CV, News, and Contact. The homepage follows the supplied classic al-folio reference, with a portrait on the right, biography on the left, then News and Selected Publications.

## Local development

Use Ruby 3.3.12 and Node 22 or newer. On this Mac, Ruby is installed at `/opt/homebrew/opt/ruby@3.3/bin`.

```sh
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
bundle config set --local path vendor/bundle
bundle install
npm ci
bundle exec jekyll serve --host 127.0.0.1 --port 4173
```

Open <http://127.0.0.1:4173/>. The site is served at the root, so `baseurl` is empty. Dependencies and generated files are ignored by Git; both dependency lockfiles are committed.

## Editing content

| Content                          | File or directory                                                     |
| -------------------------------- | --------------------------------------------------------------------- |
| Biography and homepage           | `_pages/about.md`                                                     |
| Portrait                         | `assets/img/portrait.jpg`                                             |
| Public contact and profile links | `_data/profile.yml`, `_data/socials.yml`                              |
| Research                         | `_pages/research.md`, `_data/research.yml`                            |
| Publications                     | `_bibliography/papers.bib`                                            |
| Downloadable BibTeX              | `assets/bibliography/papers.bib` (keep in sync with the bibliography) |
| Project pages                    | `_projects/`                                                          |
| CV                               | `_pages/cv.md`                                                        |
| News                             | `_news/`                                                              |
| Site settings                    | `_config.yml`                                                         |
| Site styling                     | `assets/css/research.css`                                             |

Only add confirmed information. [Content sources](CONTENT_SOURCES.md) records the origin of the biography, portrait, publications, and news. No CV PDF was present in the original repository: the CV is an HTML page based on existing public information, with print styles and an email link for a full CV. No advisor, graduation date, prior degrees, awards, or citation counts have been inferred.

The original source pages are archived under `docs/legacy-*` and excluded from the public build. Existing research media and all previous Git commits are preserved. `/projects/chicgrasp/` and `/projects/chicken-manipulation/` remain valid. The separate `/ChicGrasp/` project site remains hosted by its original repository.

## Validation

```sh
npm run lint:prettier
JEKYLL_ENV=production bundle exec jekyll build --trace
python3 scripts/check_site.py _site
npm test
bundle exec al-folio upgrade audit
bundle exec al-folio upgrade overrides audit --fail-on-stale
```

Browser tests use installed Google Chrome locally and Playwright Chromium in CI. Tests cover page rendering, mobile/tablet navigation, horizontal overflow, image loading, WCAG accessibility checks, keyboard-operated BibTeX, persistent dark mode, and video playback. Screenshots are generated in `artifacts/`; failed-test evidence goes to `test-results/`.

## Deployment

GitHub Pages uses **GitHub Actions**. `.github/workflows/pages.yml` builds and tests every push to `main`, then deploys `_site`. Pull requests run the build and tests without deploying. Do not use GitHub Pages' built-in legacy Jekyll build, which does not support all al-folio plugins.

## Theme updates

The site uses the official al-folio v1 starter (upstream commit `2fec8d3a9c99450328cee59a6a6114e26055d86e`). Theme runtime stays in versioned gems. Three intentional local overrides are documented in `.al-folio-overrides.yml`:

- `_layouts/default.liquid`: semantic main landmark, skip link, and site stylesheet.
- `_includes/header.liquid`: seven sections, current-page labels, and responsive navigation.
- `_layouts/bib.liquid`: readable publication entries and native keyboard-accessible BibTeX disclosure.

When changing theme versions, inspect the override audit, review upstream differences, and run the build and browser checks before deploying. Al-folio's MIT license is retained in `LICENSE`.
