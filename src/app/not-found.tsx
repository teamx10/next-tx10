import Link from 'next/link';

import { TeamX10Logo } from '@/components/svg/TeamX10Logo';

export default function NotFound() {
  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: '#0d0d14',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      <TeamX10Logo color="#7c6af7" width={200} />
      <p style={{ color: '#9e9e9e', fontSize: '1.125rem', margin: 0 }}>Page not found</p>
      <Link
        href="/"
        style={{
          borderRadius: '8px',
          color: '#7c6af7',
          fontSize: '0.875rem',
          padding: '8px 20px',
          textDecoration: 'none'
        }}
      >
        ← Back to home
      </Link>
    </div>
  );
}
