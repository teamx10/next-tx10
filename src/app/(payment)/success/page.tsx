'use client';

import { Container } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { PaymentStatus } from '@/components/payment/PaymentStatus';
import { MESSAGES } from '@/constants/messages';
import { PaymentStatus as PaymentStatusType } from '@/types/payment';

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
      // Use setTimeout to avoid synchronous setState in effect
      setTimeout(() => {
        setStatus('succeeded');
        setMessage(MESSAGES.PAYMENT.SUCCESS);
      }, 0);
    }
  }, [searchParams]);

  return (
    <Container maxWidth="md">
      <PaymentStatus message={message} status={status} />
    </Container>
  );
}
