import { Container } from '@mui/material';
import { SignInForm } from '@/components/auth/SignInForm';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  title: 'Sign In',
  description: 'Sign in to your TeamX10 account to access your poker training products and games.',
  url: '/sign-in',
});

export default function SignInPage() {
  return (
    <Container maxWidth="sm">
      <SignInForm />
    </Container>
  );
}

