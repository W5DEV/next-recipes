/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import RecipeModule from '@/components/RecipeModule';
import { GetRecipeById } from '@/api';
import type { iAllRecipes, iRecipe } from '@/api';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RecipePage() {
  const searchParams = useSearchParams();
  const recipeId = searchParams.get('id');
  const [selectedRecipe, setSelectedRecipe] = useState<iRecipe | undefined>();
  const [isLoading, setIsLoading] = useState(true);
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
      {!isLoading && selectedRecipe ? (
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
