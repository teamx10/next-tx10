import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

import { getProductById } from '@/constants/products';
import { STRIPE_CONFIG } from '@/lib/stripe/config';

function getStripeInstance() {
  if (!STRIPE_CONFIG.secretKey) {
    throw new Error('Stripe secret key is not configured');
  }

  return new Stripe(STRIPE_CONFIG.secretKey, {
    apiVersion: '2025-02-24.acacia'
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cancelUrl, productId, successUrl, userId } = body;

    if (!productId || !userId || !successUrl || !cancelUrl) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const product = getProductById(productId);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Create Stripe Checkout Session
    const stripe = getStripeInstance();
    const session = await stripe.checkout.sessions.create({
      cancel_url: cancelUrl,
      client_reference_id: userId,
      line_items: [
        {
          price_data: {
            currency: product.currency.toLowerCase(),
            product_data: {
              description: product.description,
              name: product.name
            },
            unit_amount: Math.round(product.price * 100) // Convert to cents
          },
          quantity: 1
        }
      ],
      metadata: {
        productId: product.id,
        userId: userId
      },
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: successUrl
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create checkout session';

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
