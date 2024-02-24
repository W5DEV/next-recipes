import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Demo', href: '/demo' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Login', href: '/admin' },
  ],
};

export default function Example() {
  return (
    <footer className='bg-transparent z-50 relative'>
      <div className='mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8'>
        <nav
          className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12'
          aria-label='Footer'
        >
          {navigation.main.map((item) => (
            <div key={item.name} className='pb-6'>
              <Link
                href={item.href}
                className='text-sm leading-6 text-gray-600 hover:text-gray-900'
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className='mt-10 text-center text-xs leading-5 text-gray-500'>
          &copy; 2023 Recipe Vault Online. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
