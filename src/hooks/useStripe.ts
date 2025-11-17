'use client';

import { useState, useEffect } from 'react';
import { getStripe } from '@/lib/stripe/config';
import { Stripe } from '@stripe/stripe-js';
import { createCheckoutSession, getCheckoutSession } from '@/lib/stripe/checkout';
import { CheckoutSessionData } from '@/types/payment';

export function useStripe() {
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadStripeInstance() {
      try {
        setLoading(true);
        const stripeInstance = await getStripe();
        
        if (!cancelled) {
          setStripe(stripeInstance);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error('Failed to load Stripe'));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadStripeInstance();

    return () => {
      cancelled = true;
    };
  }, []);

  const createSession = async (data: CheckoutSessionData) => {
    try {
      const session = await createCheckoutSession(data);
      return session;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to create checkout session');
    }
  };

  const getSession = async (sessionId: string) => {
    try {
      const session = await getCheckoutSession(sessionId);
      return session;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to get checkout session');
    }
  };

  return {
    stripe,
    loading,
    error,
    createSession,
    getSession,
  };
}

