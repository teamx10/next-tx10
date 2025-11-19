'use client';

import { Alert, Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { FormEvent, useState } from 'react';

import { MESSAGES } from '@/constants/messages';
import { sendSignInLinkToEmail } from '@/lib/firebase/auth';
import { validateEmail } from '@/utils/validation';

export default function EmailLinkSignInForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate email
    const emailValidation = validateEmail(email);

    if (!emailValidation.isValid) {
      setError(emailValidation.error || MESSAGES.VALIDATION.EMAIL_INVALID);

      return;
    }

    setIsLoading(true);

    try {
      await sendSignInLinkToEmail(email);
      setIsSuccess(true);
    } catch (err) {
      console.error('Email link sign-in error:', err);

      if (err && typeof err === 'object' && 'code' in err) {
        const errorCode = (err as { code: string }).code;

        switch (errorCode) {
          case 'auth/invalid-email':
            setError(MESSAGES.VALIDATION.EMAIL_INVALID);
            break;
          case 'auth/user-disabled':
            setError('This account has been disabled.');
            break;
          case 'auth/too-many-requests':
            setError('Too many requests. Please try again later.');
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

  if (isSuccess) {
    return (
      <Box>
        <Alert severity="success" sx={{ mb: 3 }}>
          Check your email! We sent you a sign-in link to <strong>{email}</strong>
        </Alert>
        <Typography color="text.secondary" textAlign="center" variant="body2">
          Click the link in your email to sign in. You can close this page.
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2 }} textAlign="center" variant="body2">
          Don&apos;t see the email? Check your spam folder.
        </Typography>
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

      <TextField
        autoComplete="email"
        disabled={isLoading}
        id="email"
        label="Email Address"
        margin="normal"
        name="email"
        onChange={e => setEmail(e.target.value)}
        type="email"
        value={email}
        autoFocus
        fullWidth
        required
      />

      <Button disabled={isLoading} size="large" sx={{ mb: 2, mt: 3 }} type="submit" variant="contained" fullWidth>
        {isLoading ? <CircularProgress size={24} /> : 'Send Sign-In Link'}
      </Button>

      <Typography color="text.secondary" sx={{ mt: 2 }} textAlign="center" variant="body2">
        We&apos;ll send you a secure link to sign in without a password
      </Typography>
    </Box>
  );
}
