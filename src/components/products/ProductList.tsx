'use client';

import React from 'react';
import { Grid } from '@mui/material';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/payment/ProductCard';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} showSelectButton={false} />
        </Grid>
      ))}
    </Grid>
  );
}

