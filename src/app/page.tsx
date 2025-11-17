import { HomePageContent } from '@/components/pages/HomePageContent';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  description:
    'Master poker with our comprehensive guides, training programs, and games. Learn poker strategies, combinations, and improve your skills.',
  title: 'TeamX10 - Poker Training & Games',
  url: '/'
});

export default function HomePage() {
  return <HomePageContent />;
}
