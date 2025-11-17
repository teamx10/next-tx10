export const ROUTES = {
  AUTH: {
    FAILED: '/sign-in/failed',
    PROCESS: '/sign-in/process',
    SIGN_IN: '/sign-in',
    SIGN_OUT: '/sign-out',
    SIGN_UP: '/sign-up',
    SUCCESS: '/sign-in/success'
  },
  FAQ: '/faq',
  HOME: '/',
  LEGAL: {
    PRIVACY: '/privacy',
    TERMS: '/terms'
  },
  PAYMENT: {
    FAILED: '/payment/failed',
    PROCESS: '/payment/process',
    SELECT: '/payment/select',
    SUCCESS: '/payment/success'
  },
  PRODUCT_POKER_COMBINATIONS: '/products/poker-combinations',
  PRODUCT_POKER_GUIDE: '/products/poker-guide',
  PRODUCT_POKER_STRATEGY: '/products/poker-strategy',
  PRODUCT_SOLITAIRE: '/products/solitaire',
  PRODUCTS: '/products'
} as const;
