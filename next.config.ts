import { resolve } from 'path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: resolve(__dirname)
  }
};

export default nextConfig;
