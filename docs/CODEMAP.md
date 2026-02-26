# Codemap

## src/app — Next.js App Router pages and API routes

### src/app/(auth) — Authentication pages
#### src/app/(auth)/sign-in — Sign-in flow pages
- page.tsx
- failed/page.tsx
- process/page.tsx
- success/page.tsx
- verify/page.tsx

#### src/app/(auth)/sign-out — Sign-out page
- page.tsx

#### src/app/(auth)/sign-up — Sign-up page
- page.tsx

### src/app/(legal) — Legal pages
- privacy/page.tsx
- terms/page.tsx

### src/app/(payment) — Payment flow pages
- failed/page.tsx
- process/page.tsx
- select/page.tsx
- success/page.tsx

### src/app/api — API routes
#### src/app/api/stripe — Stripe API endpoints
- checkout-session/route.ts
- create-checkout-session/route.ts

### src/app/products — Product listing and detail pages
- page.tsx
- poker-combinations/page.tsx
- poker-guide/page.tsx
- poker-strategy/page.tsx
- solitaire/page.tsx

### src/app — Root level app files
- favicon.ico
- globals.css
- layout.tsx
- page.module.css
- page.tsx
- robots.ts
- sitemap.ts
- faq/page.tsx

## src/components — React components

### src/components/auth — Authentication components
- AuthGuard.tsx
- EmailLinkSignInForm.tsx
- EmailLinkVerifyForm.tsx
- GoogleSignInButton.tsx
- UnifiedAuthForm.tsx

### src/components/layout — Layout shell components
- Footer.tsx
- Header.tsx
- MobileNavigation.tsx
- Navigation.tsx
- ThemeProviderWrapper.tsx
- ThemeToggle.tsx

### src/components/pages — Page content components
- AuthFailedPageContent.tsx
- AuthSuccessPageContent.tsx
- HomePageContent.tsx

### src/components/payment — Payment flow components
- PaymentForm.tsx
- PaymentStatus.tsx
- ProductCard.tsx

### src/components/products — Product display components
- ProductDetail.tsx
- ProductList.tsx

### src/components/svg — SVG icon components
- SvgIconProps.ts
- TeamX10Logo.tsx
- Tx10Logo.tsx
- useSvgHelper.ts

### src/components/ui — Shared UI primitives
- LoadingSpinner.tsx

## src/constants — Static data and configuration
- messages.ts
- products.ts
- routes.ts

## src/contexts — React context providers
- ThemeContext.tsx

## src/hooks — Custom React hooks
- useAuth.ts
- useFirestore.ts
- useMediaQuery.ts
- useStripe.ts

## src/lib — Service configurations

### src/lib/firebase — Firebase setup
- auth.ts
- config.ts
- firestore.ts

### src/lib/mui — MUI theme setup
- theme.ts

### src/lib/stripe — Stripe setup
- checkout.ts
- config.ts

## src/types — TypeScript interfaces
- firebase.ts
- payment.ts
- product.ts
- theme.ts
- user.ts

## src/utils — Utility helpers
- format.ts
- seo.ts
- validation.ts

## Root — Configuration files
- .env.example
- .gitignore
- .prettierrc.json
- CLAUDE.md
- README.md
- eslint.config.mjs
- next-tx10.code-workspace
- next.config.ts
- package.json
- package-lock.json
- tsconfig.json
