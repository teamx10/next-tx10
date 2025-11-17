'use client';

import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { PaymentForm } from '@/components/payment/PaymentForm';
import { getProductById } from '@/constants/products';
import { ROUTES } from '@/constants/routes';
import { Product } from '@/types/product';

export default function PaymentProcessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [product, setProduct] = useState<null | Product>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productId = searchParams.get('productId');

    if (!productId) {
      router.push(ROUTES.PAYMENT.SELECT);

      return;
    }

    const foundProduct = getProductById(productId);
    if (!foundProduct) {
      router.push(ROUTES.PAYMENT.SELECT);

      return;
    }

    // Use setTimeout to avoid synchronous setState in effect
    setTimeout(() => {
      setProduct(foundProduct);
      setLoading(false);
    }, 0);
  }, [searchParams, router]);

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
            minHeight: '50vh'
          }}
        >
          <CircularProgress />
          <Typography>Loading product...</Typography>
        </Box>
      </Container>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography component="h1" variant="h4" gutterBottom>
        Complete Your Purchase
      </Typography>
      <Box sx={{ mt: 4 }}>
        <PaymentForm product={product} />
      </Box>
    </Container>
  );
}
