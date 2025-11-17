'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/format';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
  showSelectButton?: boolean;
}

export function ProductCard({ product, onSelect, showSelectButton = true }: ProductCardProps) {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(product);
    }
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            {product.name}
          </Typography>
          <Chip
            label={product.category.replace('-', ' ')}
            size="small"
            color="primary"
            sx={{ mb: 1 }}
          />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>
        {product.features && product.features.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
              Features:
            </Typography>
            <Typography variant="body2" color="text.secondary" component="ul" sx={{ pl: 2, m: 0 }}>
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </Typography>
          </Box>
        )}
        <Typography variant="h5" color="primary" fontWeight="bold">
          {formatCurrency(product.price, product.currency)}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        {showSelectButton ? (
          <Button
            variant="contained"
            fullWidth
            onClick={handleSelect}
            disabled={!product.isActive}
          >
            {product.isActive ? 'Select Product' : 'Unavailable'}
          </Button>
        ) : (
          <Button
            component={Link}
            href={`${ROUTES.PRODUCTS}/${product.slug}`}
            variant="outlined"
            fullWidth
          >
            View Details
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

