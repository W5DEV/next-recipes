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
  const [isLoaded, setIsLoaded] = useState(false);
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
        setIsLoaded(true);
        setUserLoggedIn(true);
        setName(firstName);
        setTimeout(() => {
          router.push('/admin');
        }, 1500);
      } else {
        setIsLoaded(true);
        setUserLoggedIn(false);
      }
    };
    validateUser();
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div>Loading...</div>
      ) : userLoggedIn ? (
        <LoggedInSplash name={name} />
      ) : (
        <LoginForm />
      )}
    </>
  );
}
