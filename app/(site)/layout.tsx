import '../globals.css';
import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'My Online Cookbook',
  description: 'A better way to store recipes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='w-full h-full'>
      <body className='flex flex-col items-center justify-between w-full h-full'>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
