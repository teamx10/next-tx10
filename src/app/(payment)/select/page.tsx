'use client';

import React, { useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { ProductCard } from '@/components/payment/ProductCard';
import { PRODUCTS } from '@/constants/products';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export default function PaymentSelectPage() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    router.push(`${ROUTES.PAYMENT.PROCESS}?productId=${product.id}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Select a Product
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Choose from our selection of poker training products and games
      </Typography>

      <Grid container spacing={3}>
        {PRODUCTS.filter((p) => p.isActive).map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard
              product={product}
              onSelect={handleSelectProduct}
              showSelectButton={true}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

