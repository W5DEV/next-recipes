'use client';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'My Recipes', href: '#', current: true },
  { name: 'Favorites', href: '#', current: false },
  { name: 'Shared', href: '#', current: false },
];
const userNavigation = [
  { name: 'My Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='min-h-full'>
        <div className='pb-32 bg-cyan-600'>
          <Disclosure
            as='nav'
            className='border-b border-opacity-25 bg-cyan-600 border-cyan-400 lg:border-none'
          >
            {({ open }) => (
              <>
                <div className='px-2 mx-auto max-w-7xl sm:px-4 lg:px-8'>
                  <div className='relative flex items-center justify-between h-16 lg:border-b lg:border-cyan-400 lg:border-opacity-25'>
                    <div className='flex items-center px-2 lg:px-0'>
                      <div className='flex-shrink-0'>
                        <img
                          className='block w-8 h-8'
                          src='https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=400'
                          alt='Your Company'
                        />
                      </div>
                      <div className='hidden lg:ml-10 lg:block'>
                        <div className='flex space-x-4'>
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-cyan-700 text-white'
                                  : 'text-white hover:bg-cyan-500 hover:bg-opacity-75',
                                'rounded-md py-2 px-3 text-sm font-medium',
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
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
                    <div className='flex lg:hidden'>
                      {/* Mobile menu button */}
                      <Disclosure.Button className='relative inline-flex items-center justify-center p-2 rounded-md text-cyan-200 bg-cyan-600 hover:bg-cyan-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600'>
                        <span className='absolute -inset-0.5' />
                        <span className='sr-only'>Open main menu</span>
                        {open ? (
                          <XMarkIcon className='block w-6 h-6' aria-hidden='true' />
                        ) : (
                          <Bars3Icon className='block w-6 h-6' aria-hidden='true' />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className='hidden lg:ml-4 lg:block'>
                      <div className='flex items-center'>
                        <button
                          type='button'
                          className='relative flex-shrink-0 p-1 rounded-full text-cyan-200 bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600'
                        >
                          <span className='absolute -inset-1.5' />
                          <span className='sr-only'>View notifications</span>
                          <BellIcon className='w-6 h-6' aria-hidden='true' />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as='div' className='relative flex-shrink-0 ml-3'>
                          <div>
                            <Menu.Button className='relative flex text-sm text-white rounded-full bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600'>
                              <span className='absolute -inset-1.5' />
                              <span className='sr-only'>Open user menu</span>
                              <img className='w-8 h-8 rounded-full' src={user.imageUrl} alt='' />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter='transition ease-out duration-100'
                            enterFrom='transform opacity-0 scale-95'
                            enterTo='transform opacity-100 scale-100'
                            leave='transition ease-in duration-75'
                            leaveFrom='transform opacity-100 scale-100'
                            leaveTo='transform opacity-0 scale-95'
                          >
                            <Menu.Items className='absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700',
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className='lg:hidden'>
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as='a'
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-cyan-700 text-white'
                            : 'text-white hover:bg-cyan-500 hover:bg-opacity-75',
                          'block rounded-md py-2 px-3 text-base font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className='pt-4 pb-3 border-t border-cyan-700'>
                    <div className='flex items-center px-5'>
                      <div className='flex-shrink-0'>
                        <img className='w-10 h-10 rounded-full' src={user.imageUrl} alt='' />
                      </div>
                      <div className='ml-3'>
                        <div className='text-base font-medium text-white'>{user.name}</div>
                        <div className='text-sm font-medium text-cyan-300'>{user.email}</div>
                      </div>
                      <button
                        type='button'
                        className='relative flex-shrink-0 p-1 ml-auto rounded-full text-cyan-200 bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600'
                      >
                        <span className='absolute -inset-1.5' />
                        <span className='sr-only'>View notifications</span>
                        <BellIcon className='w-6 h-6' aria-hidden='true' />
                      </button>
                    </div>
                    <div className='px-2 mt-3 space-y-1'>
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as='a'
                          href={item.href}
                          className='block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-cyan-500 hover:bg-opacity-75'
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className='py-10'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <h1 className='text-3xl font-bold tracking-tight text-white'>Dashboard</h1>
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
