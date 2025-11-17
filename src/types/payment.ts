export interface Payment {
  id: string;
  userId: string;
  productId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  stripeSessionId?: string;
  stripePaymentIntentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type PaymentStatus = 'pending' | 'processing' | 'succeeded' | 'failed' | 'canceled';

export interface PaymentSession {
  sessionId: string;
  url: string;
}

export interface CheckoutSessionData {
  productId: string;
  userId: string;
  successUrl: string;
  cancelUrl: string;
}

