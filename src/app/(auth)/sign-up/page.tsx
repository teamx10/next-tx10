import { Container, Paper, Typography } from '@mui/material';

import UnifiedAuthForm from '@/components/auth/UnifiedAuthForm';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  description: 'Create a new TeamX10 account with email link or Google to access poker training products and games.',
  title: 'Sign Up',
  url: '/sign-up'
});

export default function SignUpPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography align="center" component="h1" variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 4 }} variant="body2" gutterBottom>
          Create your account to access premium poker training.
        </Typography>
        <UnifiedAuthForm />
        <Typography align="center" color="text.secondary" sx={{ mt: 3 }} variant="body2">
          Already have an account?{' '}
          <Typography
            color="primary"
            component="a"
            href="/sign-in"
            sx={{ '&:hover': { textDecoration: 'underline' }, textDecoration: 'none' }}
          >
            Sign In
          </Typography>
        </Typography>
      </Paper>
    </Container>
  );
}
