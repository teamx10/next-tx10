'use client';

import { Alert, Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

import { MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import {
  clearStoredEmailForSignIn,
  completeSignInWithEmailLink,
  getStoredEmailForSignIn,
  isSignInWithEmailLink
} from '@/lib/firebase/auth';
import { validateEmail } from '@/utils/validation';

export default function EmailLinkVerifyForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValidLink, setIsValidLink] = useState(false);

  useEffect(() => {
    // Check if the URL is a valid email link
    const currentUrl = window.location.href;

    if (!isSignInWithEmailLink(currentUrl)) {
      setError(MESSAGES.AUTH.EMAIL_LINK_INVALID);

      return;
    }

    setIsValidLink(true);

    // Try to get stored email
    const storedEmail = getStoredEmailForSignIn();

    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate email
    const emailValidation = validateEmail(email);

    if (!emailValidation.isValid) {
      setError(emailValidation.error || MESSAGES.VALIDATION.EMAIL_INVALID);

      return;
    }

    if (!isValidLink) {
      setError(MESSAGES.AUTH.EMAIL_LINK_INVALID);

      return;
    }

    setIsLoading(true);

    try {
      const currentUrl = window.location.href;
      await completeSignInWithEmailLink(email, currentUrl);

      // Redirect to success page
      router.push(ROUTES.AUTH.SUCCESS);
    } catch (err) {
      console.error('Email link verification error:', err);

      if (err && typeof err === 'object' && 'code' in err) {
        const errorCode = (err as { code: string }).code;

        switch (errorCode) {
          case 'auth/expired-action-code':
            setError(MESSAGES.AUTH.EMAIL_LINK_EXPIRED);
            clearStoredEmailForSignIn();
            break;
          case 'auth/invalid-action-code':
            setError(MESSAGES.AUTH.EMAIL_LINK_INVALID);
            clearStoredEmailForSignIn();
            break;
          case 'auth/invalid-email':
            setError(MESSAGES.VALIDATION.EMAIL_INVALID);
            break;
          case 'auth/user-disabled':
            setError('This account has been disabled.');
            break;
          default:
            setError(MESSAGES.AUTH.SIGN_IN_FAILED);
        }
      } else {
        setError(MESSAGES.AUTH.SIGN_IN_FAILED);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isValidLink && error) {
    return (
      <Box>
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
        <Button onClick={() => router.push(ROUTES.AUTH.SIGN_IN)} variant="outlined" fullWidth>
          Back to Sign In
        </Button>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Typography color="text.secondary" sx={{ mb: 3 }} textAlign="center" variant="body2">
        Please confirm your email address to complete sign-in
      </Typography>

      <TextField
        autoComplete="email"
        autoFocus={!email}
        disabled={isLoading}
        helperText={email ? "You can change this if it's not correct" : ''}
        id="email"
        label="Email Address"
        margin="normal"
        name="email"
        onChange={e => setEmail(e.target.value)}
        type="email"
        value={email}
        fullWidth
        required
      />

      <Button
        disabled={isLoading || !email}
        size="large"
        sx={{ mb: 2, mt: 3 }}
        type="submit"
        variant="contained"
        fullWidth
      >
        {isLoading ? <CircularProgress size={24} /> : 'Complete Sign-In'}
      </Button>

      <Button disabled={isLoading} onClick={() => router.push(ROUTES.AUTH.SIGN_IN)} variant="text" fullWidth>
        Cancel
      </Button>
    </Box>
  );
}
