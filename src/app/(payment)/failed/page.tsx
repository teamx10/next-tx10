import { Container } from '@mui/material';
import { PaymentStatus } from '@/components/payment/PaymentStatus';
import { PaymentStatus as PaymentStatusType } from '@/types/payment';
import { MESSAGES } from '@/constants/messages';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  title: 'Payment Failed',
  description: 'Payment failed',
  url: '/payment/failed',
  noindex: true,
});

export default function PaymentFailedPage() {
  return (
    <Container maxWidth="md">
      <PaymentStatus status={'failed' as PaymentStatusType} message={MESSAGES.PAYMENT.FAILED} />
    </Container>
  );
}

