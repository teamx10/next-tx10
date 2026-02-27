---
paths: **/*.tsx
---

# React & Next.js Rules

- Use `'use client'` directive for components with hooks, event handlers, or browser APIs
- React Compiler is enabled — do NOT add manual `React.memo`, `useMemo`, or `useCallback` for render optimization
- Arrow body style: implicit returns required where possible (`arrow-body-style: as-needed`)
- Blank line before `return` statement, blank line after `'use client'` directive
- JSX props must be alphabetically sorted (perfectionist enforced)
- Use routes from `constants/routes.ts` (`ROUTES`) — never hardcode route strings
- Use products from `constants/products.ts` — never hardcode product data
- Theme: use `createAppTheme(mode)` from `lib/mui/theme.ts`, `getGradients(mode)` for gradients
- Auth: use `useAuth` hook, protect routes with `AuthGuard` component
- Pages: page-specific content goes in `components/pages/`, domain components in feature folders
- SEO: use `utils/seo.ts` for metadata generation
