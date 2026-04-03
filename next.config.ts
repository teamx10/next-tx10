import type { NextConfig } from 'next';

import createNextIntlPlugin from 'next-intl/plugin';
import { resolve } from 'path';

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

const securityHeaders = [
  { key: 'Permissions-Policy', value: 'camera=(), geolocation=(), microphone=()' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' }
];

const nextConfig: NextConfig = {
  headers: () => Promise.resolve([{ headers: securityHeaders, source: '/(.*)' }]),
  reactCompiler: true,
  turbopack: {
    root: resolve(__dirname)
  }
};

export default withNextIntl(nextConfig);
