'use client';

import { Alert, Box, Button, Link as MuiLink, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { signIn } from '@/lib/firebase/auth';
import { validateEmail, validatePassword } from '@/utils/validation';

export function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; general?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    if (!emailValidation.isValid || !passwordValidation.isValid) {
      setErrors({
        email: emailValidation.error,
        password: passwordValidation.error
      });

      return;
    }

    setLoading(true);

    try {
      await signIn(email, password);
      router.push(ROUTES.AUTH.SUCCESS);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : MESSAGES.AUTH.SIGN_IN_FAILED;
      setErrors({
        general: errorMessage
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mt: 4, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }} variant="body2">
        Sign in to your account to access your products
      </Typography>

      {errors.general && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errors.general}
        </Alert>
      )}

      <Stack spacing={2}>
        <TextField
          autoComplete="email"
          error={!!errors.email}
          helperText={errors.email}
          label="Email"
          onChange={e => setEmail(e.target.value)}
          type="email"
          value={email}
          fullWidth
          required
        />

        <TextField
          autoComplete="current-password"
          error={!!errors.password}
          helperText={errors.password}
          label="Password"
          onChange={e => setPassword(e.target.value)}
          type="password"
          value={password}
          fullWidth
          required
        />

        <Button disabled={loading} size="large" type="submit" variant="contained" fullWidth>
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <MuiLink component={Link} href={ROUTES.AUTH.SIGN_UP} underline="hover" variant="body2">
            Don&apos;t have an account? Sign up
          </MuiLink>
        </Box>
      </Stack>
    </Box>
  );
}
