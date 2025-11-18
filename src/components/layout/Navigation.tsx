'use client';

import { Box, Button } from '@mui/material';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

interface NavigationProps {
  onItemClick?: () => void;
}

export function Navigation({ onItemClick }: NavigationProps) {
  const navigationItems = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'Products', path: ROUTES.PRODUCTS },
    { label: 'FAQ', path: ROUTES.FAQ }
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {navigationItems.map(item => (
        <Button component={Link} href={item.path} key={item.path} onClick={onItemClick} sx={{ color: 'text.primary' }}>
          {item.label}
        </Button>
      ))}
    </Box>
  );
}
