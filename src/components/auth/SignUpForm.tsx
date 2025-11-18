'use client';

import { Alert, Box, Button, Link as MuiLink, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { signUp } from '@/lib/firebase/auth';
import { validateConfirmPassword, validateEmail, validatePassword } from '@/utils/validation';

export function SignUpForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [errors, setErrors] = useState<{
    confirmPassword?: string;
    email?: string;
    general?: string;
    password?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const confirmPasswordValidation = validateConfirmPassword(password, confirmPassword);

    if (!emailValidation.isValid || !passwordValidation.isValid || !confirmPasswordValidation.isValid) {
      setErrors({
        confirmPassword: confirmPasswordValidation.error,
        email: emailValidation.error,
        password: passwordValidation.error
      });

      return;
    }

    setLoading(true);

    try {
      await signUp(email, password, displayName || undefined);
      router.push(ROUTES.AUTH.SUCCESS);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : MESSAGES.AUTH.SIGN_UP_FAILED;
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
        Sign Up
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }} variant="body2">
        Create an account to get started
      </Typography>

      {errors.general && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errors.general}
        </Alert>
      )}

      <Stack spacing={2}>
        <TextField
          autoComplete="name"
          label="Display Name (Optional)"
          onChange={e => setDisplayName(e.target.value)}
          type="text"
          value={displayName}
          fullWidth
        />

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
          autoComplete="new-password"
          error={!!errors.password}
          helperText={errors.password}
          label="Password"
          onChange={e => setPassword(e.target.value)}
          type="password"
          value={password}
          fullWidth
          required
        />

        <TextField
          autoComplete="new-password"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          label="Confirm Password"
          onChange={e => setConfirmPassword(e.target.value)}
          type="password"
          value={confirmPassword}
          fullWidth
          required
        />

        <Button disabled={loading} size="large" type="submit" variant="contained" fullWidth>
          {loading ? 'Creating account...' : 'Sign Up'}
        </Button>

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <MuiLink component={Link} href={ROUTES.AUTH.SIGN_IN} underline="hover" variant="body2">
            Already have an account? Sign in
          </MuiLink>
        </Box>
      </Stack>
    </Box>
  );
}
