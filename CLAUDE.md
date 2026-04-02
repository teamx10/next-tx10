# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 application for TeamX10, an AI consulting agency for Ukrainian and international companies. Uses React 19, TypeScript, Material-UI v7, next-intl for i18n (Ukrainian/English), and Calendly for bookings.

## Development Commands

```bash
npm run dev       # Dev server on http://localhost:3333
npm run build     # Production build
npm start         # Production server
npm run lint      # ESLint 9 flat config with Prettier
```

No test framework is currently configured.

## Site Status

The site is live. Maintenance mode has been removed. `src/middleware.ts` handles locale routing via next-intl with `localePrefix: 'as-needed'` — Ukrainian is served at `/` (no prefix), English at `/en/*`.

## Architecture

### Directory Layout

```
src/
├── app/              # Next.js App Router
│   ├── [locale]/     # All public pages (uk and en locales)
│   │   ├── page.tsx         # Landing
│   │   ├── services/        # Services list + [slug] detail
│   │   ├── cases/           # Cases list + [slug] detail
│   │   ├── about/           # About page
│   │   ├── contacts/        # Contacts page
│   │   └── (legal)/         # privacy, terms
│   ├── layout.tsx    # Root layout (locale detection)
│   ├── sitemap.ts    # Bilingual sitemap (uk + en for every page)
│   └── robots.ts     # robots.txt (only /api/ disallowed)
├── components/       # React components (layout/, pages/, sections/, svg/, ui/)
├── constants/        # Static data (routes, services, case-studies, navigation)
├── contexts/         # React contexts (ThemeContext for dark/light mode)
├── dictionaries/     # i18n message files (en.json, uk.json)
├── hooks/            # Custom hooks (useCalendly, useTheme, useIntersection)
├── lib/              # Service configs (mui/, i18n/)
├── types/            # TypeScript interfaces (Service, CaseStudy, NavItem…)
└── utils/            # Helpers (seo.ts — locale-aware metadata + hreflang)
```

### Route Groups

All routes live under `[locale]` (uk is the default locale, en uses `/en/` prefix):

- `/` or `/uk/` — Landing page (HeroSection, PhasesOverview, CasesPreview, CTASection)
- `/services` — Services list with stepper
- `/services/[slug]` — Service detail (5 services: ai-audit, ai-basics, orchestration, automation, night-shift)
- `/cases` — Case studies list
- `/cases/[slug]` — Case study detail (4 cases: ai-development, ai-sdlc, enterprise-ai, ai-interviews)
- `/about` — About TeamX10
- `/contacts` — Contact form / Calendly embed
- `/(legal)/privacy`, `/(legal)/terms` — Legal pages

### Key Patterns

**i18n**: next-intl v4. Default locale: `uk` (no prefix). English uses `/en/` prefix. Translations in `src/dictionaries/en.json` and `src/dictionaries/uk.json`. Use `useTranslations('namespace')` in client components, `getTranslations('namespace')` in server components. `setRequestLocale(locale)` required in page/layout server components for static generation.

**Calendly Integration**: `CTAButton` component (`components/ui/CTAButton.tsx`) opens a Calendly popup if `NEXT_PUBLIC_CALENDLY_URL` is set, otherwise falls back to `/contacts`. Use `CTAButton` for all call-to-action buttons — never use plain MUI Button linking to /contacts.

**Glassmorphism UI**: `GlassCard` and `AnimatedGradientBackground` components from `ui/`. Used in hero, CTA sections, service/case cards.

**Theme System**: `ThemeContextProvider` in `contexts/ThemeContext.tsx` wraps the app with dark/light mode state. `createAppTheme(mode)` in `lib/mui/theme.ts` generates the MUI theme. `getGradients(mode)` provides mode-aware gradient strings. The wrapper lives in `components/layout/ThemeProviderWrapper.tsx` which also renders Header/Footer.

**SEO**: `utils/seo.ts` exports:
- `generateMetadata({ locale, path, title, description, ... })` — returns Next.js Metadata with hreflang alternates (`x-default`, `uk`, `en`)
- `generateOrganizationStructuredData()` — returns schema.org Organization JSON-LD object

**Routes**: All routes centralized in `constants/routes.ts` as `ROUTES` const object. Always use these instead of hardcoded strings.

**Navigation**: `NAV_ITEMS` in `constants/navigation.ts` defines all 5 nav items. Header imports these and renders with `useTranslations('nav')`.

**Rendering**: Root layout uses `getLocale()` from next-intl — app is dynamically rendered. `[locale]/layout.tsx` uses `generateStaticParams()` for static locale params and `setRequestLocale(locale)` for static generation per page.

**React Compiler**: `babel-plugin-react-compiler` is enabled. Do **not** add manual `React.memo`, `useMemo`, or `useCallback` for render optimization — the compiler handles this automatically. Only use these hooks for semantic (non-performance) reasons.

**Constants**: Services defined in `constants/services.ts`, case studies in `constants/case-studies.ts`. Both are bilingual objects with `en` and `uk` keys.

## Code Style (enforced by ESLint + Prettier)

**Prettier**: Single quotes, no trailing commas, arrow parens avoid, 120 char width.

**Import ordering** (perfectionist plugin): type imports → external → internal (`@/`) → relative, alphabetically sorted within groups, with blank lines between groups.

**Sorting enforced everywhere**: imports, named imports, object keys, JSX props, interfaces, union types — all alphabetical via perfectionist.

**Notable rules**:
- `@typescript-eslint/no-explicit-any` — error (relaxed in test files)
- `@typescript-eslint/no-unnecessary-condition` — error
- `import/no-cycle` — error
- `require-await` — error (no empty async functions)
- `no-shadow` — error (hoist all)
- `arrow-body-style: as-needed` — implicit returns required where possible
- `padding-line-between-statements` — blank line before `return`, blank line after directives
- Prefer `interface` over `type` for object shapes
- Use `'use client'` directive for components with hooks or interactivity

### Path Alias

`@/*` maps to `./src/*`

## Environment Variables

**Site**: `NEXT_PUBLIC_SITE_URL` (defaults to `https://teamx10.com`)

**Calendly**: `NEXT_PUBLIC_CALENDLY_URL` — Calendly popup URL (e.g. `https://calendly.com/teamx10/30min`). If not set, CTA buttons fall back to `/contacts` page.

## Additional Rules

Project-specific rules live in `.claude/rules/`:
- `react.md` — applies to `**/*.tsx` files
- `typescript.md` — TypeScript conventions

## Tech Stack Versions

- Next.js 16.1.6 with React Compiler (`babel-plugin-react-compiler`)
- React 19.2.0
- MUI 7.3.5 (`@mui/material`, `@emotion/react`, `@emotion/styled`)
- next-intl 4.8.4 (i18n — Ukrainian default + English)
- TypeScript 5.x (strict mode, noUnusedLocals, noUnusedParameters)
- ESLint 9 flat config
