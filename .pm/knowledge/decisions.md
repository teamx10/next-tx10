# Decisions

> Architectural and design decisions.

## i18n: next-intl version and localePrefix strategy

**Date**: 2026-04-01 | **Task**: #7

- Installed next-intl **4.8.4** (plan assumed 3.x). v4 uses `defineRouting` + `createNavigation` centralised in `src/lib/i18n/routing.ts` and `navigation.ts`. API differs from v3 (requestLocale promise, hasLocale validator).
- `localePrefix: 'as-needed'` — default locale (`uk`) has no URL prefix (visitors at `/` get Ukrainian). Only `/en/` gets a prefix. Chosen for better UX: Ukrainian speakers never see `/uk/` in the URL.

## i18n: force-dynamic decision

**Date**: 2026-04-01 | **Task**: #7

- Removed `export const dynamic = 'force-dynamic'` from root `src/app/layout.tsx`.
- Root layout uses `getLocale()` (reads from request headers set by middleware) which makes it dynamically rendered — no explicit `force-dynamic` needed.
- `[locale]/layout.tsx` calls `setRequestLocale(locale)` enabling static rendering optimisation for individual locale pages.
- `generateStaticParams` in `[locale]/layout.tsx` returns `['uk', 'en']` so both locales can be statically generated at build time (if no other dynamic dependencies exist in a page).

## i18n: middleware.ts deprecation in Next.js 16

**Date**: 2026-04-01 | **Task**: #7

- Next.js 16.1.6 shows warning: "The 'middleware' file convention is deprecated. Please use 'proxy' instead."
- Kept `src/middleware.ts` because next-intl's `createMiddleware` export is designed for this file convention. Renaming to `proxy.ts` requires verifying next-intl v4 supports the new convention.
- Decision: leave as `middleware.ts` for now; track as follow-up when next-intl officially documents proxy support.

## SEO: Centralized dictionary namespace for metadata

**Date**: 2026-04-02 | **Task**: #24

- All SEO strings (title, description, keywords) live in `src/dictionaries/{uk,en}.json` under a top-level `"seo"` key with 14 sub-objects (one per page/route).
- Pages use `getTranslations({ namespace: 'seo' })` and pass values to `generateSEOMetadata()` from `utils/seo.ts`.
- Dynamic routes use `as never` cast for computed translation keys (`services_${slug}.title`). This is safe because all slugs are statically known from constants, but new slugs MUST have matching dictionary entries.
- Security headers (5) added to `next.config.ts` globally; CSP deferred to a follow-up due to Calendly iframe and MUI emotion inline styles.
