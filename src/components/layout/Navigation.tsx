'use client';

import React from 'react';
import { Box, Button } from '@mui/material';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

interface NavigationProps {
  onItemClick?: () => void;
}

export function Navigation({ onItemClick }: NavigationProps) {
  const navigationItems = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'Products', path: ROUTES.PRODUCTS },
    { label: 'FAQ', path: ROUTES.FAQ },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {navigationItems.map((item) => (
        <Button
          key={item.path}
          component={Link}
          href={item.path}
          onClick={onItemClick}
          sx={{ color: 'text.primary' }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
}

