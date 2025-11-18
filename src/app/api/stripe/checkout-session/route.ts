import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

import { STRIPE_CONFIG } from '@/lib/stripe/config';

function getStripeInstance() {
  if (!STRIPE_CONFIG.secretKey) {
    throw new Error('Stripe secret key is not configured');
  }

  return new Stripe(STRIPE_CONFIG.secretKey, {
    apiVersion: '2025-10-29.clover'
  });
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    const stripe = getStripeInstance();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json(session);
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to retrieve checkout session';

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
