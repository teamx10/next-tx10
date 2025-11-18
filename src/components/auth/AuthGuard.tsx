'use client';

import { Box, Button, CircularProgress, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/hooks/useAuth';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export function AuthGuard({ children, requireAuth = true }: AuthGuardProps) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && requireAuth && !isAuthenticated) {
      router.push(ROUTES.AUTH.SIGN_IN);
    }
  }, [isAuthenticated, loading, requireAuth, router]);

  if (loading) {
    return (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          justifyContent: 'center',
          minHeight: '50vh'
        }}
      >
        <CircularProgress />
        <Typography color="text.secondary" variant="body2">
          Loading...
        </Typography>
      </Box>
    );
  }

  if (requireAuth && !isAuthenticated) {
    return (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          justifyContent: 'center',
          minHeight: '50vh'
        }}
      >
        <Typography variant="h5" gutterBottom>
          Authentication Required
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }} variant="body2">
          You must be signed in to access this page.
        </Typography>
        <Button component={Link} href={ROUTES.AUTH.SIGN_IN} variant="contained">
          Sign In
        </Button>
      </Box>
    );
  }

  return <>{children}</>;
}
