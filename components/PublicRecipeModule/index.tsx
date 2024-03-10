'use client';

import type { iRecipe } from '@/api';
import Link from 'next/link';

interface iRecipeModuleProps {
  recipe: iRecipe;
}

export default function PublicRecipeModule({ recipe }: iRecipeModuleProps) {
  const ingredients = recipe && recipe.ingredients;
  const instructions = recipe && recipe.instructions;

  return (
    <div className='flex flex-col items-start justify-center w-full px-8 py-12 bg-white lg:px-8'>
      <div className='flex items-center justify-between w-full h-auto mb-6'>
        <div className=''>
          <Link
            href={'/recipes'}
            className='text-xl font-semibold leading-6 text-cyan-800 hover:underline'
          >
            <span aria-hidden='true'>&larr;</span>Back
          </Link>
        </div>
      </div>
      <div className='text-base leading-7 text-gray-700'>
        <p className='text-base font-semibold leading-7 text-cyan-600'>{recipe.category}</p>
        <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          {recipe.title}
        </h1>
        <p className='py-1 text-sm italic font-semibold leading-7 text-slate-600 opacity-40'>
          Chef: {recipe.chef}
        </p>
        <p className='mt-2 text-lg leading-8 '>{recipe.description}</p>
        <div className='max-w-2xl mt-6'>
          <h2 className='mt-8 text-xl font-semibold tracking-tight text-gray-800'>Ingredients</h2>
          <ul role='list' className='max-w-xl mt-8 space-y-2 text-gray-600'>
            {ingredients &&
              Object.values(ingredients).map((ingredient) =>
                ingredient.includes('::') ? (
                  <li
                    key={Math.random()}
                    className='flex items-center justify-start w-full gap-x-3'
                  >
                    <span className='flex-1 font-bold'>{ingredient.replace('::', '')}</span>
                  </li>
                ) : (
                  <li
                    key={Math.random()}
                    className='flex items-center justify-start w-full gap-x-3'
                  >
                    <span className='flex items-center justify-center w-4 h-4 text-xs font-bold text-center text-white border-2 border-cyan-600'></span>
                    <span className='flex-1'>{ingredient}</span>
                  </li>
                ),
              )}
          </ul>
        </div>
        <div className='max-w-2xl mt-10'>
          <h2 className='mt-8 text-xl font-semibold tracking-tight text-gray-800'>Instructions</h2>
          <ul role='list' className='w-full mt-8 space-y-2 text-gray-600'>
            {instructions &&
              instructions.map((instruction, index) =>
                instruction.includes('::') ? (
                  <li key={Math.random()} className='flex flex-row gap-4 py-2 text-gray-500'>
                    <span className='flex-1 font-bold'>{instruction.replace('::', '')}</span>
                  </li>
                ) : (
                  <li key={Math.random()} className='flex flex-row gap-4 py-2 text-gray-500'>
                    <span className='flex items-center justify-center w-8 h-8 text-xs font-bold text-center text-white rounded-full bg-cyan-600'>
                      {index + 1}
                    </span>
                    <span className='flex-1'>{instruction}</span>
                  </li>
                ),
              )}
          </ul>
        </div>
        <div className='flex flex-row items-center justify-start gap-2 py-4 opacity-40'>
          <p className='text-base italic font-normal leading-7 text-gray-600'>Keywords:</p>
          {recipe.tags.map((tag) => {
            return <p className='text-base italic font-normal leading-7 text-gray-600'>{tag}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
