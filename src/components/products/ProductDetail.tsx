'use client';

import { Box, Card, CardContent, Chip, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

import { PaymentForm } from '@/components/payment/PaymentForm';
import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/format';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Chip color="primary" label={product.category.replace('-', ' ')} sx={{ mb: 2 }} />
        <Typography component="h1" variant="h3" gutterBottom>
          {product.name}
        </Typography>
        <Typography color="primary" fontWeight="bold" sx={{ mb: 2 }} variant="h5">
          {formatCurrency(product.price, product.currency)}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }} variant="body1">
          {product.description}
        </Typography>
        {product.longDescription && (
          <Typography sx={{ mb: 3 }} variant="body1">
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
