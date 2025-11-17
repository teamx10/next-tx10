'use client';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Alert, Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

export function AuthSuccessPageContent() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          justifyContent: 'center',
          minHeight: '50vh',
          textAlign: 'center'
        }}
      >
        <CheckCircleIcon sx={{ color: 'success.main', fontSize: 64 }} />
        <Typography variant="h4">Success!</Typography>
        <Alert severity="success" sx={{ width: '100%' }}>
          Your account has been successfully authenticated.
        </Alert>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button component={Link} href={ROUTES.PRODUCTS} variant="contained">
            Browse Products
          </Button>
          <Button component={Link} href={ROUTES.HOME} variant="outlined">
            Go Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

