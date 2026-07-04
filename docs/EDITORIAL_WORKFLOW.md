# Editorial Workflow

Public knowledge content must earn publication. A complete route and polished UI
do not make a topic authoritative.

## Review States

```text
draft
expert-review-needed
reviewed
published
```

- `draft`: Early writing. Not ready for subject review.
- `expert-review-needed`: Structurally complete but claims and sources need
  qualified review.
- `reviewed`: Reviewed, but not yet approved for production publication.
- `published`: Approved for indexing and public reference.

## Publication Requirements

For Cosmic Clock topics, reviewers should also check that the page follows `COSMIC_CLOCK_WRITING_SYSTEM.md`: one core idea, story-first opening, simple explanation, visual structure, cliffhanger ending, and relevant sources.

A topic can move to `published` only when:

- Its beginner explanation is accurate and clear.
- Claims have explicit source references.
- Tradition-specific framing is identified.
- Different interpretations are noted where relevant.
- At least one named reviewer is recorded.
- Related topics and present-life meaning are reviewed.
- The route has passed build, accessibility, SEO, and visual review.
- Its route is intentionally added to the sitemap.

## Draft Safeguards

Draft and review-pending topic routes:

- Display their review status prominently.
- Show that approved source references are not yet available.
- Include `noindex, nofollow`.
- Are excluded from the generated sitemap.
- Must not be described as final or authoritative.

## Adding Sources

Each source entry uses:

```yaml
- title: ""
  type: primary | commentary | public-domain-translation | modern-reference
  note: ""
  url: ""
```

Do not add a source merely because it discusses the same broad topic. Confirm
that it supports the specific explanation or claim being reviewed.

