# Assumptions and Unknowns

## Assumptions

| # | Assumption | Affects | Risk |
|---|-----------|---------|------|
| A1 | Products are static (hardcoded), not stored in a database | constants/products.ts, product pages | Low — may need migration to Firestore if catalog grows |
| A2 | Stripe checkout is one-time payment only (no subscriptions) | api/stripe/, payment flow | Medium — business model may evolve |
| A3 | Firebase Auth is the only auth provider (no custom backend auth) | lib/firebase/auth.ts, useAuth hook | Low |
| A4 | No server-side session management — auth state is client-side only | AuthGuard, API routes | Medium — API routes may need auth validation |
| A5 | Deployment target is Vercel | next.config.ts, API routes | Confirmed by user |
| A6 | No admin panel or CMS — content managed via code | All content pages | Low |
| A7 | Stripe webhooks not needed — redirect-based flow sufficient | api/stripe/, payment verification | Confirmed by user |
| A8 | Test framework will be Vitest when testing is added | Dev dependencies, test config | Confirmed by user |

## Unknowns

| # | Unknown | Affects | Priority |
|---|---------|---------|----------|
| U1 | How purchased products are delivered to users (not decided yet) | Payment success flow, product pages | High — deferred |
| U4 | Whether user purchase history needs persistence in Firestore | Firestore schema, useFirestore hook | Medium |
| U6 | Whether mobile app is planned (Android/iOS bundleIds referenced in auth.ts) | Firebase config, mobile platform | Low |

## Resolved

| # | Question | Answer | Date |
|---|---------|--------|------|
| U2 | Stripe webhooks planned? | No, not needed — redirect flow sufficient | 2026-02-26 |
| U3 | Deployment platform? | Vercel | 2026-02-26 |
| U5 | Test framework? | Vitest | 2026-02-26 |
