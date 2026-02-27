# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 application for TeamX10, a poker training and games platform. Uses React 19, TypeScript, Material-UI v7, Firebase (auth + Firestore), and Stripe for payments.

## Development Commands

```bash
npm run dev       # Dev server on http://localhost:3333
npm run build     # Production build
npm start         # Production server
npm run lint      # ESLint 9 flat config with Prettier
```

No test framework is currently configured.

## Architecture

### Directory Layout

```
src/
├── app/              # Next.js App Router (pages + API routes)
├── components/       # React components (layout/, pages/, products/, payment/, auth/, svg/, ui/)
├── contexts/         # React contexts (ThemeContext for dark/light mode)
├── lib/              # Service configs (firebase/, stripe/, mui/)
├── hooks/            # Custom hooks (useAuth, useFirestore, useStripe, useMediaQuery)
├── types/            # TypeScript interfaces
├── constants/        # Static data (routes, products, messages)
└── utils/            # Helpers (seo, validation, format)
```

### Route Groups

URL structure is independent of folder names due to Next.js route groups:

- `(auth)` — sign-in (with process/success/failed/verify sub-routes), sign-up, sign-out
- `(payment)` — select, process, success, failed
- `(legal)` — privacy, terms
- `products/` — product listing + individual product pages (poker-guide, poker-combinations, poker-strategy, solitaire)
- `api/stripe/` — checkout-session and create-checkout-session API routes

### Key Patterns

**Authentication**: Passwordless email link + Google sign-in (popup with redirect fallback). `lib/firebase/config.ts` exports `auth` and `db` as nullable — returns `null` if env vars are missing. `lib/firebase/auth.ts` throws at module level if Firebase is unconfigured (hard failure for auth-dependent code). Email link flow stores email in localStorage with 24h expiry.

**Theme System**: `ThemeContextProvider` in `contexts/ThemeContext.tsx` wraps the app with dark/light mode state. `createAppTheme(mode)` in `lib/mui/theme.ts` generates the MUI theme. `getGradients(mode)` provides mode-aware gradient strings. The wrapper lives in `components/layout/ThemeProviderWrapper.tsx` which also renders Header/Footer.

**Payment Flow**: Client calls `api/stripe/create-checkout-session` → gets Stripe session → redirects to Stripe-hosted checkout → returns to success/failed pages.

**Routes**: All routes centralized in `constants/routes.ts` as `ROUTES` const object. Always use these instead of hardcoded strings.

**Products**: Defined in `constants/products.ts` with lookup helpers `getProductBySlug()` and `getProductById()`.

**SEO**: `utils/seo.ts` generates metadata for all pages. Product pages use schema.org structured data.

**Component Organization**: `pages/` contains page-specific content components (e.g., `HomePageContent`). Feature folders (`auth/`, `payment/`, `products/`) group domain components. `layout/` has Header, Footer, Navigation, MobileNavigation, ThemeToggle.

**Auth Guard**: `components/auth/AuthGuard.tsx` protects routes — wraps children, redirects to sign-in when `requireAuth` is true and user is unauthenticated.

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

**Firebase** (all `NEXT_PUBLIC_`): `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`

**Stripe**: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (client), `STRIPE_SECRET_KEY` (server only)

**Site**: `NEXT_PUBLIC_SITE_URL` (defaults to `https://teamx10.com`)

## Tech Stack Versions

- Next.js 16.1.6 with React Compiler (`babel-plugin-react-compiler`)
- React 19.2.0
- MUI 7.3.5 (`@mui/material`, `@emotion/react`, `@emotion/styled`)
- Firebase 12.6.0
- Stripe 19.3.1 / @stripe/stripe-js 8.5.1
- TypeScript 5.x (strict mode, noUnusedLocals, noUnusedParameters)
- ESLint 9 flat config
