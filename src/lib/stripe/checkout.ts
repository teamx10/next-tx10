import { CheckoutSessionData } from '@/types/payment';
import { Product } from '@/types/product';

export async function createCheckoutSession(data: CheckoutSessionData): Promise<{ sessionId: string; url: string }> {
  const response = await fetch('/api/stripe/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create checkout session');
  }

  return response.json();
}

export async function getCheckoutSession(sessionId: string): Promise<any> {
  const response = await fetch(`/api/stripe/checkout-session?sessionId=${sessionId}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to get checkout session');
  }

  return response.json();
}

// API route handlers (to be created in app/api)
export interface CreateCheckoutSessionRequest {
  productId: string;
  userId: string;
  successUrl: string;
  cancelUrl: string;
}

export interface CreateCheckoutSessionResponse {
  sessionId: string;
  url: string;
}

