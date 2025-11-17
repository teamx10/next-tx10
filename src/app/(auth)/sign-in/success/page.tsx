import { Container, Box, Typography, Button, Alert } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { generateMetadata } from '@/utils/seo';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const metadata = generateMetadata({
  title: 'Success',
  description: 'Authentication successful',
  url: '/sign-in/success',
  noindex: true,
});

export const dynamic = 'force-dynamic';

export default function AuthSuccessPage() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh',
          gap: 3,
          textAlign: 'center',
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 64, color: 'success.main' }} />
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

