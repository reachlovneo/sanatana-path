# Project Progress

Last updated: 2026-06-27

## Current Milestone

Milestone 2: Library and Atlas Content Expansion

## Completed

- Reviewed original README, development guide, and visual mockups.
- Narrowed Version 1 to the six-topic Cosmic Atlas journey.
- Selected Astro, TypeScript, Tailwind, MDX, and Cloudflare Workers.
- Defined the authoritative project blueprint.
- Defined security, SEO, accessibility, visual, and motion requirements.
- Scaffolded the Astro application and MDX content collection.
- Implemented Sacred Atlas light/dark tokens and reduced-motion-safe animations.
- Built the homepage, Atlas overview, reusable topic template, and six draft topic routes.
- Added methodology, sources, feedback placeholder, and donation safety placeholder pages.
- Verified a clean static build: 12 pages, zero type errors, warnings, or hints.
- Refactored reusable site configuration, Atlas data, SEO, and route utilities.
- Added professional mobile navigation and adjacent-topic journey navigation.
- Added GitHub Actions CI and repository architecture documentation.
- Organized original planning material under `docs/references`.
- Added centralized SEO metadata, JSON-LD, and a default social-sharing image.
- Added explicit source, reviewer, related-topic, and editorial-status fields.
- Added draft-page review notices, `noindex`, and sitemap exclusion safeguards.
- Documented the editorial review and publication workflow.
- Developed Cosmic Time as the first meaningful flagship-topic draft.
- Added a reusable nested-time visual and clearly labeled reflection panel.
- Added initial Cosmic Time research references while retaining expert-review safeguards.
- Reordered Cosmic Time into an answer-first, scan-friendly learning experience.
- Added reusable quick-orientation and common-question components.
- Improved public draft wording and descriptive next-topic information scent.
- Added the Library route, searchable category system, and shared header navigation.
- Added Garuda Purana as a connected atlas topic and home/library pathway.
- Centralized the dark theme and shared header behavior through `BaseLayout` and `SiteHeader`.
- Added active working standards for performance, SEO, accessibility, motion, code structure, and progress discipline.

## In Progress

- Complete Library topics one by one, starting with Cosmic Time as the first fully linked readable topic.
- Keep Home, Atlas, Library, and topic pages connected through clear internal navigation.
- Maintain performance, SEO, accessibility, and premium-motion standards while expanding content.
- Prepare the Cosmic Time flagship draft for qualified source and content review.

## Next

- Convert more Library categories into complete readable topic pages.
- Gradually extract large Home, Library, and Atlas sections into reusable components.
- Improve sitemap/indexing rules so review status controls publication behavior.
- Complete expert-reviewed topic content and source references.
- Add the secure Turnstile and D1 feedback flow after the content experience is approved.

## Decisions

| Date | Decision | Reason |
|---|---|---|
| 2026-06-12 | Use a narrow six-topic Version 1 | Prove the core `Where It Fits` experience before expanding |
| 2026-06-12 | Use Astro instead of Next.js | Better fit for a static, content-first, minimal-JavaScript platform |
| 2026-06-12 | Deploy with Cloudflare Workers Static Assets | Current Cloudflare-first direction and future Worker feedback support |
| 2026-06-12 | Exclude accounts, community, and progress tracking | Keep Version 1 focused and avoid contradictory scope |
| 2026-06-12 | Treat motion as a governed design system | Deliver professional polish without harming performance or accessibility |
| 2026-06-12 | Keep Cloudflare adapter deferred locally | Cloudflare `workerd` does not currently install on this Windows ARM64 environment |
| 2026-06-12 | Temporarily use authored CSS without active Tailwind plugin | Current Tailwind Vite plugin conflicts with the Astro 6 build resolver; no Tailwind utilities are used yet |
| 2026-06-27 | Treat performance, SEO, accessibility, and premium motion as active working standards | Keep the experience smooth, professional, and scalable as Library content grows |

## Environment Notes

- GitHub repository and automated CI are active and synchronized with local `main`.
- Cloudflare's local `workerd` dependency does not currently support this Windows ARM64 environment. Production remains targeted at Cloudflare Workers; deploy tooling should be completed on a supported CI or development host.
- Astro checks may require elevated execution on this Windows sandbox because Vite child process spawning can fail with `spawn EPERM` under restricted execution.

## Open Items Before Production

- Final domain name
- Reviewed donation receiver details and QR asset
- Turnstile site key and secret
- Production D1 database
- Named content reviewers and editorial review workflow
- Final approved content for core atlas and Library topics
- Qualified review of Cosmic Time wording, references, and reflective framing
- Lighthouse, accessibility, SEO, and visual QA before launch
