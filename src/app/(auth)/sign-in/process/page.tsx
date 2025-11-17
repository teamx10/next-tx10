import { Box, CircularProgress, Container, Typography } from '@mui/material';

import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  description: 'Processing authentication',
  noindex: true,
  title: 'Processing',
  url: '/sign-in/process'
});

export const dynamic = 'force-dynamic';

export default function AuthProcessPage() {
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
        <CircularProgress size={48} />
        <Typography variant="h6">Processing...</Typography>
        <Typography color="text.secondary" variant="body2">
          Please wait while we process your request.
        </Typography>
      </Box>
    </Container>
  );
}
