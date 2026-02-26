# Architecture

## System Overview

```
+------------------+     +------------------+     +------------------+
|   Browser/Client |---->|   Next.js 16     |---->|   Firebase       |
|                  |     |   (App Router)   |     |   (Auth + DB)    |
|  React 19 + MUI  |     |                  |     |                  |
|  ThemeContext     |     |  Server Comps    |     |  Auth: email     |
|  useAuth hook    |     |  API Routes      |     |    link + Google |
|  Stripe.js       |     |  SSR/SSG         |     |  Firestore       |
+------------------+     +--------+---------+     +------------------+
                                  |
                                  v
                          +------------------+
                          |   Stripe API     |
                          |                  |
                          |  Checkout        |
                          |  Sessions        |
                          |  Payments        |
                          +------------------+
```

## Layer Architecture

```
+-----------------------------------------------------------------+
|                        PRESENTATION                              |
|  src/app/           Pages (App Router, route groups)             |
|  src/components/    React components (layout, pages, features)   |
|  src/contexts/      ThemeContext (dark/light mode)                |
+-----------------------------------------------------------------+
|                        HOOKS / STATE                             |
|  src/hooks/         useAuth, useFirestore, useStripe,            |
|                     useMediaQuery                                |
+-----------------------------------------------------------------+
|                        SERVICES / LIB                            |
|  src/lib/firebase/  Auth, Config (nullable), Firestore           |
|  src/lib/stripe/    Checkout, Config                             |
|  src/lib/mui/       Theme (createAppTheme, getGradients)         |
+-----------------------------------------------------------------+
|                        SHARED                                    |
|  src/constants/     Routes, Products, Messages                   |
|  src/types/         TypeScript interfaces                        |
|  src/utils/         SEO, Validation, Format                      |
+-----------------------------------------------------------------+
```

## Authentication Flow

```
User
  |
  +-- Email Link Flow:
  |     1. Enter email -> sendSignInLinkToEmail()
  |     2. Email stored in localStorage (24h expiry)
  |     3. Click link in email -> /sign-in/verify
  |     4. completeSignInWithEmailLink() -> Firebase session
  |
  +-- Google Flow:
        1. Click Google button -> signInWithPopup()
        2. If popup blocked -> signInWithRedirect() fallback
        3. Firebase session created

Auth State: onAuthStateChanged() -> useAuth hook -> components
Protected Routes: AuthGuard component wraps children, redirects unauthenticated
```

## Payment Flow

```
User
  |
  1. Select product -> /select (product catalog from constants/products.ts)
  2. Click purchase -> /process
  3. Client POST -> /api/stripe/create-checkout-session
  4. Server creates Stripe session (server-only STRIPE_SECRET_KEY)
  5. Client redirected to Stripe hosted checkout
  6. Stripe redirects back -> /success or /failed
```

## Route Structure

```
/                              Home
/sign-in                       Sign-in page (email link + Google)
/sign-in/process               Processing sign-in
/sign-in/success               Sign-in success
/sign-in/failed                Sign-in failed
/sign-in/verify                Email link verification
/sign-up                       Sign-up page
/sign-out                      Sign-out page
/products                      Product listing
/products/poker-guide          Product detail
/products/poker-combinations   Product detail
/products/poker-strategy       Product detail
/products/solitaire            Product detail
/select                        Payment product selection
/process                       Payment processing
/success                       Payment success
/failed                        Payment failed
/privacy                       Privacy policy
/terms                         Terms of service
/faq                           FAQ page
/api/stripe/checkout-session        Stripe session retrieval
/api/stripe/create-checkout-session Stripe session creation
```

## Component Hierarchy

```
RootLayout
  +-- ThemeProviderWrapper
        +-- ThemeContextProvider (dark/light mode)
              +-- MUI ThemeProvider (createAppTheme)
                    +-- Header (Navigation, MobileNavigation, ThemeToggle)
                    +-- {Page Content}
                    +-- Footer
```

## Data Sources

- **Products**: Static catalog in `constants/products.ts` (no database)
- **Auth state**: Firebase Auth (client-side, real-time via onAuthStateChanged)
- **User data**: Firestore (hooks/useFirestore.ts)
- **Payments**: Stripe API (server-side only)
- **Routes**: Static constants in `constants/routes.ts`
- **Messages**: Static constants in `constants/messages.ts`
