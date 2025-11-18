'use client';

import { Alert, Box, Button, Card, CardContent, CircularProgress, Typography } from '@mui/material';
import { useState } from 'react';

import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/hooks/useAuth';
import { useStripe } from '@/hooks/useStripe';
import { createCheckoutSession } from '@/lib/stripe/checkout';
import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/format';

interface PaymentFormProps {
  product: Product;
}

export function PaymentForm({ product }: PaymentFormProps) {
  const { user } = useAuth();
  const { loading: stripeLoading } = useStripe();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

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
        cancelUrl: `${baseUrl}${ROUTES.PAYMENT.FAILED}`,
        productId: product.id,
        successUrl: `${baseUrl}${ROUTES.PAYMENT.SUCCESS}?session_id={CHECKOUT_SESSION_ID}`,
        userId: user.uid
      });

      // Redirect to Stripe Checkout
      window.location.href = session.url;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to start checkout process';
      setError(errorMessage);
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
          <Typography color="text.secondary" variant="body2">
            Price:
          </Typography>
          <Typography color="primary" fontWeight="bold" variant="h4">
            {formatCurrency(product.price, product.currency)}
          </Typography>
        </Box>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Button
          disabled={loading || stripeLoading || !product.isActive}
          onClick={handleCheckout}
          size="large"
          sx={{ mt: 2 }}
          variant="contained"
          fullWidth
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
