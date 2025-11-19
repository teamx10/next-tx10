import { Container, Paper, Typography } from '@mui/material';

import EmailLinkVerifyForm from '@/components/auth/EmailLinkVerifyForm';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  description: 'Complete your passwordless sign-in by verifying your email address.',
  title: 'Verify Sign-In',
  url: '/sign-in/verify'
});

export default function SignInVerifyPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography align="center" component="h1" variant="h4" gutterBottom>
          Complete Sign-In
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 4 }} variant="body2" gutterBottom>
          You&apos;re almost there! Confirm your email to complete sign-in.
        </Typography>
        <EmailLinkVerifyForm />
      </Paper>
    </Container>
  );
}
