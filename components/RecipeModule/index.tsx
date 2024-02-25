'use client';

import type { iRecipe } from '@/api';

interface iRecipeModuleProps {
  recipe: iRecipe;
}

export default function RecipeModule({ recipe }: iRecipeModuleProps) {
  const ingredients = recipe && recipe.ingredients;
  const instructions = recipe && recipe.instructions;

  return (
    <div className='relative isolate'>
      <svg
        className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-cyan-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
            width={200}
            height={200}
            x='50%'
            y={-1}
            patternUnits='userSpaceOnUse'
          >
            <path d='M.5 200V.5H200' fill='none' />
          </pattern>
        </defs>
        <svg x='50%' y={-1} className='overflow-visible fill-cyan-50'>
          <path
            d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect
          width='100%'
          height='100%'
          strokeWidth={0}
          fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
        />
      </svg>
      <div
        className='absolute top-0 right-0 -ml-24 overflow-hidden left-1/2 -z-10 transform-gpu blur-3xl lg:ml-24 xl:ml-48'
        aria-hidden='true'
      >
        <div
          className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#e879f9] to-[#22d3ee] opacity-20'
          style={{
            clipPath:
              'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
          }}
        />
      </div>
      {recipe && (
        <main className='px-4 pb-24 mx-auto pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8'>
          {/* Product */}
          <div className='lg:grid lg:grid-cols-9 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
            {/* Product details */}
            <div className='max-w-2xl px-4 mx-auto mt-14 sm:mt-16 lg:col-span-3 lg:row-span-5 lg:row-end-1 lg:mt-0 lg:max-w-none sm:px-0'>
              <div className='flex flex-col-reverse'>
                <div className='mt-4'>
                  <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                    {recipe.title}
                  </h1>
                  <p className='mt-2 text-sm text-gray-500'>Chef: {recipe.chef}</p>
                </div>
              </div>
              {/* Product image */}
              {recipe.image && (
                <div className='lg:col-span-4 lg:row-end-1'>
                  <div className='overflow-hidden bg-gray-100 rounded-lg aspect-h-3 aspect-w-4'>
                    <picture>
                      <img
                        src={recipe.image}
                        alt={recipe.slug}
                        className='hidden object-cover object-center lg:block'
                      />
                    </picture>
                  </div>
                </div>
              )}

              <p className='mt-6 text-gray-500'>{recipe.description}</p>
              {recipe.image && (
                <picture>
                  <img
                    src={recipe.image}
                    alt={recipe.slug}
                    className='block w-full mt-8 rounded-lg lg:hidden lg:h-auto'
                  />
                </picture>
              )}

              <div className='pt-4 border-t border-gray-200'>
                <div className='mt-4 prose-sm prose text-gray-500'>
                  <h3 className='pb-4 text-2xl font-bold text-gray-900'>Ingredients:</h3>
                  <ul role='list'>
                    {ingredients &&
                      Object.values(ingredients).map((ingredient) => (
                        <li key={Math.random()} className='flex flex-col py-2 text-gray-500'>
                          {ingredient}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full max-w-2xl px-4 mx-auto mt-16 lg:col-span-4 lg:mt-0 lg:max-w-none sm:px-0 lg:px-12'>
            <h3 className='pb-4 text-2xl font-bold text-gray-900'>Instructions:</h3>
            <ul className='list-decimal'>
              {instructions &&
                instructions.map((instruction, index) => (
                  <li key={Math.random()} className='flex flex-col py-2 text-gray-500'>
                    {index + 1}. {instruction}
                  </li>
                ))}
            </ul>
          </div>
        </main>
      )}
    </div>
  );
}
