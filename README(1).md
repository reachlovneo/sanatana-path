# Sanatana Knowledge Platform

A fast, secure, SEO-first, Cloudflare-hosted Sanatana Dharma knowledge platform.

The product is a **structured visual knowledge atlas**, not a book archive, blog, social network, or AI chatbot. It helps users understand Sanatana Dharma in a clear order: from cosmic foundation to stories, scriptures, wisdom, practice, and present life.

---

## Product Vision

Build a calm, timeless, source-aware knowledge platform where anyone can understand Sanatana Dharma from the highest cosmic level to daily life without feeling lost.

Core experience:

```text
Overview first → Simple meaning → Where it fits → Visual explanation → Deep dive → Sources → Present-life meaning
```

Users should feel:

- I understand the big picture.
- I know where this topic fits.
- I can start simple and go deeper when ready.
- The platform is respectful, trustworthy, and source-aware.
- The interface feels soulful, classic, and modern.

---

## Non-Negotiable Product Rules

1. Main public content must be static and Git-controlled.
2. No public admin panel in MVP.
3. No AI feature in MVP.
4. No public comments in MVP.
5. No user-uploaded public content.
6. Feedback must be private and must never directly update public content.
7. Donation details must be static, hard-coded, and never controlled by URL parameters.
8. Every topic page must include quick meaning, where it fits, source notes, related topics, and feedback option.
9. SEO, performance, accessibility, and security are core requirements from day one.
10. UI must follow the **Sacred Atlas** visual language.

---

## Recommended Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- MDX / JSON content
- Framer Motion only for subtle transitions
- next-themes for light/dark theme

### Hosting and Backend

Cloudflare-only MVP:

- Cloudflare Pages for hosting
- Cloudflare Pages Functions / Workers for feedback API
- Cloudflare D1 for private feedback storage
- Cloudflare Turnstile for bot protection
- Cloudflare R2 later for generated image storage
- Cloudflare DNS, SSL, CDN, cache, and security headers

### Content Storage

MVP content must be stored as static files:

```text
/content/**/*.mdx
/content/**/*.json
/public/images/**
```

No public-facing database should control main knowledge content in MVP.

---

## MVP Feature Scope

Build these first:

1. Home
2. Cosmic Atlas
3. Topic detail page
4. Scripture Library
5. Scripture detail page
6. Stories
7. Story detail page
8. Wisdom
9. Practice
10. Search
11. Glossary
12. Sources drawer
13. Feedback form
14. Donation page
15. Light/dark theme
16. Sitemap, robots, metadata, and structured data

Do not build these in MVP:

- Login
- Public comments
- AI guide
- Payment gateway
- Admin content editor
- Notifications
- Mobile native app
- User profiles
- Public upload system

---

## Main Navigation

### Mobile Bottom Navigation

```text
Home | Atlas | Library | Wisdom | Practice
```

Top actions:

```text
Search | Glossary | Saved later
```

Feedback appears inside pages, not as a main tab.

### Desktop Sidebar

```text
Home
Atlas
Library
Stories
Wisdom
Practice
Donate
```

Top-right actions:

```text
Search | Theme Toggle | Feedback | Profile placeholder later
```

---

## Content Architecture

The platform has six main knowledge areas.

### 1. Cosmic Atlas

Purpose: explain the big picture of existence and time.

Topics:

- Supreme Reality
- Creation
- Panchabhutas
- Lokas
- Cosmic Time
- Kalpa
- Manvantara
- Maha Yuga
- Four Yugas
- Satya Yuga
- Treta Yuga
- Dvapara Yuga
- Kali Yuga
- Pralaya
- Brahma's day and night
- Where we are now
- Present life in Kali Yuga

### 2. Library

Purpose: organize scriptures and granthas clearly.

Categories:

- Vedas
- Upanishads
- Puranas
- Itihasas
- Bhagavad Gita
- Sutras
- Agamas and Tantras
- Smritis and Dharma texts
- Stotras and devotional texts

### 3. Stories

Purpose: explain events, characters, and lessons.

Topics:

