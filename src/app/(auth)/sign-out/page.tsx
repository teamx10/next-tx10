'use client';

import { useEffect } from 'react';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import { signOut } from '@/lib/firebase/auth';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh',
          gap: 2,
        }}
      >
        <CircularProgress />
        <Typography variant="body1">Signing out...</Typography>
      </Box>
    </Container>
  );
}

