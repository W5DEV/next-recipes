'use client';

import { Disclosure } from '@headlessui/react';

export default function Dashboard({ children, name }: { children: React.ReactNode; name: string }) {
  return (
    <>
      <div className='min-h-full'>
        <div className='pb-32 bg-cyan-600'>
          <Disclosure
            as='nav'
            className='border-b border-opacity-25 bg-cyan-600 border-cyan-400 lg:border-none'
          >
            <>
              <div className='px-2 mx-auto max-w-7xl sm:px-4 lg:px-8'>
                <div className='relative flex items-center justify-between h-16 lg:border-b lg:border-cyan-400 lg:border-opacity-25'>
                  <div className='flex items-center px-2 lg:px-0'>
                    <div className='flex-shrink-0'>
                      <picture>
                        <img src='./logo-white.png' className='w-full h-full' alt='cookbook logo' />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Disclosure>
          <header className='py-10'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              {name ? (
                <h1 className='text-3xl font-bold tracking-tight text-white'>
                  {name}&apos;s Dashboard
                </h1>
              ) : (
                <span className='text-3xl font-bold tracking-tight text-white'>Dashboard</span>
              )}
            </div>
          </header>
        </div>

        <main className='-mt-32'>
          <div className='px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='px-5 py-6 bg-white rounded-lg shadow sm:px-6'>{children}</div>
          </div>
        </main>
      </div>
    </>
  );
}
