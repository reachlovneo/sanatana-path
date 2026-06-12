
# Sanatana Knowledge Platform - Codex-Ready Development Master Guide

Version: v1.0  
Date: 12 June 2026  
Primary goal: Build a fast, secure, SEO-first, Cloudflare-hosted Sanatana knowledge platform with static, source-backed content and private feedback collection.

---

## 0. Executive Summary for Codex

Build a modern Sanatana Dharma knowledge website that is simple on the surface and deep inside. The platform must help users understand topics in a clear order: Creation -> Lokas -> Cosmic Time -> Kalpa -> Manvantara -> Maha Yuga -> Yugas -> Stories -> Scriptures -> Wisdom -> Practice -> Present Life.

This is not a book archive, not a blog, not a social network, and not an AI chatbot. It is a structured, visual knowledge atlas. Main content is static and controlled through Git. Users can submit feedback, but feedback must never directly edit or publish content.

### Non-negotiable decisions

1. Use Cloudflare-only infrastructure for MVP.
2. Use static content files for all public knowledge pages.
3. Do not build an admin panel in MVP.
4. Do not build AI in MVP.
5. Do not allow public users to edit, upload, comment, or publish content.
6. Donation details must be static, hard-coded, and not controlled by URL parameters.
7. Feedback must be private and stored separately in Cloudflare D1 after Turnstile validation.
8. Every topic must show quick meaning, where it fits, source notes, related topics, and feedback option.
9. SEO and performance must be treated as core product requirements, not later tasks.
10. UI must follow the Sacred Atlas visual style: timeless, calm, ordered, source-backed, and soulful.

---

## 1. Product Vision

### Product statement

A calm sacred knowledge atlas where anyone can understand Sanatana Dharma from the highest cosmic level to daily life without getting lost.

### What users should feel

- I understand the big picture.
- I know where this topic fits.
- I can start simple and go deeper when ready.
- The platform is respectful, trustworthy, and source-aware.
- The content feels soulful but not confusing.

### Core UX philosophy

Overview first. Deep dive only when the user chooses.

Every screen should answer:

1. Where am I?
2. What does this mean in simple words?
3. Where does it fit in the bigger map?
4. Why does it matter today?
5. Where can I go next?
6. What are the sources or tradition notes?

---

## 2. MVP Scope

### Build in MVP

- Responsive website for desktop and mobile.
- Static generated pages using Next.js.
- Cloudflare Pages deployment.
- MDX/JSON-based content system.
- Light and dark themes.
- Home page.
- Atlas section.
- Library section.
- Stories section.
- Wisdom section.
- Practice section.
- Topic detail template.
- Scripture detail template.
- Glossary pages.
- Source drawer/section.
- Donation page with static QR and UPI details.
- Feedback form protected by Turnstile and stored in D1.
- Sitemap, robots.txt, metadata, Open Graph, structured data.
- Security headers via Cloudflare Pages `_headers`.
- Basic client-side/local search or generated search index.

### Do not build in MVP

- AI guide/chatbot.
- Login/signup.
- Public comments.
- Public discussion forum.
- User uploads.
- CMS/admin panel.
- Dynamic content publishing from database.
- Payments integration.
- Notifications.
- Native mobile app.
- Complex gamification.
- Heavy animations or video backgrounds.

---

## 3. Final Technology Stack

### Frontend

- Next.js with App Router.
- TypeScript.
- Tailwind CSS.
- MDX for content pages.
- Framer Motion only for soft, minimal transitions.
- next-themes or equivalent for light/dark theme.
- Static export where possible.

### Cloudflare backend/services

- Cloudflare Pages: website hosting.
- Cloudflare Pages Functions or Workers: feedback API only.
- Cloudflare D1: private feedback database only.
- Cloudflare Turnstile: bot protection for feedback/contact forms.
- Cloudflare R2: image storage later; for MVP use `/public/images`.
- Cloudflare DNS, SSL, CDN, caching, security headers.

### Analytics and SEO tools

- Google Search Console.
- Google Analytics or privacy-friendly analytics.
- Microsoft Clarity for UX feedback if acceptable.
- Lighthouse/PageSpeed Insights for Core Web Vitals.

---

## 4. High-Level Architecture

### MVP architecture

```text
User
  -> Cloudflare Pages
      -> Static Next.js site
          -> MDX/JSON content from Git
          -> Optimized images from /public/images
      -> Pages Function for feedback only
          -> Turnstile server-side validation
          -> Cloudflare D1 feedback table
```

