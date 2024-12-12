import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/app/Providers';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const RootLayout = ({
  children
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en" className="antialiased dark">
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
