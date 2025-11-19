'use client';

import { Alert, Box, Button, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { signInWithGoogle } from '@/lib/firebase/auth';

interface GoogleSignInButtonProps {
  fullWidth?: boolean;
  size?: 'large' | 'medium' | 'small';
}

export default function GoogleSignInButton({ fullWidth = false, size = 'medium' }: GoogleSignInButtonProps) {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setError('');
    setIsLoading(true);

    try {
      const result = await signInWithGoogle();

      // If result is null, redirect flow was triggered (will complete on redirect)
      if (result === null) {
        return;
      }

      // Successful popup sign-in
      router.push(ROUTES.AUTH.SUCCESS);
    } catch (err) {
      console.error('Google sign-in error:', err);

      if (err && typeof err === 'object' && 'code' in err) {
        const errorCode = (err as { code: string }).code;

        switch (errorCode) {
          case 'auth/popup-closed-by-user':
          case 'auth/cancelled-popup-request':
            setError(MESSAGES.AUTH.GOOGLE_SIGN_IN_CANCELED);
            break;
          case 'auth/account-exists-with-different-credential':
            setError('An account already exists with the same email. Please sign in using your original method.');
            break;
          case 'auth/user-disabled':
            setError('This account has been disabled.');
            break;
          case 'auth/network-request-failed':
            setError(MESSAGES.ERRORS.NETWORK);
            break;
          default:
            setError(MESSAGES.AUTH.GOOGLE_SIGN_IN_FAILED);
        }
      } else {
        setError(MESSAGES.AUTH.GOOGLE_SIGN_IN_FAILED);
      }

      setIsLoading(false);
    }
  };

  return (
    <Box>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Button
        startIcon={
          isLoading ? (
            <CircularProgress size={20} />
          ) : (
            <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          )
        }
        sx={{
          '&:disabled': {
            backgroundColor: '#ffffff',
            color: '#000000',
            opacity: 0.6
          },
          '&:hover': {
            backgroundColor: '#f5f5f5',
            borderColor: 'rgba(0, 0, 0, 0.23)'
          },
          backgroundColor: '#ffffff',
          border: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.23)',
          color: '#000000',
          textTransform: 'none'
        }}
        disabled={isLoading}
        fullWidth={fullWidth}
        onClick={handleGoogleSignIn}
        size={size}
        variant="outlined"
      >
        {isLoading ? 'Signing in...' : 'Continue with Google'}
      </Button>
    </Box>
  );
}