### Content security principle

Public content must be generated from the repository. It must not be editable from the website. A user can submit feedback, but feedback is only a private suggestion.

### Later architecture

```text
User
  -> Cloudflare Pages
  -> R2 for assets
  -> D1 for feedback, maybe saved user preferences later
  -> Optional CMS/admin later, but only behind strong authentication and not in MVP
```

---

## 5. Recommended Repository Structure

```text
sanatana-platform/
  app/
    layout.tsx
    page.tsx
    globals.css
    sitemap.ts
    robots.ts
    not-found.tsx
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
    glossary/
      page.tsx
      [slug]/page.tsx
    donate/
      page.tsx
    sources/
      page.tsx
  components/
    layout/
      AppShell.tsx
      DesktopSidebar.tsx
      MobileBottomNav.tsx
      TopBar.tsx
      ThemeToggle.tsx
    cards/
      JourneyCard.tsx
      TopicCard.tsx
      QuickFactCard.tsx
      SourceBadge.tsx
      ReflectionCard.tsx
      RelatedTopicCard.tsx
    topic/
      TopicHeader.tsx
      WhereItFits.tsx
      VisualOverview.tsx
      TopicTabs.tsx
      SourceDrawer.tsx
      FeedbackPanel.tsx
      RelatedTopics.tsx
    seo/
      StructuredData.tsx
    forms/
      FeedbackForm.tsx
      TurnstileWidget.tsx
  content/
    atlas/
    library/
    stories/
    wisdom/
    practice/
    glossary/
    site/
      navigation.json
      donation.ts
      home.json
  lib/
    content/
      getContent.ts
      contentTypes.ts
      searchIndex.ts
    seo/
      metadata.ts
      structuredData.ts
    security/
      validation.ts
    utils/
      slug.ts
      cn.ts
  functions/
    api/
      feedback.ts
  public/
    images/
      atlas/
      library/
      stories/
      wisdom/
      practice/
      donation/
    _headers
  wrangler.toml
  package.json
  tailwind.config.ts
  next.config.js
  README.md
```

---

## 6. Routing and Navigation

### Main routes

| Route | Purpose |
|---|---|
| `/` | Home and journey entry |
| `/atlas` | Cosmic Atlas overview |
| `/atlas/[slug]` | Atlas topic detail |
| `/library` | Scripture Library overview |
| `/library/[slug]` | Scripture/category detail |
| `/stories` | Story Timeline overview |
| `/stories/[slug]` | Story detail |
| `/wisdom` | Concepts/philosophy overview |
| `/wisdom/[slug]` | Wisdom topic detail |
| `/practice` | Practice/culture/daily life overview |
| `/practice/[slug]` | Practice topic detail |
| `/glossary` | Sanskrit glossary overview |
| `/glossary/[slug]` | Term detail |
| `/donate` | Static donation page |
| `/sources` | Methodology and source policy |

### Main mobile bottom navigation

Use exactly 5 items:

```text
Home | Atlas | Library | Wisdom | Practice
```

Do not add too many tabs. Stories can be accessible from Home and Library/Wisdom cards, or can be a top-level page linked inside Home. On desktop, Stories can appear in sidebar because there is more space.

### Desktop sidebar navigation

```text
Home
Atlas
Library
Stories
Wisdom
Practice
Glossary
Donate
```

Top actions:

```text
Search | Theme | Feedback | Donate
```

### Navigation principles

- User should never feel lost.
- Every topic page must show breadcrumb and Where It Fits path.
- Every page must have a clear next step.
- Mobile should be vertical and simple.
- Desktop can show side panels and related content.

---

## 7. Content Universe and Sections

### 7.1 Atlas

Purpose: explain cosmic structure, time, and where we are now.

Topics:

1. Supreme Reality
2. Creation
3. Panchabhutas
4. Lokas
5. Cosmic Time
6. Kalpa
7. Manvantara
8. Maha Yuga
9. Four Yugas
10. Satya Yuga
11. Treta Yuga
12. Dvapara Yuga
13. Kali Yuga
14. Pralaya
15. Brahma's Day and Night
16. Where We Are Now
17. Present Life in Kali Yuga

### 7.2 Library

Purpose: organize granthas and texts without overwhelming users.

Categories:

1. Vedas
2. Upanishads
3. Puranas
4. Itihasas
5. Bhagavad Gita
6. Sutras
7. Agamas and Tantras
8. Smritis and Dharma Texts
9. Stotras and Devotional Texts

