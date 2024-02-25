import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Online Cookbook',
  description: 'A better way to store recipes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
