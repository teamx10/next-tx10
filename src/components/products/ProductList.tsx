'use client';

import { Grid } from '@mui/material';

import { ProductCard } from '@/components/payment/ProductCard';
import { Product } from '@/types/product';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <Grid spacing={3} container>
      {products.map(product => (
        <Grid
          size={{
            md: 4,
            sm: 6,
            xs: 12
          }}
          key={product.id}
        >
          <ProductCard product={product} showSelectButton={false} />
        </Grid>
      ))}
    </Grid>
  );
}