### 7.3 Stories

Purpose: make stories understandable through timeline, characters, lessons, and present meaning.

Topics:

1. Dashavataras
2. Creation Stories
3. Devas and Asuras
4. Samudra Manthan
5. Prahlada and Narasimha
6. Vamana and Bali
7. Parashurama
8. Ramayana Timeline
9. Mahabharata Timeline
10. Krishna's Life
11. Kurukshetra War
12. Bhagavad Gita Moment
13. End of Dvapara Yuga
14. Beginning of Kali Yuga
15. Major Kings and Dynasties
16. Sages and Their Stories
17. Women of Wisdom
18. Character Relationship Maps
19. Moral Dilemmas and Lessons

### 7.4 Wisdom

Purpose: explain concepts, philosophy, and schools clearly.

Core concepts:

- Dharma, Karma, Moksha, Atman, Brahman, Paramatma, Bhagavan, Maya, Samsara, Rebirth, Gunas, Purusharthas, Rta, Yajna, Tapas, Seva, Ahimsa, Satya, Vairagya, Shraddha, Bhakti, Jnana, Dhyana, Yoga, Sadhana, Guru Tattva, Mantra, Prana, Kundalini, Chakras.

Darshanas:

- Nyaya, Vaisheshika, Samkhya, Yoga, Purva Mimamsa, Vedanta.

Vedanta schools:

- Advaita, Vishishtadvaita, Dvaita, Dvaitadvaita, Shuddhadvaita, Achintya Bheda Abheda.

### 7.5 Practice

Purpose: connect wisdom to daily life.

Topics:

- Daily Sadhana, Japa, Mantra, Meditation, Puja, Aarti, Prasad, Sankalpa, Sandhya Vandana, Surya Namaskar, Home Altar, Seva, Journaling, Temple Meaning, Murti, Prana Pratishta, Archana, Abhishekam, Darshan, Pradakshina, Deepam, Naivedyam, Temple Architecture, Garbhagriha, Gopuram, Vastu Basics.

Festivals:

- Makar Sankranti, Maha Shivaratri, Holi, Ugadi/Gudi Padwa, Rama Navami, Hanuman Jayanti, Akshaya Tritiya, Guru Purnima, Krishna Janmashtami, Ganesh Chaturthi, Navaratri, Dussehra, Diwali, Karthika Masam, Ekadashi, Amavasya, Purnima, Pitru Paksha, Kumbh Mela.

Life guidance:

- Student life, work and duty, family life, relationships, discipline, food and sattvic living, mind control, anger, desire, fear, grief, purpose, detachment, devotion, decision-making through dharma.

---

## 8. Reusable Topic Page Format

Every topic must follow this structure.

### Required sections

1. Topic title.
2. One-line meaning.
3. Badges: Source-backed, Beginner-friendly, category/tradition note.
4. Where It Fits path.
5. Quick facts.
6. Simple explanation.
7. Visual overview.
8. Key points.
9. Understand / Explore / Go Deeper tabs.
10. Present-life meaning.
11. Sources and notes.
12. Related topics.
13. Feedback panel.

### Example page structure

```text
Kali Yuga
The fourth and current age in the yuga cycle.

Where it fits:
Brahma's Life -> Shveta-Varaha Kalpa -> Vaivasvata Manvantara -> 28th Maha Yuga -> Kali Yuga -> Present Life

Quick facts:
- Duration: 432,000 years
- Position: 4th yuga
- Dharma level: 1/4
- Main theme: decline of dharma and rise of confusion

Simple explanation:
Kali Yuga is described as an age where confusion, material desire, and conflict increase. Many traditions also say this age gives simple spiritual paths such as nama japa, devotion, satsanga, and sincere living.
```

### Depth levels

Use tabs or segmented control:

```text
Simple | Visual | Sources | Present Life
```

Avoid showing all depth at once.

---

## 9. Content Data Model

Use MDX frontmatter or JSON metadata with strongly typed TypeScript validation.

### Topic metadata example

