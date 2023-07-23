/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import Recipes from '../../../../data/recipes.json';
import { usePathname } from 'next/navigation';

export default function RecipeModule() {
  const pathname = usePathname();
  const recipeSlug = pathname.split('/')[2];
  const recipe = Recipes.find((targetRecipe) => {
    if (targetRecipe.slug == recipeSlug) {
      return targetRecipe;
    }
  });
  const ingredients = recipe && recipe.ingredients.sort((a, b) => (a.id > b.id ? 1 : -1));
  const instructions = recipe && recipe.instructions.sort((a, b) => (a.id > b.id ? 1 : -1));

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
        className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
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
        <main className='mx-auto px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8'>
          {/* Product */}
          <div className='lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
            {/* Product image */}
            <div className='lg:col-span-4 lg:row-end-1'>
              <div className='aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100'>
                <img
                  src={recipe.picture}
                  alt={recipe.slug}
                  className='object-cover object-center hidden lg:block'
                />
              </div>
            </div>

            {/* Product details */}
            <div className='mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none px-4 sm:px-0'>
              <div className='flex flex-col-reverse'>
                <div className='mt-4'>
                  <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                    {recipe.title}
                  </h1>
                  <p className='mt-2 text-sm text-gray-500'>Chef: {recipe.profiles.username}</p>
                </div>
              </div>

              <p className='mt-6 text-gray-500'>{recipe.description}</p>
              <img
                src={recipe.picture}
                alt={recipe.slug}
                className='block lg:hidden w-full lg:h-auto rounded-lg mt-8'
              />

              <div className='border-t border-gray-200 pt-4'>
                <div className='prose prose-sm mt-4 text-gray-500'>
                  <ul role='list'>
                    {ingredients &&
                      ingredients.map((ingredient) => (
                        <li
                          key={ingredient.id}
                          className={
                            ingredient.amount === '' ? 'font-semibold pt-4 pb-2 -ml-2' : ''
                          }
                        >
                          {ingredient.amount} {ingredient.ingredient}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none px-4 sm:px-0 lg:px-12'>
            <h3 className='text-2xl font-bold text-gray-900 pb-4'>Instructions:</h3>
            <ul role='list'>
              {instructions &&
                instructions.map((instruction) => (
                  <li key={instruction.id} className='py-2 flex flex-col'>
                    {instruction.heading && (
                      <span className='font-bold pb-2 text-gray-500'>{instruction.heading}</span>
                    )}
                    <span className='text-gray-500'>{instruction.description}</span>
                  </li>
                ))}
            </ul>
          </div>
        </main>
      )}
    </div>
  );
}
