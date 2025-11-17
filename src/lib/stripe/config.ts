import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<null | Stripe> | undefined;

export const getStripe = (): Promise<null | Stripe> => {
  if (stripePromise === undefined) {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

    if (publishableKey) {
      stripePromise = loadStripe(publishableKey);
    } else {
      console.warn('Stripe publishable key is not set');
      stripePromise = Promise.resolve(null);
    }
  }

  return stripePromise;
};

export const STRIPE_CONFIG = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
  secretKey: process.env.STRIPE_SECRET_KEY || ''
} as const;