```yaml
title: "Kalpa"
slug: "kalpa"
section: "atlas"
oneLineMeaning: "One day of Brahma, equal to 4.32 billion human years."
summary: "A Kalpa is a huge cosmic day in which creation remains active."
whereItFits:
  - "Brahma's Life"
  - "Kalpa"
  - "Manvantara"
  - "Maha Yuga"
  - "Yugas"
quickFacts:
  - label: "Duration"
    value: "4.32 billion human years"
  - label: "Contains"
    value: "14 Manvantaras / 1000 Maha Yugas"
badges:
  - "Source-backed"
  - "Purāṇic cosmology"
sources:
  - title: "Vishnu Purana"
    type: "Primary / traditional"
    note: "Used for Purāṇic time-cycle context."
relatedTopics:
  - "manvantara"
  - "maha-yuga"
  - "yugas"
  - "pralaya"
lastUpdated: "2026-06-12"
contentVersion: "ATLAS-KALPA-v1.0"
reviewStatus: "draft"
```

### TypeScript interface

```ts
export interface TopicMeta {
  title: string;
  slug: string;
  section: 'atlas' | 'library' | 'stories' | 'wisdom' | 'practice' | 'glossary';
  oneLineMeaning: string;
  summary: string;
  whereItFits?: string[];
  quickFacts?: { label: string; value: string }[];
  badges?: string[];
  sources: SourceRef[];
  relatedTopics?: string[];
  lastUpdated: string;
  contentVersion: string;
  reviewStatus: 'draft' | 'reviewed' | 'published';
}

export interface SourceRef {
  title: string;
  type: 'primary' | 'commentary' | 'public-domain-translation' | 'modern-reference' | 'team-explanation';
  note?: string;
  url?: string;
}
```

---

## 10. Source and Trust System

### Trust principle

Simple for beginners, transparent for serious learners.

Every page must clearly separate:

1. Scripture/source reference.
2. Traditional/common explanation.
3. Our simplified modern explanation.
4. Different views note where needed.

### Source drawer format

```text
Sources for this topic

Primary sources:
- Vishnu Purana
- Bhagavata Purana

Explanation type:
- Simplified modern explanation
- Not a direct translation

Tradition note:
- This follows common Purāṇic cosmology.
- Interpretations may vary across traditions.
```

### Content disclaimer

Use this on the Sources/Methodology page and in smaller form inside source drawer:

```text
Our goal is to explain Sanatana Dharma in a simple, visual, and source-aware way. We do not claim one single interpretation as final. Where traditions differ, we mention the difference respectfully. The explanations are simplified for learning and are not direct translations unless explicitly marked.
```

### Copyright rule

Do not copy modern copyrighted translations or commentaries directly. Use public-domain references, your own summaries, and source attribution. Ancient texts are generally public domain, but modern translations, commentaries, formatting, and notes may be copyrighted.

---

## 11. Visual Style Guide

### Theme name

Sacred Atlas.

### Design feeling

Classic timeless + sacred futuristic.

The UI should feel like ancient wisdom presented through a modern knowledge system.

### Emotional direction

Calm -> Curiosity -> Respect -> Clarity -> Depth.

### Light theme palette

```text
Background: warm ivory / soft parchment
Cards: soft cream
Primary: deep forest green
Accent: copper / antique gold
Text: dark brown / charcoal
Lines: muted sand
```

### Dark theme palette

```text
Background: deep cosmic navy / dark emerald
Cards: green-black / navy-black
Primary: muted gold
Accent: copper / saffron glow
Text: ivory white
Lines: soft golden brown
```

### Shape language

Use:

- Rounded rectangles.
- Clean cards.
- Thin timeline lines.
- Pill badges.
- Breadcrumb ribbons.
- Very subtle mandala/circle backgrounds.

Avoid:

- Random half-curved blobs.
- Too many circular orbit cards.
- Heavy glow.
- Fantasy game look.
- Over-decorated borders.
- Tiny unreadable labels.

### Typography

Headings: classic serif feeling.
Suggested: Cormorant Garamond, Cinzel, Playfair Display, Libre Baskerville.

Body: clean modern sans-serif.
Suggested: Inter, Manrope, DM Sans, Satoshi.

Use one heading font and one body font. Do not mix many fonts.

### Icons and symbols

Prefer simple line icons and abstract sacred symbols:

- Lotus: purity/growth.
- Wheel/chakra: time/dharma/cycle.
- Deepam/lamp: knowledge.
- Tree: lineage/wisdom.
- River: continuity/tradition.
- Mountain: stability/tapas.
- Manuscript: source.
- Sun/moon: cosmic rhythm.
- Layered worlds: lokas.

Avoid excessive deity images in the MVP. Use deity artwork carefully and respectfully only when the content needs it.

---

## 12. UI Screens and Layout Requirements

