'use client';

import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';
import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/format';

interface ProductCardProps {
  onSelect?: (product: Product) => void;
  product: Product;
  showSelectButton?: boolean;
}

export function ProductCard({ onSelect, product, showSelectButton = true }: ProductCardProps) {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(product);
    }
  };

  return (
    <Card
      sx={{
        '&:hover': {
          boxShadow: 4,
          transform: 'translateY(-4px)'
        },
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.2s, box-shadow 0.2s'
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ mb: 2 }}>
          <Typography component="h3" variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Chip color="primary" label={product.category.replace('-', ' ')} size="small" sx={{ mb: 1 }} />
        </Box>
        <Typography color="text.secondary" sx={{ mb: 2 }} variant="body2">
          {product.description}
        </Typography>
        {product.features && product.features.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Typography fontWeight="bold" sx={{ mb: 0.5 }} variant="body2">
              Features:
            </Typography>
            <Typography color="text.secondary" component="ul" sx={{ m: 0, pl: 2 }} variant="body2">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </Typography>
          </Box>
        )}
        <Typography color="primary" fontWeight="bold" variant="h5">
          {formatCurrency(product.price, product.currency)}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        {showSelectButton ? (
          <Button disabled={!product.isActive} onClick={handleSelect} variant="contained" fullWidth>
            {product.isActive ? 'Select Product' : 'Unavailable'}
          </Button>
        ) : (
          <Button component={Link} href={`${ROUTES.PRODUCTS}/${product.slug}`} variant="outlined" fullWidth>
            View Details
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
