/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import { GetRecipeById } from '@/api';
import type { iAllRecipes, iRecipe } from '@/api';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import RecipeForm from '@/components/RecipeForm';
import RecipeModule from '@/components/RecipeModule';
import Link from 'next/link';

export default function RecipePage() {
  const searchParams = useSearchParams();
  const recipeId = searchParams.get('id');
  const [selectedRecipe, setSelectedRecipe] = useState<iRecipe | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    if (!recipeId) {
      return;
    }
    const getRecipeById = async () => {
      const res = (await GetRecipeById(recipeId)) as iAllRecipes;
      setSelectedRecipe(res.data as unknown as iRecipe);
      setIsLoading(false);
    };
    if (recipeId) {
      getRecipeById();
    }
  }, []);

  return (
    <>
      {!editMode && (
        <div className='flex items-center justify-between w-full h-auto p-4'>
          <div className=''>
            <Link
              href={'/admin'}
              className='text-xl font-semibold leading-6 text-cyan-800 hover:underline'
            >
              <span aria-hidden='true'>&larr;</span>Back
            </Link>
          </div>
          <button
            onClick={() => setEditMode(!editMode)}
            className='px-6 py-2 text-xl font-bold text-white rounded-2xl bg-cyan-600 outline outline-cyan-600 outline-2 hover:bg-white hover:text-cyan-600'
          >
            Edit Recipe
          </button>
        </div>
      )}
      {editMode ? (
        <>
          <RecipeForm recipe={selectedRecipe} />
          <div className='flex items-center justify-center w-full h-auto p-4'>
            <button
              onClick={() => setEditMode(!editMode)}
              className='px-6 py-2 text-xl font-bold text-white bg-red-600 rounded-2xl outline outline-red-600 outline-2 hover:bg-white hover:text-red-600'
            >
              Cancel (Discard Changes)
            </button>
          </div>
        </>
      ) : !isLoading && selectedRecipe ? (
        <RecipeModule recipe={selectedRecipe} />
      ) : isLoading ? (
        <div className='flex flex-row items-center justify-center w-full h-full text-xl text-center bold'>
          Loading...
        </div>
      ) : (
        <div className='flex flex-row items-center justify-center w-full h-full text-xl text-center bold'>
          Recipe not found
        </div>
      )}
    </>
  );
}
