'use client';

import Logo from '@/app/components/Logo';
import LoginForm from '@/app/components/LoginForm';

export default function LoginPage() {
  return (
    <main className='flex items-center justify-center md:h-screen'>
      <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
        <div className='flex items-end w-full h-20 p-3 bg-blue-500 rounded-lg md:h-36'>
          <div className='w-32 text-white md:w-36'>
            <Logo color={'#06b6d4'} />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
