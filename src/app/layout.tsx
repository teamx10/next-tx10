import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/lib/mui/theme';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Box } from '@mui/material';
import './globals.css';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

const seoConfig = {
  title: 'TeamX10 - Poker Training & Games',
  description: 'Master poker with our comprehensive guides, training programs, and games. Learn poker strategies, combinations, and improve your skills.',
  keywords: ['poker', 'poker training', 'poker guide', 'poker strategy', 'poker combinations', 'solitaire'],
  url: '/',
};

export const metadata: Metadata = generateSEOMetadata(seoConfig);
export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
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