- Dashavataras
- Ramayana timeline
- Mahabharata timeline
- Krishna life
- Kurukshetra war
- Bhagavad Gita moment
- Devas and Asuras
- Rishis and kings
- Women of wisdom
- Moral dilemmas and lessons

### 4. Wisdom

Purpose: explain philosophy and life concepts.

Topics:

- Dharma
- Karma
- Moksha
- Atman
- Brahman
- Paramatma
- Bhagavan
- Maya
- Samsara
- Rebirth
- Gunas
- Purusharthas
- Rta
- Yajna
- Tapas
- Seva
- Ahimsa
- Satya
- Bhakti
- Jnana
- Dhyana
- Yoga
- Sadhana
- Guru tattva
- Mantra
- Prana
- Kundalini
- Chakras
- Darshanas
- Vedanta schools

### 5. Practice

Purpose: connect knowledge to daily life.

Topics:

- Daily sadhana
- Japa
- Mantra
- Meditation
- Puja basics
- Aarti
- Prasad
- Sankalpa
- Sandhya Vandana
- Surya Namaskar
- Temple understanding
- Festivals
- Sattvic living
- Life guidance
- Reflection journal later

### 6. Sources and Trust

Every topic must show:

- Primary source notes
- Explanation type
- Tradition notes
- Last updated date
- Content version
- Related topics
- Feedback option

---

## Topic Page Content Template

Every topic page should follow this exact structure:

```text
1. Topic title
2. One-line meaning
3. Source-backed badge
4. Where it fits path
5. Quick facts
6. Simple explanation
7. Visual overview
8. Key points
9. Deep dive sections
10. Source notes
11. Different views note, where needed
12. Present-life meaning
13. Related topics
14. Feedback form
```

Example:

```text
Kali Yuga
The fourth and current age in the yuga cycle.

Where it fits:
Brahma's Life → Shveta-Varaha Kalpa → Vaivasvata Manvantara → 28th Maha Yuga → Kali Yuga → Present Life

Quick facts:
Duration: 432,000 years
Position: 4th yuga
Dharma level: 1/4
Theme: decline of dharma, but easier access to sincere spiritual practice
```

---

## Content Writing Rules

Use simple, respectful, clear language.

### Do

- Explain one idea at a time.
- Use beginner-friendly definitions first.
- Show where the topic fits in the bigger map.
- Mention sources and tradition notes.
- Separate scripture/source from simplified explanation.
- Use visuals, timelines, comparisons, and glossary support.
- Explain present-life relevance.

### Do Not

- Copy copyrighted translations or commentaries.
- Present one interpretation as the only final truth.
- Overload pages with Sanskrit without explanation.
- Use dramatic, loud, or manipulative spiritual language.
- Mix sources without saying where the idea comes from.
- Publish AI-generated content without human review.

---

## Visual Style: Sacred Atlas

The UI must feel:

```text
Timeless, calm, ordered, source-backed, soulful, deeply explorable.
```

### Light Theme

Use for daily reading and learning.

```text
Background: warm ivory / parchment cream
Primary: deep forest green
Accent: copper / antique gold
Text: dark brown / charcoal
Cards: soft cream
Lines: muted sand
```

### Dark Theme

Use for immersive atlas mode.

```text
Background: deep cosmic navy / dark emerald
Primary: muted gold
Accent: copper / saffron glow
Text: ivory
Cards: dark green-black
Lines: soft golden brown
```

### Shape Rules

Use:

- Soft rounded rectangles
- Clean cards
- Thin sacred lines
- Light mandala geometry as background only
- Clear journey lines
- Breadcrumb paths
- Minimal symbols

Avoid:

- Heavy fantasy/game style
- Random half-curved blocks
- Too much gold
- Too much glow
- Too many deity images
- Tiny unreadable text
- Decorative borders everywhere

### Signature UI Element

Always include a **Where It Fits** path on topic pages.

Example:

```text
Supreme Reality → Creation → Cosmic Time → Yugas → Kali Yuga
```

---

## Folder Structure

Recommended project structure:

