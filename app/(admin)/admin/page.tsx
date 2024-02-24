/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import { useEffect, useState } from 'react';
import Dashboard from '@/components/Dashboard';
import { UserValidation } from '@/api';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();
  useEffect(() => {
    const validateUser = async () => {
      const res = await UserValidation();
      const status = res.status;
      if (status !== 'success') {
        router.push('/login');
      } else {
        const fullName = res.data.user.name as string;
        const firstName = fullName.split(' ')[0];
        setName(firstName);
      }
    };
    validateUser();
  }, [router]);
  return (
    <Dashboard name={name}>
      <div className='w-full h-full'>
        {name ? <h1>Welcome, {name}!</h1> : <span>Admin portal coming soon!</span>}
      </div>
    </Dashboard>
  );
}
