import type { NextConfig } from 'next';

import createNextIntlPlugin from 'next-intl/plugin';
import { resolve } from 'path';

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: resolve(__dirname)
  }
};

export default withNextIntl(nextConfig);
