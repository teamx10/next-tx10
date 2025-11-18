'use client';

import ErrorIcon from '@mui/icons-material/Error';
import { Alert, Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

export function AuthFailedPageContent() {
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
        <ErrorIcon sx={{ color: 'error.main', fontSize: 64 }} />
        <Typography variant="h4">Authentication Failed</Typography>
        <Alert severity="error" sx={{ width: '100%' }}>
          There was a problem with your authentication. Please try again.
        </Alert>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button component={Link} href={ROUTES.AUTH.SIGN_IN} variant="contained">
            Try Again
          </Button>
          <Button component={Link} href={ROUTES.HOME} variant="outlined">
            Go Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