```text
sanatana-knowledge-platform/
  app/
    layout.tsx
    page.tsx
    atlas/
      page.tsx
      [slug]/page.tsx
    library/
      page.tsx
      [slug]/page.tsx
    stories/
      page.tsx
      [slug]/page.tsx
    wisdom/
      page.tsx
      [slug]/page.tsx
    practice/
      page.tsx
      [slug]/page.tsx
    donate/page.tsx
    search/page.tsx
    glossary/page.tsx
    api/
      feedback/route.ts
  components/
    layout/
    atlas/
    content/
    feedback/
    seo/
    ui/
  content/
    atlas/
    library/
    stories/
    wisdom/
    practice/
    glossary/
    site/
  lib/
    content/
    seo/
    validation/
    security/
  public/
    images/
      atlas/
      topics/
      donation/
  styles/
  workers-or-functions/
  README.md
```

---

## Content File Example

Use MDX with frontmatter:

```mdx
---
title: "Kalpa"
slug: "kalpa"
category: "atlas"
oneLineMeaning: "One day of Brahma, equal to 4.32 billion human years."
whereItFits:
  - Brahma's Life
  - Kalpa
  - Manvantara
  - Maha Yuga
  - Yugas
sourceStatus: "source-aware"
explanationType: "Simplified modern explanation"
traditionNote: "Follows common Puranic cosmology. Interpretations may vary."
lastUpdated: "2026-06-12"
contentVersion: "ATLAS-KALPA-v1.0"
relatedTopics:
  - manvantara
  - maha-yuga
  - yugas
  - pralaya
---

## Quick Meaning

A Kalpa is one daytime of Brahma, during which creation remains active.

## Where It Fits

Brahma's Life → Kalpa → Manvantara → Maha Yuga → Yugas

## Simple Explanation

Sanatana texts often describe cosmic time as cyclical. A Kalpa is a vast cycle in this framework.

## Source Notes

This explanation is based on common Puranic cosmology and is simplified for learning.
```

---

## SEO Requirements

Every public page must include:

- SEO title
- Meta description
- Canonical URL
- Open Graph image
- Breadcrumb structured data where useful
- Article structured data for topic pages
- FAQ structured data only when the page contains real FAQ content
- Clean slug
- Internal links
- Image alt text
- Last updated date

### URL Style

Use readable URLs:

```text
/atlas/kalpa
/atlas/kali-yuga
/library/upanishads
/stories/mahabharata
/wisdom/dharma
/practice/japa
```

### Sitemap and Robots

Generate:

```text
/sitemap.xml
/robots.txt
```

Robots should point to sitemap:

```text
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## Performance Requirements

Target:

```text
Lighthouse Performance: 90+
Lighthouse SEO: 95+
Lighthouse Accessibility: 90+
LCP: under 2.5 seconds
CLS: under 0.1
Mobile-first performance
```

Rules:

- Static generate as many pages as possible.
- Minimize JavaScript.
- Avoid heavy animation.
- Use optimized WebP/AVIF images.
- Lazy-load below-fold images.
- Preload only the main hero image.
- Always set image width and height.
- Avoid large client-side bundles.
- Avoid unnecessary third-party scripts.

---

## Security Requirements

### Donation Page

Donation details must be static and must never depend on URL parameters.

Do:

- Store UPI ID in static config.
- Store QR image as a static file.
- Show receiver name.
- Show UPI ID as text below QR.
- Show last verified date and donation config version.
- Warn users not to share OTP/PIN/password.

Do not:

- Read UPI, receiver, QR, or amount from URL query parameters.
- Load QR from random external services.
- Allow public users to edit donation data.
- Create public upload flow for QR.

Example config:

```ts
export const DONATION_DETAILS = Object.freeze({
  receiverName: "Official Receiver Name",
  upiId: "officialupi@bank",
  qrImage: "/images/donation/upi-qr-v1.webp",
  lastVerified: "2026-06-12",
  version: "DONATE-v1"
});
```

### Security Headers

Add `_headers` for Cloudflare Pages:

```text
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  Content-Security-Policy: default-src 'self'; img-src 'self' data: https://assets.yourdomain.com; script-src 'self'; style-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;
```

Adjust CSP only when adding trusted analytics, Turnstile, or required Cloudflare services.

---

## Feedback System

Feedback is important, but it must never update public content automatically.

### Feedback Flow

```text
User submits feedback
↓
Turnstile verifies human
↓
Pages Function validates input
↓
Store private record in Cloudflare D1
↓
Owner reviews feedback
↓
Owner updates MDX manually
↓
GitHub deploys new content
```

### Feedback UI

On each topic page:

```text
Was this page clear?
[Yes] [Somewhat] [Not clear]