### 12.1 Home screen

Purpose: calm entry and clear starting point.

Desktop layout:

- Top bar: logo, search, theme, donate.
- Hero: platform name, subtitle, Start Journey, Explore Atlas.
- Where Are We Now card.
- Main paths: Atlas, Library, Stories, Wisdom, Practice.
- Today's reflection card.
- Featured topic cards.

Mobile layout:

- Top: logo, search, theme.
- Hero compact.
- Where Are We Now vertical card.
- Main path cards stacked.
- Bottom nav.

### 12.2 Atlas screen

Purpose: big picture of existence and time.

Must show ordered steps:

1. Supreme Reality
2. Creation
3. Panchabhutas
4. Lokas
5. Cosmic Time
6. Kalpa
7. Manvantara
8. Maha Yuga
9. Four Yugas
10. Pralaya
11. Where We Are Now
12. Present Life

Desktop:

- Left: section navigation.
- Center: ordered journey cards.
- Right: selected topic preview with quick facts and sources.

Mobile:

- Stacked journey cards.
- Simple step numbers.
- Topic preview expands under selected card.

### 12.3 Topic detail screen

Purpose: reusable template for any topic.

Layout:

- Header with title, one-line meaning, badges.
- Where It Fits ribbon.
- Quick facts grid.
- Simple explanation.
- Visual overview.
- Tabs: Simple, Visual, Sources, Present Life.
- Related topics.
- Feedback panel.

### 12.4 Library screen

Purpose: organize scriptures by category, not random list.

Cards:

- Vedas
- Upanishads
- Puranas
- Itihasas
- Bhagavad Gita
- Sutras
- Agamas & Tantras
- Smritis
- Stotras

Each card must show:

- What it is.
- Best for.
- Start here.

### 12.5 Stories screen

Purpose: stories, timelines, characters, and lessons.

Must show:

- Story timeline.
- Avatar path.
- Ramayana.
- Mahabharata.
- Krishna life.
- Devas and Asuras.
- Women of Wisdom.
- Moral dilemmas.

Story detail format:

```text
Story -> Lesson -> Present Life
```

### 12.6 Wisdom screen

Purpose: philosophy and concepts.

Group cards into:

- Life concepts: Dharma, Karma, Moksha, Purusharthas.
- Reality concepts: Atman, Brahman, Maya, Samsara.
- Mind concepts: Gunas, Yoga, Sadhana, Vairagya.
- Traditions: Darshanas, Vedanta, Sampradayas.

### 12.7 Practice screen

Purpose: usable daily guidance.

Sections:

- Daily Sadhana.
- Mantra & Japa.
- Puja Basics.
- Temple Understanding.
- Festivals.
- Sattvic Living.
- Life Guidance.
- Reflection Journal placeholder.

### 12.8 Donation screen

Purpose: safe and clear donation only.

Must include:

- Static QR image.
- UPI ID as text.
- Receiver name.
- Last verified date.
- Donation config version.
- Warning: We never ask for OTP, password, card PIN, or remote access.
- Note: donate only through official domain.

Must not:

- Read donation amount, UPI ID, QR URL, receiver name from URL parameters.
- Load QR from random third-party domains.
- Allow anyone to edit donation details from UI.

---

## 13. Donation Safety Implementation

Use a static config file.

```ts
export const DONATION_DETAILS = Object.freeze({
  receiverName: "Your Official Name",
  upiId: "yourupi@bank",
  qrImage: "/images/donation/upi-qr-v1.webp",
  lastVerified: "2026-06-12",
  version: "DONATE-v1"
});
```

Hard rule:

```text
Donation page must ignore all query parameters.
```

Do not implement code that allows:

```text
/donate?upi=fake@upi
/donate?qr=https://fake-site/qr.png
/donate?name=fake
```

The page must always render the static config.

---

## 14. Feedback System

### Purpose

Collect feedback privately to improve clarity, sources, visuals, and content accuracy. Feedback must never publish publicly or edit the content automatically.

### UI placement

At the bottom of every topic page:

```text
Was this page clear?
[Yes, clear] [Somewhat] [Not clear]

What should improve?
[Content confusing] [Source missing] [Visual not clear] [Wrong information] [Other]

Optional message
[Submit feedback]
```

### D1 table schema

