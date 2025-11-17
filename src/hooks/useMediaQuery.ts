'use client';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export function useIsMobile(): boolean {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.down('md'));
}

export function useIsTablet(): boolean {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.between('sm', 'lg'));
}

export function useIsDesktop(): boolean {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.up('lg'));
}
