'use client';

import React from 'react';
import { Box, Typography, Alert, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { PaymentStatus as PaymentStatusType } from '@/types/payment';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

interface PaymentStatusProps {
  status: PaymentStatusType;
  message?: string;
}

export function PaymentStatus({ status, message }: PaymentStatusProps) {
  const isSuccess = status === 'succeeded';
  const isFailed = status === 'failed' || status === 'canceled';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        gap: 3,
        textAlign: 'center',
      }}
    >
      {isSuccess && <CheckCircleIcon sx={{ fontSize: 64, color: 'success.main' }} />}
      {isFailed && <ErrorIcon sx={{ fontSize: 64, color: 'error.main' }} />}

      <Typography variant="h4">
        {isSuccess ? 'Payment Successful!' : isFailed ? 'Payment Failed' : 'Processing Payment'}
      </Typography>

      {message && (
        <Alert severity={isSuccess ? 'success' : isFailed ? 'error' : 'info'} sx={{ width: '100%', maxWidth: 500 }}>
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

