'use client';
import Link from 'next/link';
import Logo from '../Logo';
import AlertBanner from '../AlertBanner';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Recipes', href: '/recipes' },
  { name: 'Roadmap', href: '/roadmap' },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = !pathname.toString().includes('admin') && !pathname.toString().includes('recipes');
  return (
    <div className='sticky top-0 z-50 w-screen bg-white'>
      <nav
        className='flex items-center justify-between px-6 py-2 mx-auto max-w-7xl lg:px-8'
        aria-label='Global'
      >
        <div className='flex flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>My Online Cookbook</span>
            <Logo height={'48'} />
          </Link>
        </div>
        <div className='flex gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='flex justify-end flex-1'>
          <Link href={'/login'} className='text-sm font-semibold leading-6 text-gray-900'>
            Log in <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </nav>
      {isHome && <AlertBanner />}
    </div>
  );
}
