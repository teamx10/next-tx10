import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  robots: {
    follow: false,
    googleBot: { follow: false, index: false },
    index: false
  },
  title: 'Records'
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
};

export default function RecordsLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>{children}</body>
    </html>
  );
}
