import { AuthSuccessPageContent } from '@/components/pages/AuthSuccessPageContent';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  description: 'Authentication successful',
  noindex: true,
  title: 'Success',
  url: '/sign-in/success'
});

export const dynamic = 'force-dynamic';

export default function AuthSuccessPage() {
  return <AuthSuccessPageContent />;
}
