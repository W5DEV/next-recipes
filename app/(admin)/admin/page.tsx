/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import type { iRecipe } from '@/api';
import { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { GetAllRecipes, UserValidation } from '@/api';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import RecipeForm from '@/components/RecipeForm';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();
  const [recipes, setRecipes] = useState<iRecipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<iRecipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [createMode, setCreateMode] = useState(false);

  // on enter key press, call handleRecipeSearch
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleRecipeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchTerm]);

  const handleRecipeSearch = () => {
    if (searchTerm.length < 1) {
      setFilteredRecipes(recipes);
      return;
    }
    if (searchTerm.length > 0) {
      setFilteredRecipes(
        recipes.filter((recipe) => {
          const title = recipe.title.toLowerCase();
          const ingredients = recipe.ingredients.join(' ').toLowerCase();
          const category = recipe.category.toLowerCase();
          const tags = recipe.tags.join(' ').toLowerCase();
          return (
            title.includes(searchTerm.toLowerCase()) ||
            ingredients.includes(searchTerm.toLowerCase()) ||
            category.includes(searchTerm.toLowerCase()) ||
            tags.includes(searchTerm.toLowerCase())
          );
        }),
      );
    }
  };

  useEffect(() => {
    const getRecipes = async () => {
      const res = await GetAllRecipes();
      const status = res.status;
      if (status === 'success') {
        const allRecipes = res.data as iRecipe[];
        const sortedRecipes = allRecipes.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        setRecipes(sortedRecipes);
        setFilteredRecipes(sortedRecipes);
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
    <>
      <div className='min-h-full'>
        <div className='pb-32 bg-cyan-600'>
          <Disclosure
            as='nav'
            className='border-b border-opacity-25 bg-cyan-600 border-cyan-400 lg:border-none'
          >
            <>
              <div className='px-2 mx-auto max-w-7xl sm:px-4 lg:px-8'>
                <div className='relative flex items-center justify-between h-16 lg:border-b lg:border-cyan-400 lg:border-opacity-25'>
                  <div className='flex items-center px-2 lg:px-0'>
                    <a href='/' className='flex items-center flex-shrink-0 w-14 h-14 jusify-center'>
                      <picture>
                        <img src='./logo-white.png' className='w-full h-full' alt='cookbook logo' />
                      </picture>
                    </a>
                  </div>
                  <div className='flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end'>
                    <div className='w-full max-w-lg lg:max-w-xs'>
                      <label htmlFor='search' className='sr-only'>
                        Search
                      </label>
                      <div className='relative text-gray-400 focus-within:text-gray-600'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                          <MagnifyingGlassIcon className='w-5 h-5' aria-hidden='true' />
                        </div>
                        <input
                          id='search'
                          className='block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-500 sm:text-sm sm:leading-6'
                          placeholder='Search'
                          type='search'
                          name='search'
                          onChange={(e) => {
                            setSearchTerm(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Disclosure>
          <header className='py-10'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              {name ? (
                <h1 className='text-3xl font-bold tracking-tight text-white'>
                  {name}&apos;s Dashboard
                </h1>
              ) : (
                <span className='text-3xl font-bold tracking-tight text-white'>Dashboard</span>
              )}
            </div>
          </header>
        </div>

        <main className='-mt-32'>
          <div className='px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='px-5 py-6 bg-white rounded-lg shadow sm:px-6'>
              {!createMode && (
                <div className='flex items-center justify-end w-full h-auto p-4'>
                  <button
                    onClick={() => {
                      setCreateMode(true);
                    }}
                    className='px-6 py-2 text-xl font-bold text-white bg-green-600 rounded-2xl outline outline-green-600 outline-2 hover:bg-white hover:text-green-600'
                  >
                    Create New Recipe
                  </button>
                </div>
              )}
              {createMode ? (
                <>
                  <RecipeForm />
                  <div className='flex items-center justify-center w-full h-auto p-4'>
                    <button
                      onClick={() => setCreateMode(!createMode)}
                      className='px-6 py-2 text-xl font-bold text-white bg-red-600 rounded-2xl outline outline-red-600 outline-2 hover:bg-white hover:text-red-600'
                    >
                      Cancel (Discard Changes)
                    </button>
                  </div>
                </>
              ) : (
                <ul>
                  {filteredRecipes.map((recipe) => (
                    <li
                      onClick={() => router.push(`/admin/${recipe.slug}?id=${recipe.id}`)}
                      key={recipe.id}
                      className='p-4 border-b rounded-md cursor-pointer group hover:bg-gray-200'
                    >
                      <span className='flex flex-col items-start justify-center pb-2'>
                        <span className='flex flex-row items-center justify-between w-full'>
                          <h2 className='text-lg font-bold group-hover:underline'>
                            {recipe.title}
                          </h2>
                          <h3 className='text-base font-medium text-cyan-500'>{recipe.category}</h3>
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
                      <p className='text-xs text-gray-700 line-clamp-3'>{recipe.description}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
