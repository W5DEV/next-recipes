'use client';

import { Disclosure } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Logo from '../Logo';

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
                      <Logo height={'48'} color={'white '} />
                    </div>
                  </div>
                  <div className='flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end'>
                    <div className='w-full max-w-lg lg:max-w-xs'>
                      <label htmlFor='search' className='sr-only'>
                        Search
                      </label>
                      <div className='relative text-gray-400 focus-within:text-gray-600'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                          <MagnifyingGlassIcon className='w-5 h-5' aria-hidden='true' />
                        </div>
                        <input
                          id='search'
                          className='block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600 sm:text-sm sm:leading-6'
                          placeholder='Search'
                          type='search'
                          name='search'
                        />
                      </div>
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
