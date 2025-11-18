'use client';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Alert, Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';
import { PaymentStatus as PaymentStatusType } from '@/types/payment';

interface PaymentStatusProps {
  message?: string;
  status: PaymentStatusType;
}

export function PaymentStatus({ message, status }: PaymentStatusProps) {
  const isSuccess = status === 'succeeded';
  const isFailed = status === 'failed' || status === 'canceled';

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center'
      }}
    >
      {isSuccess && <CheckCircleIcon sx={{ color: 'success.main', fontSize: 64 }} />}
      {isFailed && <ErrorIcon sx={{ color: 'error.main', fontSize: 64 }} />}

      <Typography variant="h4">
        {isSuccess ? 'Payment Successful!' : isFailed ? 'Payment Failed' : 'Processing Payment'}
      </Typography>

      {message && (
        <Alert severity={isSuccess ? 'success' : isFailed ? 'error' : 'info'} sx={{ maxWidth: 500, width: '100%' }}>
          {message}
        </Alert>
      )}

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        {isSuccess ? (
          <>
            <Button component={Link} href={ROUTES.PRODUCTS} variant="contained">
              View Products
            </Button>
            <Button component={Link} href={ROUTES.HOME} variant="outlined">
              Go Home
            </Button>
          </>
        ) : (
          <>
            <Button component={Link} href={ROUTES.PAYMENT.SELECT} variant="contained">
              Try Again
            </Button>
            <Button component={Link} href={ROUTES.HOME} variant="outlined">
              Go Home
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
