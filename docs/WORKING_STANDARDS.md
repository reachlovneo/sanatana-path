# Working Standards

Last updated: 2026-06-27
Status: Active project standard

This document defines how Sanatana Path should be built from this point forward.
It keeps product quality, performance, SEO, accessibility, content discipline,
and code structure in sync as the site grows.

## North Star

Sanatana Path should feel like a premium, calm, source-aware knowledge atlas:
beautiful enough to invite curiosity, clear enough for beginners, and structured
enough to grow into a serious library without becoming messy or slow.

Every change should serve this order:

```text
Content clarity -> navigation connection -> visual quality -> performance -> SEO/accessibility
```

## Experience Goals

- Users should understand where they are, what they are reading, and where to go
  next without confusion.
- Pages should feel smooth and premium, but never heavy or distracting.
- The site should work well on mobile, desktop, keyboard navigation, and reduced
  motion settings.
- Public knowledge should remain static, reviewed, source-aware, and versioned.
- The Library should grow category by category, with each completed topic linked
  to a full readable page.

## Performance Standards

Target scores and Web Vitals:

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

- Prefer static Astro pages and server-rendered HTML.
- Keep client JavaScript small, local, and purposeful.
- Do not add heavy animation or UI libraries without review.
- Optimize images before using them in hero sections or cards.
- Use lazy loading for below-fold images.
- Give important media stable dimensions to prevent layout shift.
- Avoid excessive `backdrop-filter`, large shadows, and many simultaneous glow
  layers on one screen.
- Test pages on mobile-sized viewports before considering a design complete.

## Motion Standards

Approved motion:

- Short fade and translate entry reveals.
- Subtle hover/focus transitions.
- Small orbit or glow effects only when they support the idea visually.
- One-time staggered card entrance for premium feel.

Do not:

- Animate layout properties such as `width`, `height`, `top`, `left`, or margin.
- Run many infinite decorative animations at once.
- Hide required content behind JavaScript-only animation.
- Let animation delay reading or clicking.
- Ignore `prefers-reduced-motion`.

Motion should mainly use:

```text
transform
opacity
filter, only lightly
```

Typical duration:

```text
160ms - 420ms
```

## SEO Standards

Every important page needs:

- One clear H1.
- Unique title and description.
- Canonical URL from `BaseLayout`.
- Meaningful internal links.
- Semantic heading order.
- Descriptive text around important visuals.
- Article or Breadcrumb JSON-LD where accurate.
- No thin pages created only for keywords.

Topic pages should answer:

```text
What is this?
Where does it fit?
Why does it matter?
What are the sources?
Where should I go next?
```

## Accessibility Standards

- All navigation and controls must be keyboard usable.
- Focus states must be visible.
- Text must not be embedded only in images.
- Decorative images use empty alt text.
- Informational images need useful alt text or nearby explanatory text.
- Touch targets should be comfortable on mobile.
- Color must not be the only way to communicate meaning.
- Reduced-motion users should get a calmer version.

## Code Structure Standards

Use these ownership boundaries:

```text
src/config/       Site metadata, navigation, stable config
src/data/         Structured domain data and route relationships
src/content/      Reviewed knowledge content and MDX topics
src/components/   Reusable UI, layout, topic, atlas, and library pieces
src/layouts/      Shared page shell, SEO, header/footer/mobile nav
src/pages/        Routes and composition only
src/styles/       Global tokens and base styles
src/utils/        Small framework-independent helpers
public/           Static assets
```

Pages should compose. Components should carry reusable UI. Content files should
carry knowledge. Data files should carry relationships.

## Library Growth Rules

For each Library topic:

1. Add or confirm the category in `src/data/library.ts`.
2. If full content exists, add `href` to the complete guide.
3. If only a draft exists, link to a concept page.
4. If no page exists yet, keep it searchable but do not pretend it is complete.
5. Add related topic links after the page exists.
6. Validate with `npm run check`.

Preferred future topic object shape:

```ts
{
  title: "Cosmic Time",
  href: "/atlas/cosmic-time",
  status: "live",
  image: "/images/...",
  summary: "...",
}
```

## Content Standards

Cosmic Time and related cosmic chronology pages must also follow `COSMIC_CLOCK_WRITING_SYSTEM.md` for cinematic storytelling structure, curiosity flow, cliffhanger endings, and source-aware narration.

- Beginner clarity first; Sanskrit terminology second.
- Separate source references, traditional framing, and simplified explanation.
- Do not publish claims without supporting references.
- Do not copy modern copyrighted translations or commentary.
- Use review metadata on all atlas content.
- Keep `reviewStatus` honest.
- Only approved content should be treated as final.

## Do

- Use shared navigation from `src/config/site.ts`.
- Use `BaseLayout` for public pages.
- Reuse topic and layout components.
- Keep design consistent across Home, Atlas, Library, and topic pages.
- Check mobile and desktop layouts.
- Keep animations smooth and restrained.
- Run `npm run check` before finalizing meaningful changes.
- Keep commits focused and descriptive.

## Do Not

- Create duplicate headers, duplicate nav systems, or one-off global shells.
- Add unreviewed public content as if it is authoritative.
- Add large dependencies for small UI effects.
- Add heavy videos, huge PNGs, or many animated layers to core pages.
- Mix route logic, reusable data, and content in one large page forever.
- Change unrelated files during focused feature work.
- Commit secrets, generated logs, or environment files.

## Quality Gates Before Push

Minimum:

```text
[ ] npm run check passes
[ ] No unexpected route/header/navigation duplication
[ ] Important links point to real pages
[ ] Mobile layout is readable
[ ] No obvious layout shift or overlap
[ ] Images are appropriate and not unnecessarily huge
[ ] SEO title/description exists for new pages
[ ] Content review status is accurate
```

For major visual changes, also check:

```text
[ ] Desktop visual review
[ ] Mobile visual review
[ ] Reduced-motion behavior
[ ] Browser console clean
[ ] Lighthouse or equivalent audit when near release
```

## Current Build Direction

Near-term work should focus on:

1. Completing Library topics one by one.
2. Keeping each topic connected to Home, Atlas, Library, and related pages.
3. Gradually extracting large Home, Library, and Atlas sections into components.
4. Improving sitemap/indexing rules from content review status.
5. Maintaining premium visuals without adding performance risk.

