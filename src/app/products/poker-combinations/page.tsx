import { Container } from '@mui/material';
import { ProductDetail } from '@/components/products/ProductDetail';
import { getProductBySlug } from '@/constants/products';
import { generateProductMetadata } from '@/utils/seo';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const product = getProductBySlug('poker-combinations');
  if (!product) return {};
  return generateProductMetadata(product);
}

export default function PokerCombinationsPage() {
  const product = getProductBySlug('poker-combinations');

  if (!product) {
    notFound();
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <ProductDetail product={product} />
    </Container>
  );
}

