# Sanatana Path Project Blueprint

Version: 1.0  
Status: Authoritative  
Established: 2026-06-12

## 1. End Goal

Build a trusted, calm, and deeply explorable Sanatana Dharma knowledge atlas.
The platform should help a beginner understand a concept quickly, see where it
fits in the larger knowledge system, explore deeper explanations, inspect
sources, and connect the topic to present life.

Sanatana Path is not a book archive, blog, social network, fantasy experience,
or AI chatbot. It is a structured visual learning system.

## 2. Version 1 Success Definition

Version 1 succeeds when a first-time visitor can:

1. Understand the relationship between Cosmic Time, Kalpa, Manvantara,
   Maha Yuga, Four Yugas, and Kali Yuga.
2. Navigate the journey without feeling lost.
3. distinguish simplified explanations from source and tradition notes.
4. Use the site comfortably on a small mobile device.
5. Trust that content and donation information cannot be publicly manipulated.

## 3. Product Principles

### Required

- Overview first; depth is optional.
- Answer first, organize second, inspire third, and offer deep detail afterward.
- Every page answers: what is this, where does it fit, why does it matter, what
  are its sources, and where should I go next?
- Simple language comes before Sanskrit terminology.
- Different traditions and interpretations are acknowledged respectfully.
- Public content is reviewed and version-controlled.
- The interface is soulful but remains highly readable and functional.

### Forbidden In Version 1

- Accounts, login, profiles, or personal dashboards
- Community features or public comments
- Progress tracking, achievements, or gamification
- AI-generated public content or AI chat
- Admin panel, CMS, or public content mutation endpoints
- User uploads
- Database-controlled public knowledge
- Dynamic donation details or payment gateway
- Heavy animations, video backgrounds, or decorative effects that run forever

## 4. Version 1 Information Architecture

### Routes

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

### Navigation

```text
Home | Atlas | Sources | Feedback | Donate
```

### Core Journey

```text
Cosmic Time -> Kalpa -> Manvantara -> Maha Yuga -> Four Yugas -> Kali Yuga
```

## 5. Topic Page Contract

Every topic page must include:

1. Topic title and one-line meaning
2. Direct simple answer
3. Why the topic matters
4. `Where It Fits` path
5. Numbers or quick facts at a glance
6. Accessible instructional visual
7. Common questions and confusion
8. Beginner-friendly deeper explanation
9. Clearly labeled reflection or present-life relevance
10. Source and tradition notes
11. Related and descriptive next-topic links
12. Last reviewed date and content version
13. Private feedback option

### Required Content Metadata

```yaml
title:
slug:
section:
oneLineMeaning:
summary:
whereItFits:
quickFacts:
sources:
traditionNote:
relatedTopics:
lastReviewed:
contentVersion:
reviewStatus:
reviewedBy:
```

Allowed review statuses:

```text
draft | expert-review-needed | reviewed | published
```

Only `published` content is included in the production build.

## 6. Source And Editorial Rules

- Clearly separate direct source references, common traditional explanation,
  and the platform's simplified explanation.
- Never present one interpretation as universally final.
- Do not copy modern copyrighted translations or commentary.
- Use original summaries, public-domain material where appropriate, and clear
  attribution.
- Claims requiring a source must have one before publication.
- Sanskrit terms must include a beginner-friendly explanation.
- Human review is mandatory before publication.
- UTF-8 is required for all content. Corrupted text must never be published.

## 7. Visual System: Sacred Atlas

### Design Character

```text
Timeless | Calm | Ordered | Source-aware | Soulful | Clear
```

The provided light and dark mockups define brand direction, not exact layouts.
Implementation should retain their warmth and dignity while reducing visual
density and improving readability.

### Light Theme Tokens

```text
Canvas:        #F7F0E2
Surface:       #FFF9ED
Surface-muted: #EEE2CC
Forest:        #123F35
Forest-soft:   #2E6858
Copper:        #B87333
Antique-gold:  #C89B4B
Ink:           #2B2118
Ink-muted:     #6B5B4A
Border:        #D8C5A3
```

