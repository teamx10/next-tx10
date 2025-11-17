'use client';

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  Chip,
  Divider,
} from '@mui/material';
import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/format';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { PaymentForm } from '@/components/payment/PaymentForm';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Chip
          label={product.category.replace('-', ' ')}
          color="primary"
          sx={{ mb: 2 }}
        />
        <Typography variant="h3" component="h1" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h5" color="primary" fontWeight="bold" sx={{ mb: 2 }}>
          {formatCurrency(product.price, product.currency)}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {product.description}
        </Typography>
        {product.longDescription && (
          <Typography variant="body1" sx={{ mb: 3 }}>
            {product.longDescription}
          </Typography>
        )}
      </Box>

      {product.features && product.features.length > 0 && (
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Features
            </Typography>
            <List>
              {product.features.map((feature, index) => (
                <ListItem key={index}>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>
          Ready to get started?
        </Typography>
        <PaymentForm product={product} />
      </Box>
    </Box>
  );
}

