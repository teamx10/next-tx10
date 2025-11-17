'use client';

import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { PaymentStatus } from '@/components/payment/PaymentStatus';
import { PaymentStatus as PaymentStatusType } from '@/types/payment';
import { MESSAGES } from '@/constants/messages';

export const dynamic = 'force-dynamic';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<PaymentStatusType>('succeeded');
  const [message, setMessage] = useState<string>(MESSAGES.PAYMENT.SUCCESS);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    // TODO: Verify payment with Stripe session
    // For now, just show success
    if (sessionId) {
      setStatus('succeeded');
      setMessage(MESSAGES.PAYMENT.SUCCESS);
    }
  }, [searchParams]);

  return (
    <Container maxWidth="md">
      <PaymentStatus status={status} message={message} />
    </Container>
  );
}

