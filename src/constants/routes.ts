export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_POKER_GUIDE: '/products/poker-guide',
  PRODUCT_POKER_COMBINATIONS: '/products/poker-combinations',
  PRODUCT_POKER_STRATEGY: '/products/poker-strategy',
  PRODUCT_SOLITAIRE: '/products/solitaire',
  AUTH: {
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    SIGN_OUT: '/sign-out',
    SUCCESS: '/sign-in/success',
    FAILED: '/sign-in/failed',
    PROCESS: '/sign-in/process',
  },
  PAYMENT: {
    SELECT: '/payment/select',
    PROCESS: '/payment/process',
    SUCCESS: '/payment/success',
    FAILED: '/payment/failed',
  },
  LEGAL: {
    TERMS: '/terms',
    PRIVACY: '/privacy',
  },
  FAQ: '/faq',
} as const;

