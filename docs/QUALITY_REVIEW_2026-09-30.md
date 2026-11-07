# Local quality fixes — 2026-09-30

The existing static Astro architecture, desktop Atlas, core topic journeys,
dark palette, and supplied artwork were retained. No deployment was performed.

## Changes

- Repaired missing topic links and devotion anchors; Library deep links reveal collapsed sections.
- Separated readable Library categories from planned additions and improved search feedback.
- Added a connected mobile cosmic-time map and repaired layout overflow down to 320 CSS pixels.
- Added readable Day surfaces and consistent serif typography and reading widths.
- Repaired mixed text encodings, nested main landmarks, and visible editorial placeholder labels.
- Replaced the Sources placeholder with an actual reference directory; added specific time-cycle and Garuda edition links.
- Expanded the Kali Yuga draft, including a linked four-age comparison diagram.
- Clarified pending review, protected previews from indexing, and added publication metadata validation.
- Added `npm run verify` and CI coverage for the built site's internal links, anchors, assets, metadata, landmarks, encoding, and sitemap policy.

## Verification

- Production build: 42 routes; Astro check: 78 files, zero errors, warnings, or hints.
- Built-site audit covers all 42 routes.
- Browser sweep at 320 CSS pixels covered all 42 routes. Three overflow failures were repaired and individually retested; each returned zero overflow.
- Browser interaction checks: Library search, scripture deep link, desktop Atlas selection, Kali full-guide target, and theme switching.
- Representative Day and Night screenshots are saved under `artifacts/quality-review/`.
- Final browser error-log check returned no errors.

## Remaining work

Qualified subject review is still required. Reference links are research support,
not proof that every narrative sentence has been reviewed. Some topic pages still
have broad source-family references. Existing shared artwork is retained.
Feedback submission and donations remain explicitly unavailable placeholders;
they require a separate service integration. Planned Library topics remain planned.