### Dark Theme Tokens

```text
Canvas:        #071A1C
Surface:       #0C2525
Surface-muted: #143331
Gold:          #D6AC5B
Copper:        #B96E3B
Ivory:         #F7EBD3
Ivory-muted:   #C9B99D
Border:        #5A4930
```

Final colors must pass WCAG contrast checks. Gold and copper are accents, not
default body-text colors.

### Typography

- One classic serif family for headings.
- One highly readable sans-serif family for body and controls.
- Minimum body size: `1rem`.
- Comfortable reading width: approximately `65ch`.
- No essential text embedded only inside images.

### Shape And Layout

- Clean cards, subtle rounded corners, thin lines, and generous spacing.
- Journey paths should be linear and understandable before becoming decorative.
- Mobile uses a vertical journey; desktop may use a richer connected layout.
- Sacred geometry is a quiet background detail, never the main interaction.

## 8. Professional Motion System

Motion should communicate hierarchy and relationships. It must never delay
reading, block interaction, or compete with content.

### Approved Motion

- Page entry: gentle opacity and short vertical translation
- Journey cards: restrained one-time stagger
- `Where It Fits`: progressive path highlight
- Cards and buttons: subtle hover/focus elevation or border transition
- Drawers and accordions: smooth open/close with immediate control response
- Theme switching: short color transition without flashing

### Motion Constraints

- Prefer CSS animations and transitions.
- Add a JavaScript motion library only for interactions CSS cannot express well.
- Animate `transform` and `opacity` whenever possible.
- Typical duration: `160ms` to `420ms`.
- Maximum intentional sequence: `700ms`.
- No autoplaying infinite decorative animations.
- Scroll reveals run once and must not hide content when JavaScript fails.
- Avoid animating layout properties such as width, height, top, and left.
- Respect `prefers-reduced-motion: reduce` globally.
- Disable or simplify nonessential effects on narrow and low-power devices.

### Motion Performance Budget

- No animation-caused layout shift.
- No animation-caused long tasks above `50ms`.
- No animation required to understand or access content.
- Interaction feedback begins within `100ms`.

## 9. Technology And Architecture

### Stack

```text
Astro
TypeScript in strict mode
Authored CSS with governed design tokens
Astro Content Collections / MDX
Cloudflare Workers Static Assets
Cloudflare D1 for private feedback only
Cloudflare Turnstile for feedback protection
Cloudflare R2 later only if needed
```

### Architectural Rules

- Generate public knowledge pages statically.
- Keep client-side JavaScript minimal and scoped to interactive islands.
- Prefer semantic HTML and CSS before client components.
- Keep all public knowledge in repository content files.
- Use D1 only for private feedback records.
- Use Workers bindings rather than Cloudflare REST calls from Worker code.
- Never store request-specific data in module-level mutable state.
- Every Promise in Worker code must be awaited, returned, voided, or passed to
  `ctx.waitUntil()`.
- Generate Worker binding types from Wrangler configuration.

### Intended Structure

```text
src/
  components/
    layout/
    motion/
    topic/
    ui/
  content/
    atlas/
  layouts/
  pages/
    atlas/
    api/
  styles/
  utils/
public/
  images/
  _headers
migrations/
docs/
```

## 10. Security Requirements

### Public Surface

- No public content write endpoint.
- No public database read endpoint.
- No admin route in Version 1.
- No user-controlled HTML rendering.
- Validate and sanitize all feedback fields on the server.
- Apply strict request size and message length limits.
- Return generic errors; do not expose internals.
- Do not store raw IP addresses without a reviewed need.

### Turnstile And Feedback

- Turnstile validation is mandatory on the server.
- Tokens are single-use and must be verified before D1 insertion.
- Feedback never changes public content automatically.
- Add rate limiting before production launch.

### Donation

- Receiver, UPI ID, QR asset, verification date, and version come from frozen
  static configuration.
