'use client';

import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/format';
import { useStripe } from '@/hooks/useStripe';
import { useAuth } from '@/hooks/useAuth';
import { createCheckoutSession } from '@/lib/stripe/checkout';
import { ROUTES } from '@/constants/routes';

interface PaymentFormProps {
  product: Product;
}

export function PaymentForm({ product }: PaymentFormProps) {
  const { user } = useAuth();
  const { loading: stripeLoading } = useStripe();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (!user) {
      setError('You must be signed in to make a purchase');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const baseUrl = window.location.origin;
      const session = await createCheckoutSession({
        productId: product.id,
        userId: user.uid,
        successUrl: `${baseUrl}${ROUTES.PAYMENT.SUCCESS}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${baseUrl}${ROUTES.PAYMENT.FAILED}`,
      });

      // Redirect to Stripe Checkout
      window.location.href = session.url;
    } catch (err: any) {
      setError(err.message || 'Failed to start checkout process');
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Purchase {product.name}
        </Typography>
        <Box sx={{ my: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Price:
          </Typography>
          <Typography variant="h4" color="primary" fontWeight="bold">
            {formatCurrency(product.price, product.currency)}
          </Typography>
        </Box>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={handleCheckout}
          disabled={loading || stripeLoading || !product.isActive}
          sx={{ mt: 2 }}
        >
          {loading || stripeLoading ? (
            <>
              <CircularProgress size={20} sx={{ mr: 1 }} />
              Processing...
            </>
          ) : (
            'Proceed to Checkout'
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

