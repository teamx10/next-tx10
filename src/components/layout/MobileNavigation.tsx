'use client';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import { TeamX10Logo } from '@/components/svg/TeamX10Logo';
import { ROUTES } from '@/constants/routes';

interface MobileNavigationProps {
  onClose: () => void;
  open: boolean;
}

export function MobileNavigation({ onClose, open }: MobileNavigationProps) {
  const navigationItems = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'Products', path: ROUTES.PRODUCTS },
    { label: 'FAQ', path: ROUTES.FAQ }
  ];

  return (
    <Drawer
      ModalProps={{
        keepMounted: true
      }}
      anchor="left"
      onClose={onClose}
      open={open}
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <TeamX10Logo />
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navigationItems.map(item => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton component={Link} href={item.path} onClick={onClose}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
