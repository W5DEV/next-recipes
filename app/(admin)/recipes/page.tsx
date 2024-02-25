/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import type { iRecipe } from '@/api';
import { useEffect, useState } from 'react';
import Dashboard from '@/components/Dashboard';
import { GetAllRecipes, UserValidation } from '@/api';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();
  const [recipes, setRecipes] = useState<iRecipe[]>([]);
  useEffect(() => {
    const getRecipes = async () => {
      const res = await GetAllRecipes();
      const status = res.status;
      if (status === 'success') {
        const allRecipes = res.data as iRecipe[];
        setRecipes(allRecipes);
      } else {
        setRecipes([]);
      }
    };
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
    getRecipes();
  }, [router]);
  return (
    <Dashboard name={name}>
      <ul>
        {recipes.map((recipe) => (
          <li
            onClick={() => router.push(`/recipes/${recipe.slug}?id=${recipe.id}`)}
            key={recipe.id}
            className='p-4 border-b rounded-md cursor-pointer group hover:bg-gray-200'
          >
            <h2 className='p-2 text-lg font-bold group-hover:underline'>{recipe.title}</h2>
            <p className='text-sm text-gray-700'>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </Dashboard>
  );
}
