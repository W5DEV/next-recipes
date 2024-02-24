import '../../globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body>{children}</body>
    </html>
  );
}
