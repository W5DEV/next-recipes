'use client';
import Link from 'next/link';
import Logo from '../Logo';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Demo', href: '/demo' },
  { name: 'Roadmap', href: '/roadmap' },
];

export default function Navigation() {
  return (
    <div className='sticky top-0 z-50 w-screen bg-gradient-to-b from-white to-transparent'>
      <nav
        className='flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8'
        aria-label='Global'
      >
        <div className='flex mx-2 lg:mx-12 lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Logo />
          </Link>
        </div>
        <div className='flex gap-x-2 lg:gap-x-12'>
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
        <div className='flex lg:flex-1 lg:justify-end'>
          <Link href={'/login'} className='text-sm font-semibold leading-6 text-gray-900'>
            Log in <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
