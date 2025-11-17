import { Container, Typography, Box } from '@mui/material';
import { ProductList } from '@/components/products/ProductList';
import { PRODUCTS } from '@/constants/products';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  title: 'Products',
  description: 'Browse our selection of poker training products and games. Learn poker strategies, combinations, and improve your skills.',
  keywords: ['poker products', 'poker training', 'poker guide', 'poker strategy'],
  url: '/products',
});

export default function ProductsPage() {
  const activeProducts = PRODUCTS.filter((p) => p.isActive);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Products
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Discover our comprehensive collection of poker training materials and games designed to help you improve your skills.
      </Typography>
      <ProductList products={activeProducts} />
    </Container>
  );
}

