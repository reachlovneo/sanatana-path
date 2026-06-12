# Architecture

This document explains where new code belongs. Product requirements remain in
`PROJECT_BLUEPRINT.md`. Editorial review and publication rules live in
`EDITORIAL_WORKFLOW.md`.

## Ownership Boundaries

```text
src/config/       Stable site-wide configuration and navigation
src/data/         Ordered, reusable domain data
src/content/      Reviewed public knowledge content
src/components/   Reusable presentation and interaction components
src/layouts/      Page shells and shared metadata
src/pages/        Routes and page composition
src/styles/       Global design tokens and baseline styles
src/utils/        Small framework-independent helpers
public/           Static files served without processing
docs/             Product, architecture, and operational documentation
```

## Development Rules

- Pages compose components; they should not own reusable domain data.
- Content files contain knowledge, not layout or application logic.
- Shared navigation and site metadata live in `src/config`.
- Ordered Atlas relationships live in `src/data`.
- Components should be accessible and work without client JavaScript whenever
  possible.
- Browser JavaScript must be small, purposeful, and progressively enhanced.
- New public routes require metadata, internal links, and sitemap coverage.
- New interactive or server features require security review before merging.

## Git Workflow

- `main` must always build.
- Work should use focused feature branches once multiple contributors are
  active.
- Pull requests must pass `.github/workflows/ci.yml`.
- Commits should describe one coherent change.
- Never commit secrets, `.dev.vars`, generated output, or dependencies.

## Content Workflow

1. Create or update an MDX topic.
2. Keep review status as `draft` or `expert-review-needed`.
3. Add source and tradition notes.
4. Complete human review.
5. Change status to `published` only when approved.
6. Build and review the generated route before merging.
