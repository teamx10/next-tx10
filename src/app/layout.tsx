import type { Metadata } from 'next';

import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { theme } from '@/lib/mui/theme';

import './globals.css';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

const seoConfig = {
  description:
    'Master poker with our comprehensive guides, training programs, and games. Learn poker strategies, combinations, and improve your skills.',
  keywords: ['poker', 'poker training', 'poker guide', 'poker strategy', 'poker combinations', 'solitaire'],
  title: 'TeamX10 - Poker Training & Games',
  url: '/'
};

export const metadata: Metadata = generateSEOMetadata(seoConfig);
export const dynamic = 'force-dynamic';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh'
            }}
          >
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
