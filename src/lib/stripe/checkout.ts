import { CheckoutSessionData, PaymentSession } from '@/types/payment';

export async function createCheckoutSession(data: CheckoutSessionData): Promise<PaymentSession> {
  const response = await fetch('/api/stripe/create-checkout-session', {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create checkout session');
  }

  return response.json();
}

export async function getCheckoutSession(sessionId: string): Promise<unknown> {
  const response = await fetch(`/api/stripe/checkout-session?sessionId=${sessionId}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to get checkout session');
  }

  return response.json();
}

// API route handlers (to be created in app/api)
export interface CreateCheckoutSessionRequest {
  cancelUrl: string;
  productId: string;
  successUrl: string;
  userId: string;
}

export interface CreateCheckoutSessionResponse {
  sessionId: string;
  url: string;
}
