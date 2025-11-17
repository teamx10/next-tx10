'use client';

import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import { useSearchParams, useRouter } from 'next/navigation';
import { getProductById } from '@/constants/products';
import { Product } from '@/types/product';
import { PaymentForm } from '@/components/payment/PaymentForm';
import { ROUTES } from '@/constants/routes';

export default function PaymentProcessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
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

    setProduct(foundProduct);
    setLoading(false);
  }, [searchParams, router]);

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
            gap: 2,
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
      <Typography variant="h4" component="h1" gutterBottom>
        Complete Your Purchase
      </Typography>
      <Box sx={{ mt: 4 }}>
        <PaymentForm product={product} />
      </Box>
    </Container>
  );
}

