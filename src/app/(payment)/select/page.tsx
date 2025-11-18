'use client';

import { Container, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import { ProductCard } from '@/components/payment/ProductCard';
import { PRODUCTS } from '@/constants/products';
import { ROUTES } from '@/constants/routes';
import { Product } from '@/types/product';

export default function PaymentSelectPage() {
  const router = useRouter();

  const handleSelectProduct = (product: Product) => {
    router.push(`${ROUTES.PAYMENT.PROCESS}?productId=${product.id}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography component="h1" variant="h3" gutterBottom>
        Select a Product
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }} variant="body1">
        Choose from our selection of poker training products and games
      </Typography>
      <Grid spacing={3} container>
        {PRODUCTS.filter(p => p.isActive).map(product => (
          <Grid
            size={{
              md: 4,
              sm: 6,
              xs: 12
            }}
            key={product.id}
          >
            <ProductCard onSelect={handleSelectProduct} product={product} showSelectButton={true} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
