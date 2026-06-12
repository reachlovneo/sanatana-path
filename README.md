# Sanatana Path

Sanatana Path is a calm, source-aware visual knowledge atlas designed to help
beginners understand where important Sanatana Dharma concepts fit within the
larger tradition.

The first release proves one core idea:

> Can a beginner clearly understand where Kali Yuga fits inside cosmic time?

## Current Status

The project is in foundation development. The original planning documents and
visual mockups are retained as references, but
[`docs/PROJECT_BLUEPRINT.md`](docs/PROJECT_BLUEPRINT.md) is the authoritative
product and engineering specification.

Progress is recorded in [`PROGRESS.md`](PROGRESS.md).

## Version 1 Scope

Version 1 is a focused Cosmic Atlas journey:

```text
Cosmic Time -> Kalpa -> Manvantara -> Maha Yuga -> Four Yugas -> Kali Yuga
```

Primary routes:

```text
/
/atlas
/atlas/cosmic-time
/atlas/kalpa
/atlas/manvantara
/atlas/maha-yuga
/atlas/four-yugas
/atlas/kali-yuga
/sources
/methodology
/feedback
/donate
```

## Technology

- Astro
- TypeScript
- Tailwind CSS
- MDX content collections
- Cloudflare Workers Static Assets
- Cloudflare D1 for private feedback only
- Cloudflare Turnstile for feedback protection
- Cloudflare R2 later, only if asset scale requires it

## Core Product Rules

- Public knowledge content is static, reviewed, and Git-controlled.
- Every topic explains its meaning, context, sources, and present-life relevance.
- The `Where It Fits` path is the signature interaction.
- Content distinguishes sources, traditional interpretations, and simplified
  explanations.
- The experience is mobile-first, accessible, SEO-first, and fast.
- Motion is calm and purposeful; it must never harm usability or performance.
- Feedback is private and can never directly change public content.
- Donation details are static and can never be controlled by URL parameters.

## Explicit Non-Goals For Version 1

- No accounts, profiles, or login
- No community or public comments
- No personal progress tracking or gamification
- No AI guide or chatbot
- No CMS or public content editing
- No public uploads
- No payment gateway
- No database-controlled public knowledge

## Reference Documents

These files contain useful early thinking but may include outdated decisions:

- `README(1).md`
- `Sanatana_Knowledge_Platform_Codex_Development_Master_Guide.md`
- `Sanatana_Knowledge_Platform_Codex_Development_Master_Guide.docx`
- The light and dark Cosmic Atlas mockup images

When documents disagree, use this priority:

1. `docs/PROJECT_BLUEPRINT.md`
2. `README.md`
3. `PROGRESS.md`
4. Original planning documents

## Development Order

1. Establish project specification and progress tracking.
2. Scaffold Astro, TypeScript, Tailwind, and Cloudflare.
3. Implement design tokens, layout, accessibility, and motion foundations.
4. Build the homepage, Atlas overview, and reusable topic template.
5. Add the six reviewed Cosmic Atlas topics.
6. Add methodology, sources, donation, and private feedback.
7. Complete SEO, security, performance, and accessibility audits.

## Quality Gates

Before any release:

```text
[ ] Build succeeds
[ ] Type checking succeeds
[ ] No browser console errors
[ ] Keyboard navigation works
[ ] Reduced-motion mode works
[ ] Topic sources and review metadata are present
[ ] Sitemap and robots.txt are correct
[ ] Donation page ignores URL parameters
[ ] Feedback is private and server-validated
[ ] No secrets are committed
[ ] Mobile Lighthouse targets are met
```

