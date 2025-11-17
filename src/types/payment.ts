export interface Payment {
  amount: number;
  createdAt: Date;
  currency: string;
  id: string;
  productId: string;
  status: PaymentStatus;
  stripePaymentIntentId?: string;
  stripeSessionId?: string;
  updatedAt: Date;
  userId: string;
}

export type PaymentStatus = 'canceled' | 'failed' | 'pending' | 'processing' | 'succeeded';

export interface PaymentSession {
  sessionId: string;
  url: string;
}

export interface CheckoutSessionData {
  cancelUrl: string;
  productId: string;
  successUrl: string;
  userId: string;
}
