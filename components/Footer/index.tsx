import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Contact', href: 'https://greatidea.dev/', target: '_blank' },
    { name: 'Login', href: '/admin' },
  ],
};

export default function Example() {
  return (
    <footer className='relative z-50 py-6 bg-transparent'>
      <div className='flex flex-col items-center justify-center gap-2 px-6 overflow-hidden max-w-7xl lg:px-8'>
        <nav className='flex flex-row items-center justify-center gap-4' aria-label='Footer'>
          {navigation.main.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className='text-sm leading-6 text-gray-600 hover:text-cyan-500'
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className='text-xs leading-5 text-center text-gray-500'>
          &copy; 2024 Great Idea Development
        </p>
      </div>
    </footer>
  );
}
