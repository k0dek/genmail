import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Email HTML Generator AI',
  description: 'Generate beautiful HTML email templates in seconds with AI',
  keywords: ['email generator', 'html templates', 'ai generator', 'email templates'],
  authors: [{ name: 'Email HTML Generator AI' }],
  openGraph: {
    title: 'Email HTML Generator AI',
    description: 'Generate beautiful HTML email templates in seconds with AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email HTML Generator AI',
    description: 'Generate beautiful HTML email templates in seconds with AI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}