import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import '@/styles/globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: "Web app that mimics Spotify's UI and functionality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${figtree.variable}`}>{children}</body>
    </html>
  );
}
