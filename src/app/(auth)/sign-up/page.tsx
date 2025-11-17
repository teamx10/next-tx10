import { Container } from '@mui/material';

import { SignUpForm } from '@/components/auth/SignUpForm';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  description: 'Create a new TeamX10 account to access poker training products and games.',
  title: 'Sign Up',
  url: '/sign-up'
});

export default function SignUpPage() {
  return (
    <Container maxWidth="sm">
      <SignUpForm />
    </Container>
  );
}
