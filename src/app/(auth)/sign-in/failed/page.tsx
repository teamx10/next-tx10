import { AuthFailedPageContent } from '@/components/pages/AuthFailedPageContent';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  description: 'Authentication failed',
  noindex: true,
  title: 'Authentication Failed',
  url: '/sign-in/failed'
});

export const dynamic = 'force-dynamic';

export default function AuthFailedPage() {
  return <AuthFailedPageContent />;
}
