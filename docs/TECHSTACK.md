# Tech Stack

## Runtime

| Component | Version | Notes |
|-----------|---------|-------|
| Node.js | 20+ | Required by Next.js 16 |
| Next.js | 16.0.3 | App Router, React Compiler enabled |
| React | 19.2.0 | With React Compiler (babel-plugin-react-compiler 1.0.0) |
| React DOM | 19.2.0 | |
| TypeScript | 5.x | Strict mode, noUnusedLocals, noUnusedParameters |

## UI Framework

| Component | Version | Notes |
|-----------|---------|-------|
| MUI Material | 7.3.5 | Component library |
| MUI Icons Material | 7.3.5 | Icon set |
| MUI System | 7.3.5 | Styling utilities |
| MUI Material Next.js | 7.3.5 | SSR integration |
| Emotion React | 11.13.0 | CSS-in-JS runtime |
| Emotion Styled | 11.13.0 | Styled components API |

## Backend Services

| Component | Version | Notes |
|-----------|---------|-------|
| Firebase | 12.6.0 | Auth (email link + Google), Firestore |
| Stripe | 19.3.1 | Server-side payment processing |
| @stripe/stripe-js | 8.5.1 | Client-side Stripe integration |

## Code Quality

| Tool | Version | Notes |
|------|---------|-------|
| ESLint | 9.x | Flat config |
| eslint-config-next | 16.0.3 | Next.js lint rules |
| eslint-plugin-perfectionist | 4.15.1 | Alphabetical sorting enforcement |
| eslint-plugin-import | 2.32.0 | Import cycle detection |
| eslint-plugin-prettier | 5.5.4 | Prettier integration |
| eslint-plugin-react | 7.37.5 | React rules |
| eslint-plugin-react-hooks | 7.0.1 | Hooks rules |
| @typescript-eslint/eslint-plugin | 8.47.0 | TS-specific rules |
| @typescript-eslint/parser | 8.47.0 | TS parser |
| Prettier | 3.6.2 | Single quotes, no trailing commas, 120 char width |

## Package Manager

| Tool | Notes |
|------|-------|
| npm | Primary (package-lock.json) |
| Yarn (PnP) | .pnp.cjs present, yarn.lock present |

## Key Decisions

- React Compiler enabled via `next.config.ts` (`reactCompiler: true`)
- Path alias `@/*` maps to `./src/*`
- Strict TypeScript: `strict`, `noImplicitAny`, `noImplicitReturns`, `noUnusedLocals`, `noUnusedParameters`
- ESLint flat config with perfectionist plugin for enforced alphabetical sorting everywhere
- No test framework configured yet
- Dev server runs on port 3333
