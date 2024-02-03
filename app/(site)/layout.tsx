import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Online Cookbook',
  description: 'A better way to store recipes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='w-full h-full'>
      <body
        className={`${inter.className} flex flex-col justify-between items-center h-full w-full`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
