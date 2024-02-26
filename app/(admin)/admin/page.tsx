/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import type { iRecipe } from '@/api';
import { useEffect, useState } from 'react';
import Dashboard from '@/components/Dashboard';
import { GetAllRecipes, UserValidation } from '@/api';
import { useRouter } from 'next/navigation';
import RecipeForm from '@/components/RecipeForm';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();
  const [recipes, setRecipes] = useState<iRecipe[]>([]);
  const [createMode, setCreateMode] = useState(false);

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
      console.log('admin status: ', res, status);
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
  }, []);

  return (
    <Dashboard name={name}>
      {!createMode ? (
        <div className='flex items-center justify-end w-full h-auto p-4'>
          <button
            onClick={() => setCreateMode(!createMode)}
            className='px-6 py-2 text-xl font-bold text-white bg-green-600 rounded-2xl outline outline-green-600 outline-2 hover:bg-white hover:text-green-600'
          >
            Create New Recipe
          </button>
        </div>
      ) : (
        <div className='flex items-center justify-start w-full h-auto p-4'>
          <div className='px-6 py-2 '>
            <button
              onClick={() => setCreateMode(!createMode)}
              className='text-xl font-semibold text-cyan-800 hover:underline'
            >
              <span aria-hidden='true'>&larr;</span>Back
            </button>
          </div>
        </div>
      )}
      {createMode ? (
        <RecipeForm />
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li
              onClick={() => router.push(`/recipes/${recipe.slug}?id=${recipe.id}`)}
              key={recipe.id}
              className='p-4 border-b rounded-md cursor-pointer group hover:bg-gray-200'
            >
              <span className='flex flex-col items-start justify-center pb-2'>
                <span className='flex flex-row items-center justify-start'>
                  <h2 className='text-lg font-bold group-hover:underline'>{recipe.title}</h2>
                </span>
                <span className='w-full truncate line-clamp-1'>
                  {recipe.tags.map((tag) => {
                    return (
                      <span key={tag} className='mr-2 text-sm text-gray-300 rounded-md'>
                        {tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}
                      </span>
                    );
                  })}
                </span>
              </span>
              <p className='text-xs text-gray-700'>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </Dashboard>
  );
}