```sql
CREATE TABLE feedback (
  id TEXT PRIMARY KEY,
  page_slug TEXT NOT NULL,
  page_section TEXT NOT NULL,
  rating TEXT NOT NULL,
  issue_type TEXT,
  message TEXT,
  user_agent_hash TEXT,
  ip_hash TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TEXT NOT NULL
);
```

### Feedback API rules

- Accept only POST.
- Validate Turnstile token server-side.
- Validate all inputs.
- Limit message length to 1000 characters.
- Strip HTML.
- Do not store raw IP unless legally/privacy reviewed. Use hash if needed.
- Store status as `new`.
- Return generic success message.
- Never expose feedback list publicly.

### Feedback function pseudo-flow

```text
POST /api/feedback
  -> parse body
  -> verify Turnstile token using server-side Siteverify
  -> validate rating/page_slug/message
  -> sanitize message
  -> insert into D1
  -> return { ok: true }
```

### Turnstile rule

Client-side widget alone is not enough. Always validate token in Pages Function/Worker before storing feedback.

---

## 15. SEO Requirements

### Core SEO principles

- Every important topic must have its own crawlable page.
- Use human search language in titles, headings, link text, and alt text.
- Content must be helpful, reliable, people-first, source-aware, and not created only to manipulate rankings.
- Use internal links between related topics.
- Use clean URLs.
- Add sitemap and robots.
- Add structured data.
- Optimize for mobile and Core Web Vitals.

### Page metadata

Every page must define:

- Title.
- Description.
- Canonical URL.
- Open Graph title, description, image.
- Twitter card image.
- Last updated date.
- Structured data.

Example title:

```text
What is Kalpa? Meaning, Duration, and Place in Hindu Cosmology
```

Example description:

```text
Understand Kalpa in simple words: one day of Brahma, its duration, relation to Manvantara, Maha Yuga, and Kali Yuga.
```

### Structured data types

Use JSON-LD where appropriate:

- Organization.
- WebSite.
- Article.
- BreadcrumbList.
- FAQPage only when the page truly has FAQs.
- ImageObject for important visuals.

Do not spam FAQ schema on every page without real FAQ content.

### Topic cluster strategy

Start with fewer but stronger pages. Suggested first cluster:

- Cosmic Time
- Kalpa
- Manvantara
- Maha Yuga
- Four Yugas
- Satya Yuga
- Treta Yuga
- Dvapara Yuga
- Kali Yuga
- Lokas
- Pralaya
- Dharma
- Karma
- Moksha
- Atman
- Brahman
- Bhagavad Gita
- Upanishads
- Puranas
- Ramayana
- Mahabharata

Internal linking example:

```text
Cosmic Time -> Kalpa -> Manvantara -> Maha Yuga -> Yugas -> Kali Yuga -> Present Life
```

---

## 16. Performance Requirements

### Performance goal

The site must feel instant on mobile. Use static generation and Cloudflare CDN. Keep JavaScript light.

### Core Web Vitals target

- LCP: good range, target below 2.5 seconds.
- CLS: below 0.1.
- INP: good range.
- Lighthouse: 90+ for Performance, Accessibility, Best Practices, SEO.

### Performance rules

Do:

- Generate pages statically.
- Use small reusable components.
- Optimize images to WebP/AVIF.
- Set image width/height to avoid layout shift.
- Lazy-load below-fold images.
- Preload only critical hero image.
- Avoid large animation libraries except minimal Framer Motion usage.
- Avoid heavy third-party widgets.
- Use CSS gradients instead of large decorative images where possible.
- Use local fonts or optimized font loading.

Do not:

- Use large video backgrounds.
- Load huge PNGs on mobile.
- Animate every card.
- Add random third-party scripts.
- Create complex client-side rendering for static content.

---

## 17. Security Requirements

### Security model

Because this is a one-way content platform, the best security is simplicity.

- No admin panel.
- No content editing APIs.
- No public uploads.
- No comments.
- No dynamic donation details.
- Feedback API only.

### Account security

- Enable 2FA on GitHub.
- Enable 2FA on Cloudflare.
- Protect main branch.
- Use pull requests for production changes.
- Keep Cloudflare API tokens minimal and scoped.
- Do not expose secrets in frontend.

### `_headers` example

Add this file to public output/static root as required by Cloudflare Pages:

```text
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  Content-Security-Policy: default-src 'self'; img-src 'self' data: https://assets.yourdomain.com; script-src 'self' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;
```

Adjust CSP if analytics, fonts, or R2 custom domain are used. Keep it strict.

### HSTS

