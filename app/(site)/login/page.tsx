/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import { useEffect, useState } from 'react';
import LoginForm from '@/components/LoginForm';
import { UserValidation } from '@/api';
import { useRouter } from 'next/navigation';
import LoggedInSplash from '@/components/LoggedInSplash';

export default function Login() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const router = useRouter();
  useEffect(() => {
    const validateUser = async () => {
      const res = await UserValidation();
      const status = res.status;
      if (status === 'success') {
        const fullName = res.data.user.name as string;
        const firstName = fullName.split(' ')[0];
        setName(firstName);
        setUserLoggedIn(true);
        setTimeout(() => {
          router.push('/admin');
        }, 1000);
      } else {
        return;
      }
    };
    validateUser();
  }, []);
  return <>{userLoggedIn ? <LoggedInSplash name={name} /> : <LoginForm />}</>;
}