- Ignore all URL query parameters.
- Never load donation QR codes from arbitrary third parties.
- Clearly display receiver identity and safety warning.
- Never ask users for OTP, PIN, password, or remote access.

### Secrets And Configuration

- No secrets in source code, content, or Wrangler config.
- Local secrets live in ignored `.dev.vars`.
- Production secrets use Wrangler secret management.
- Commit `wrangler.jsonc`; never commit credentials.

### Headers

Before launch configure and verify:

- Content-Security-Policy
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- Frame protection through CSP `frame-ancestors`
- HSTS only after final HTTPS and subdomain behavior are verified

## 11. SEO Requirements

- Every topic has a unique crawlable URL, title, description, canonical URL,
  and one H1.
- Generate sitemap and robots.txt.
- Use semantic headings and descriptive internal links.
- Add BreadcrumbList and Article structured data where accurate.
- Use FAQ structured data only for visible, genuine FAQ content.
- Include last-reviewed metadata.
- Use descriptive image alt text; decorative images use empty alt.
- Pages must render meaningful content without client-side JavaScript.
- Never create thin pages only to target keywords.

## 12. Accessibility Requirements

- Target WCAG 2.2 AA.
- All navigation and controls work with keyboard only.
- Focus states are clearly visible.
- Heading structure is logical.
- Color is never the only way information is communicated.
- Touch targets are at least `44px` where practical.
- Reduced-motion preference is honored.
- Drawers, dialogs, and accordions use correct semantics and focus behavior.

## 13. Performance Budgets

Target mobile experience:

```text
Lighthouse Performance:    90+
Lighthouse Accessibility:  95+
Lighthouse Best Practices: 95+
Lighthouse SEO:            95+
LCP:                       < 2.5s
CLS:                       < 0.1
INP:                       < 200ms
```

Rules:

- Ship minimal JavaScript.
- Optimize and dimension all images.
- Use responsive WebP/AVIF where practical.
- Lazy-load below-fold media.
- Avoid unnecessary third-party scripts.
- Avoid large decorative PNGs in production UI.
- Load fonts carefully and avoid excessive font weights.

## 14. Testing And Release Gates

### Automated

- Astro build
- Type checking
- Content schema validation
- Unit tests for validation/security utilities
- Integration tests for feedback endpoint
- Link and route checks

### Manual

- Mobile and desktop visual review
- Keyboard-only navigation
- Screen-reader-oriented semantic review
- Reduced-motion review
- Light/dark contrast review
- Donation query-parameter manipulation test
- Feedback abuse and invalid-input tests
- Lighthouse and browser console review

## 15. Build Order

### Milestone 0: Authority And Setup

- Establish this blueprint and progress log.
- Initialize Git.
- Scaffold Astro and Cloudflare Workers.
- Configure formatting, type checking, and ignored secrets.

Implementation architecture and module ownership are documented separately in
`docs/ARCHITECTURE.md`.

### Milestone 1: Design Foundation

- Add theme tokens and typography.
- Build responsive shell and navigation.
- Implement reduced-motion-safe motion utilities.
- Add base SEO and accessibility patterns.

### Milestone 2: Core Vertical Slice

- Build homepage.
- Build Atlas overview.
- Build reusable topic template.
- Publish one complete sample: Kali Yuga.

### Milestone 3: Complete Cosmic Journey

- Add the other five reviewed topics.
- Add connected journey navigation and related topics.
- Add sources and methodology pages.

### Milestone 4: Trust Features

- Add static donation page.
- Add Turnstile, Worker feedback endpoint, D1 migration, and private form.

### Milestone 5: Launch Quality

- Complete content review.
- Complete SEO, security, accessibility, and performance audits.
- Deploy preview, test, then deploy production.

## 16. Change Control

New ideas belong in a future-work list unless required for the current
milestone. Any change that introduces accounts, public writes, dynamic public
content, or large client-side dependencies requires an explicit architecture
and security review before implementation.