Add HSTS only after confirming HTTPS works correctly on the final domain and subdomains.

---

## 18. Image and Asset Management

### MVP image storage

Use:

```text
/public/images
```

Organize:

```text
/public/images/atlas
/public/images/library
/public/images/stories
/public/images/wisdom
/public/images/practice
/public/images/donation
```

### Later image storage

Use Cloudflare R2 with custom domain:

```text
assets.yourdomain.com
```

### Image variants

For every generated visual, keep:

```text
original/ high-quality source
optimized/ webp or avif for page usage
thumbnail/ small preview
```

In repo, keep only web-optimized images unless originals are small and important.

### Image metadata

Maintain metadata per image:

```yaml
title: "Kalpa timeline visual"
slug: "kalpa-timeline"
category: "atlas"
theme: "dark"
usage: "topic hero"
alt: "Visual timeline showing Kalpa, Manvantara, Maha Yuga, and Yugas"
createdAt: "2026-06-12"
status: "final"
```

### Visual psychology rule

Every generated image must maintain:

- Ordered journey.
- Calm spacing.
- Sacred Atlas color language.
- Meaningful symbols.
- No random decoration.
- Clear text hierarchy.
- Source-backed/trust feeling.
- Timeless, not trendy.

---

## 19. Accessibility Requirements

- Use semantic HTML.
- Use one H1 per page.
- Use correct heading order.
- Provide alt text for all meaningful images.
- Decorative images should have empty alt.
- Ensure color contrast is readable in light and dark themes.
- All controls must be keyboard accessible.
- Focus states must be visible.
- Avoid text embedded only inside images.
- Use readable font sizes: minimum 16px body text.
- Do not rely only on color to communicate meaning.

---

## 20. Search Implementation

### MVP search

Use a generated local search index at build time.

Index fields:

- title
- slug
- section
- oneLineMeaning
- summary
- keywords
- glossary terms

Search results should group by type:

```text
Topic
Scripture
Story
Glossary
Practice
```

Example result for Kali Yuga:

```text
Kali Yuga - Topic / Atlas
Kali Yuga in Bhagavata Purana - Source / Library
What to practice in Kali Yuga - Practice
Kali Yuga meaning - Glossary
```

No search analytics storage in MVP unless privacy reviewed.

---

## 21. Development Workflow

### Branching

- `main`: production.
- `dev`: staging.
- feature branches: `feature/atlas-pages`, `feature/feedback-api`, etc.

### Deployment

```text
Push to GitHub
  -> Cloudflare Pages build
  -> Preview deployment for branches/PRs
  -> Production deployment from main
```

### Build commands

Use appropriate commands based on chosen Next.js static export setup.

