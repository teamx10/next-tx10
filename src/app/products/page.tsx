import { Container, Typography } from '@mui/material';

import { ProductList } from '@/components/products/ProductList';
import { PRODUCTS } from '@/constants/products';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  description:
    'Browse our selection of poker training products and games. Learn poker strategies, combinations, and improve your skills.',
  keywords: ['poker products', 'poker training', 'poker guide', 'poker strategy'],
  title: 'Products',
  url: '/products'
});

export default function ProductsPage() {
  const activeProducts = PRODUCTS.filter(p => p.isActive);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography component="h1" variant="h3" gutterBottom>
        Our Products
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }} variant="body1">
        Discover our comprehensive collection of poker training materials and games designed to help you improve your
        skills.
      </Typography>
      <ProductList products={activeProducts} />
    </Container>
  );
}
