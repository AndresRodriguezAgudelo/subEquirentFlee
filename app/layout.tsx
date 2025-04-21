import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { AppStoreProvider } from '@/store/appStoreProvider';
import Wrapper from '@/shared/containers/Wrapper';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Equisoft Fleet',
  description: 'Equisoft Fleet',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <AppStoreProvider>
          <Wrapper>{children}</Wrapper>
        </AppStoreProvider>
      </body>
    </html>
  );
}
