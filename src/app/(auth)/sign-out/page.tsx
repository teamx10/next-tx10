'use client';

import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { ROUTES } from '@/constants/routes';
import { signOut } from '@/lib/firebase/auth';

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        await signOut();
        router.push(ROUTES.HOME);
      } catch (error) {
        console.error('Error signing out:', error);
        router.push(ROUTES.HOME);
      }
    };

    handleSignOut();
  }, [router]);

  return (
    <Container maxWidth="sm">
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
        <Typography variant="body1">Signing out...</Typography>
      </Box>
    </Container>
  );
}