What should improve?
[Content is confusing]
[Source missing]
[Visual not clear]
[Wrong information]
[Other]

Optional message
[Submit feedback]
```

### Store Only

```text
page_slug
rating
issue_type
message
created_at
user_agent_hash
status
```

Do not publicly show feedback.
Do not store unnecessary personal information.

---

## Image Storage Plan

### MVP

Store optimized final images in:

```text
/public/images
```

### Later

Move generated image assets to Cloudflare R2 with custom asset domain.

Recommended asset structure:

```text
/images/atlas/
/images/topics/
/images/library/
/images/stories/
/images/donation/
```

For every image, maintain:

```text
title
slug
category
theme
usage location
alt text
created date
status
```

Use optimized images only in production pages.

---

## Development Milestones

### Milestone 1: Project Setup

- Create Next.js project with TypeScript.
- Configure Tailwind.
- Configure theme system.
- Add base layout.
- Add Cloudflare Pages compatibility.
- Add security headers.

### Milestone 2: Content Engine

- Add MDX/content loader.
- Add content schema validation.
- Add sample topics.
- Add related topic support.
- Add glossary support.

### Milestone 3: Core Screens

- Home
- Atlas overview
- Topic detail
- Library overview
- Wisdom overview
- Practice overview
- Search page
- Donation page

### Milestone 4: Feedback System

- Add Turnstile.
- Add feedback form.
- Add Pages Function.
- Add D1 table.
- Add validation and rate limiting.

### Milestone 5: SEO and Performance

- Add metadata generation.
- Add sitemap.
- Add robots.
- Add structured data.
- Optimize images.
- Run Lighthouse.

### Milestone 6: Launch Checklist

- Test mobile layout.
- Test desktop layout.
- Test dark/light theme.
- Verify donation details.
- Verify feedback submit.
- Verify sitemap.
- Verify security headers.
- Connect Google Search Console.
- Connect analytics/Clarity if needed.

---

## QA Checklist

Before every release:

```text
[ ] Build passes
[ ] TypeScript passes
[ ] No console errors
[ ] Sitemap generated
[ ] Robots generated
[ ] Donation page ignores URL parameters
[ ] Feedback form protected by Turnstile
[ ] No public content edit APIs
[ ] Security headers deployed
[ ] Lighthouse mobile checked
[ ] Main pages load fast
[ ] Images have alt text
[ ] Topic pages show sources
[ ] Topic pages show where-it-fits path
[ ] Internal links work
[ ] Dark/light theme works
[ ] Content wording is simple and respectful
```

---

## Direct Instruction for Codex

Build the MVP as a Cloudflare-first static knowledge platform using Next.js, TypeScript, Tailwind, and MDX/JSON content files. Do not build AI, login, public comments, or admin panel. Public knowledge content must be static and Git-controlled. Use Cloudflare Pages for hosting, Cloudflare Pages Functions/Workers only for private feedback submission, Cloudflare D1 only for feedback storage, Cloudflare Turnstile for bot protection, and Cloudflare R2 later for images if needed.

The UI must follow the Sacred Atlas visual style: warm ivory/deep green/copper for light theme, deep navy/dark emerald/gold for dark theme, classic headings, clean readable body text, structured cards, and meaningful journey paths. Every topic page must show quick meaning, where it fits, visual explanation, source notes, related topics, present-life meaning, and feedback option.

Prioritize SEO, static generation, mobile performance, accessibility, donation safety, and security headers from day one.

