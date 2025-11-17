import { Container, Box, Typography, CircularProgress } from '@mui/material';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  title: 'Processing',
  description: 'Processing authentication',
  url: '/sign-in/process',
  noindex: true,
});

export const dynamic = 'force-dynamic';

export default function AuthProcessPage() {
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
        <CircularProgress size={48} />
        <Typography variant="h6">Processing...</Typography>
        <Typography variant="body2" color="text.secondary">
          Please wait while we process your request.
        </Typography>
      </Box>
    </Container>
  );
}

