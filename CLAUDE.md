# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application for TeamX10, a poker training and games platform. The app uses React 19, TypeScript, Material-UI for components, Firebase for authentication and data storage, and Stripe for payment processing.

## Key Technologies

- **Framework**: Next.js 16.0.3 with App Router and React Server Components
- **React**: Version 19.2.0 with React Compiler enabled (`babel-plugin-react-compiler`)
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **UI**: Material-UI v6 with custom theme (`@mui/material`, `@emotion/react`)
- **Authentication**: Firebase Authentication with email/password
- **Database**: Firebase Firestore
- **Payments**: Stripe integration with checkout sessions
- **Styling**: CSS Modules + Material-UI theming system

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter (uses ESLint 9 with flat config)
npm run lint
```

## Project Architecture

### Directory Structure

```
src/
├── app/              # Next.js App Router pages and API routes
│   ├── (auth)/      # Authentication flow routes (route group)
│   ├── (payment)/   # Payment flow routes (route group)
│   ├── (legal)/     # Legal pages (route group)
│   ├── products/    # Product pages
│   ├── api/         # API routes (Stripe endpoints)
│   └── layout.tsx   # Root layout with SEO and theme provider
├── components/      # React components
│   ├── layout/      # Layout components (Header, Footer, Navigation, ThemeProviderWrapper)
│   ├── pages/       # Page-specific components
│   ├── products/    # Product-related components
│   ├── payment/     # Payment-related components
│   ├── auth/        # Authentication components
│   └── ui/          # Reusable UI components
├── lib/             # External service configurations
│   ├── firebase/    # Firebase config, auth, firestore utilities
│   ├── stripe/      # Stripe config and checkout utilities
│   └── mui/         # Material-UI theme configuration
├── hooks/           # Custom React hooks
│   ├── useAuth.ts        # Firebase authentication state
│   ├── useFirestore.ts   # Firestore CRUD operations
│   ├── useStripe.ts      # Stripe checkout handling
│   └── useMediaQuery.ts  # Responsive breakpoint detection
├── types/           # TypeScript type definitions
│   ├── user.ts           # User-related types
│   ├── product.ts        # Product and ProductCategory types
│   ├── payment.ts        # Payment-related types
│   └── firebase.ts       # Firebase-specific types
├── constants/       # Application constants
│   ├── routes.ts         # Route constants (ROUTES object)
│   ├── products.ts       # Product data and helper functions
│   └── messages.ts       # User-facing messages
└── utils/           # Utility functions
    ├── seo.ts            # SEO metadata generation
    ├── validation.ts     # Input validation utilities
    └── format.ts         # Data formatting utilities
```

### Route Groups

The application uses Next.js route groups (folders wrapped in parentheses) to organize routes without affecting the URL structure:

- `(auth)` - Authentication pages: sign-in, sign-up, sign-out, with process/success/failed states
- `(payment)` - Payment flow: select, process, success, failed
- `(legal)` - Legal pages: privacy policy, terms of service

### Key Architectural Patterns

**Authentication Flow**: Multi-step authentication process handled through route groups with dedicated process/success/failed pages. The `useAuth` hook provides centralized authentication state management.

**Payment Integration**: Stripe checkout uses API routes (`api/stripe/create-checkout-session`) to create server-side checkout sessions. Client-side redirects to Stripe-hosted checkout, then returns to success/failed pages.

**Firebase Services**: Firebase initialization is conditional (checks for environment variables) and exports `null` if not configured, preventing errors in development environments without Firebase setup.

**SEO Management**: Centralized SEO utilities in `utils/seo.ts` generate metadata for all pages. Uses structured data (schema.org) for product pages.

**Component Organization**:
- `layout/` - App-wide layout components (Header, Footer, Navigation)
- `pages/` - Page-specific components (HomePageContent, AuthSuccessPageContent)
- Feature folders (`products/`, `payment/`, `auth/`) - Domain-specific components

**Type Safety**: All external data (products, routes, messages) are strongly typed with TypeScript interfaces and `as const` assertions for literal types.

## Configuration Details

### TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled with comprehensive checks
- Unused locals and parameters are errors
- No implicit any or returns allowed
- Target: ES5 for maximum compatibility

### ESLint Configuration

Uses ESLint 9 flat config (`eslint.config.mjs`) with:
- **Import ordering**: Enforced alphabetical sorting via `perfectionist/sort-imports`
- **Import groups**: type imports, external, internal (`@/`), relative
- **No explicit any**: TypeScript's `any` type is an error
- **Arrow functions**: Prefer arrow functions with implicit returns (`arrow-body-style: as-needed`)
- **Padding**: Blank line required before return statements
- **Object/interface sorting**: Alphabetical sorting enforced for consistency
- **React hooks**: Exhaustive deps checking enabled

### Material-UI Theme

Custom theme located in `src/lib/mui/theme.ts`:
- Primary color: Light green (`#4CAF50`)
- Secondary color: Teal (`#009688`)
- Custom gradient utilities exported (`gradients.primary`, `gradients.secondary`)
- Component overrides for Button, Card, TextField, AppBar
- Typography system with custom font stack

### Environment Variables

The application expects these environment variables:

**Firebase** (all prefixed with `NEXT_PUBLIC_`):
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

**Stripe**:
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (client-side)
- `STRIPE_SECRET_KEY` (server-side only)

**Site**:
- `NEXT_PUBLIC_SITE_URL` (for SEO, defaults to `https://teamx10.com`)

## Custom Hooks

### useAuth
Manages Firebase authentication state with loading, error, and user data. Returns both raw Firebase user and transformed user data object.

### useFirestore
Generic Firestore CRUD operations with TypeScript generics. Supports creating, reading, updating, deleting documents with real-time listeners.

### useStripe
Handles Stripe checkout redirects. Creates checkout session via API route and redirects to Stripe-hosted checkout page.

### useMediaQuery
Responsive breakpoint detection using Material-UI breakpoints. Supports `up`, `down`, and `between` queries.

## Products System

Products are defined in `src/constants/products.ts` as an array of `Product` objects with categories: `poker-guide`, `poker-combinations`, `poker-strategy`, `solitaire`.

Helper functions:
- `getProductBySlug(slug)` - Find product by URL slug
- `getProductById(id)` - Find product by ID

## Routes System

All routes are centralized in `src/constants/routes.ts` as the `ROUTES` constant object. Use these constants instead of hardcoded strings for type safety and maintainability.

## Code Style Preferences

- **Variable declarations**: Always use `const`, use `let` only when reassignment is needed, never use `var`
- **Functions**: Prefer arrow functions with implicit returns when possible
- **Imports**: Must be alphabetically sorted with type imports first, then external, then internal (`@/`)
- **Components**: Use `'use client'` directive for client components (hooks, interactivity)
- **TypeScript**: Prefer `interface` over `type` for object shapes
- **Async/await**: Always use async/await over `.then()` chains
- **Error handling**: Use try/catch blocks and set error state in components

## Testing Notes

No test framework is currently configured. When adding tests, consider Jest or Vitest with React Testing Library to match the Next.js ecosystem.
