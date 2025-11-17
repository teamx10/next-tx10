'use client';

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Link as MuiLink,
  Stack,
} from '@mui/material';
import { signUp } from '@/lib/firebase/auth';
import { validateEmail, validatePassword, validateConfirmPassword } from '@/utils/validation';
import { MESSAGES } from '@/constants/messages';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { useRouter } from 'next/navigation';

export function SignUpForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
    general?: string;
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
        email: emailValidation.error,
        password: passwordValidation.error,
        confirmPassword: confirmPasswordValidation.error,
      });
      return;
    }

    setLoading(true);

    try {
      await signUp(email, password, displayName || undefined);
      router.push(ROUTES.AUTH.SUCCESS);
    } catch (error: any) {
      setErrors({
        general: error.message || MESSAGES.AUTH.SIGN_UP_FAILED,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Create an account to get started
      </Typography>

      {errors.general && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errors.general}
        </Alert>
      )}

      <Stack spacing={2}>
        <TextField
          label="Display Name (Optional)"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          fullWidth
          autoComplete="name"
        />

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          required
          fullWidth
          autoComplete="email"
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          required
          fullWidth
          autoComplete="new-password"
        />

        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          required
          fullWidth
          autoComplete="new-password"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </Button>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <MuiLink
            component={Link}
            href={ROUTES.AUTH.SIGN_IN}
            variant="body2"
            underline="hover"
          >
            Already have an account? Sign in
          </MuiLink>
        </Box>
      </Stack>
    </Box>
  );
}

