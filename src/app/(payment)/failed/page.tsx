import { Container } from '@mui/material';

import { PaymentStatus } from '@/components/payment/PaymentStatus';
import { MESSAGES } from '@/constants/messages';
import { PaymentStatus as PaymentStatusType } from '@/types/payment';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  description: 'Payment failed',
  noindex: true,
  title: 'Payment Failed',
  url: '/payment/failed'
});

export default function PaymentFailedPage() {
  return (
    <Container maxWidth="md">
      <PaymentStatus message={MESSAGES.PAYMENT.FAILED} status={'failed' as PaymentStatusType} />
    </Container>
  );
}