Typical package scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "format": "prettier --write ."
  }
}
```

If using static export, configure:

```js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
```

Confirm Cloudflare Pages build/output settings based on final Next.js version and project type.

---

## 22. Cloudflare Configuration

### Pages

- Connect GitHub repository.
- Build command: `npm run build`.
- Output directory: depends on static export, usually `out`.
- Add environment variables only for non-public secrets needed by feedback function.

### D1

Create database:

```text
sanatana_feedback_prod
sanatana_feedback_preview
```

Bind D1 to Pages Functions separately for preview and production.

### Turnstile

- Create Turnstile site key and secret key.
- Public site key may be exposed to frontend.
- Secret key must only be available to Function/Worker.
- Verify every feedback submission server-side.

### R2 later

- Create bucket: `sanatana-assets-prod`.
- Use custom domain: `assets.yourdomain.com`.
- Public read only.
- No public write.
- Upload through trusted process only.

---

## 23. Quality Assurance Checklist

### UI checklist

- Desktop layout works.
- Mobile layout works.
- Bottom nav usable on mobile.
- Sidebar usable on desktop.
- Dark and light themes readable.
- No crowded cards.
- No tiny text.
- Where It Fits path visible on topic pages.
- Source notes visible but not distracting.
- Feedback form is clear.

### Content checklist

- Quick meaning present.
- Where It Fits present.
- Sources present.
- Different views note added where needed.
- Related topics present.
- Present-life meaning present.
- No copied copyrighted commentary.
- No unsupported claims.
- Last updated and version present.

### SEO checklist

- Unique title.
- Unique meta description.
- Canonical URL.
- H1 present.
- Sitemap includes page.
- robots.txt references sitemap.
- Breadcrumb structured data.
- Internal links.
- Image alt text.
- Page loads without JS-only content dependency.

### Security checklist

- No admin route in MVP.
- No public content mutation API.
- Donation page ignores query params.
- Donation QR is static.
- Turnstile server-side validation works.
- D1 feedback table not publicly readable.
- CSP headers are active.
- GitHub/Cloudflare 2FA enabled.
- Main branch protected.

### Performance checklist

- Lighthouse 90+.
- Images optimized.
- No layout shift.
- No large unused JS.
- No heavy third-party scripts.
- Mobile page opens fast.

---

## 24. Dos and Don'ts

### Do

- Keep the surface simple and deep content optional.
- Use source-backed explanations.
- Show where every topic fits.
- Write in simple language.
- Use visual hierarchy.
- Keep the donation page static and verifiable.
- Use feedback only for private review.
- Optimize for mobile first.
- Build SEO from day one.
- Keep animations subtle.

### Don't

- Do not make it look like a fantasy game.
- Do not overload home page with every topic.
- Do not create public comments.
- Do not add AI in MVP.
- Do not use database-editable content in MVP.
- Do not copy modern copyrighted translations or commentary.
- Do not hide source notes.
- Do not allow URL parameters to control donation details.
- Do not add third-party scripts without review.
- Do not use large unoptimized images.

---

## 25. Initial Development Milestones

### Milestone 1: Foundation

- Create Next.js + TypeScript + Tailwind project.
- Configure theme system.
- Configure Cloudflare Pages deployment.
- Add `_headers`, robots, sitemap.
- Create layout shell, desktop sidebar, mobile nav.

### Milestone 2: Content engine

- Define content schema.
- Add MDX support.
- Create content loader.
- Create topic detail template.
- Add 5 sample topics.

### Milestone 3: Core screens

- Home.
- Atlas overview.
- Library overview.
- Wisdom overview.
- Practice overview.
- Topic detail.

### Milestone 4: Trust and SEO

- Source drawer.
- Structured data.
- Metadata generation.
- Related topics.
- Glossary.

### Milestone 5: Feedback and donation

- Donation static page.
- Turnstile setup.
- D1 feedback schema.
- Feedback API.
- Feedback form on topic pages.

### Milestone 6: Polish and launch

- Add 20-30 high-quality topics.
- Optimize images.
- Lighthouse audit.
- Search Console setup.
- Content review.
- Production deploy.

---

## 26. First 30 Content Pages

Build these first:

1. Supreme Reality
2. Creation
3. Panchabhutas
4. Lokas
5. Cosmic Time
6. Kalpa
7. Manvantara
8. Maha Yuga
9. Four Yugas
10. Satya Yuga
11. Treta Yuga
12. Dvapara Yuga
13. Kali Yuga
14. Pralaya
15. Where We Are Now
16. Avatars
17. Ramayana
18. Mahabharata
19. Bhagavad Gita
20. Vedas
21. Upanishads
22. Puranas
23. Dharma
24. Karma
25. Moksha
26. Atman
27. Brahman
28. Maya
29. Japa
30. Puja

---

## 27. Codex Build Instruction

When using Codex or any coding assistant, provide this instruction:

```text
Build the Sanatana Knowledge Platform exactly according to the Codex Development Master Guide.

Prioritize: static SEO pages, Cloudflare Pages deployment, MDX content, mobile-first layout, Sacred Atlas visual style, source-backed topic template, static donation page, and private Turnstile-protected feedback stored in Cloudflare D1.

Do not add AI, login, public comments, admin CMS, dynamic donation details, user uploads, or database-controlled public content in MVP.

Use simple, secure, maintainable code. Keep content controlled by Git. Every topic page must include quick meaning, where it fits, quick facts, source notes, related topics, present-life meaning, and feedback.
```

---

## 28. References and Official Documentation

Use these official references during development:

- Cloudflare Pages Functions and bindings: https://developers.cloudflare.com/pages/functions/bindings/
- Cloudflare Pages custom headers: https://developers.cloudflare.com/pages/configuration/headers/
- Cloudflare Turnstile server-side validation: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- Cloudflare Pages static Next.js guide: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- Next.js static export documentation: https://nextjs.org/docs/pages/guides/static-exports
- Google Search helpful content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Google structured data introduction: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Core Web Vitals: https://web.dev/articles/vitals

---

## 29. Final Product Mantra

Timeless, calm, ordered, source-backed, soulful, and deeply explorable.

Ancient wisdom should look easy to enter, but infinite to explore.
