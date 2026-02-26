# Context

## Business

- **Product**: TeamX10 — poker training and games platform
- **Domain**: Online education + digital products for poker players
- **Revenue model**: One-time purchases via Stripe checkout
- **Target audience**: Beginner to intermediate poker players
- **Products**: Poker Guide ($29.99), Poker Combinations Training ($19.99), Poker Strategy ($39.99), Solitaire Game ($9.99)
- **Site URL**: https://teamx10.com

## Technical

- **Framework**: Next.js 16 App Router with React 19 and React Compiler
- **UI**: MUI v7 (Material UI) with Emotion CSS-in-JS, dark/light theme
- **Auth**: Firebase — passwordless email link + Google sign-in (popup with redirect fallback)
- **Database**: Firestore (Firebase)
- **Payments**: Stripe — server-side checkout session creation, Stripe-hosted checkout
- **Language**: TypeScript 5.x, strict mode
- **Styling**: MUI theme system with `createAppTheme(mode)` and `getGradients(mode)`
- **SEO**: Metadata generation via `utils/seo.ts`, schema.org structured data on product pages
- **Deployment**: Vercel
- **Testing**: Vitest (when added)

## Architecture Summary

- See `docs/ARCHITECTURE.md` for full architecture diagram
- See `docs/TECHSTACK.md` for versions and tooling
- See `docs/CODEMAP.md` for file structure
- See `docs/DEPENDENCIES.md` for package list

## Key Patterns

- **Route groups**: `(auth)`, `(payment)`, `(legal)` — URL paths independent of folder names
- **Centralized routes**: `constants/routes.ts` — all routes as `ROUTES` const
- **Centralized products**: `constants/products.ts` — static product catalog with lookup helpers
- **Firebase nullable pattern**: `config.ts` exports `auth`/`db` as `T | null`, `auth.ts` throws if null
- **Auth guard**: `AuthGuard` component wraps protected pages, redirects to sign-in
- **Theme context**: `ThemeContextProvider` manages dark/light mode, consumed via `ThemeProviderWrapper`
- **Payment flow**: Client → `api/stripe/create-checkout-session` → Stripe session → redirect → success/failed
- **Component organization**: `pages/` for page content, feature folders (`auth/`, `payment/`, `products/`) for domain

## Documents

- `docs/CONTEXT.md` — This file. Business and tech context summary.
- `docs/ARCHITECTURE.md` — System architecture and data flow.
- `docs/TECHSTACK.md` — Tech stack versions and key decisions.
- `docs/CODEMAP.md` — File and folder structure.
- `docs/DEPENDENCIES.md` — Flat dependency list with versions.
- `agents/IMPLEMENTATION.md` — Current implementation status.
- `docs/ASSUMPTIONS.md` — Tracked unknowns and assumptions.
