/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { iNewRecipe, iRecipe } from '@/api';
import { CreateRecipe, UpdateRecipe } from '@/api';
import type { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';

const emptyRecipe: iRecipe = {
  id: '',
  title: '',
  slug: '',
  description: '',
  category: '',
  chef: '',
  ingredients: [''],
  instructions: [''],
  tags: [''],
  image: '',
  created_at: '',
  updated_at: '',
};

export default function RecipeForm({ recipe }: { recipe?: iRecipe }) {
  const [originalRecipe] = useState<iRecipe>(recipe || emptyRecipe);
  const [title, setTitle] = useState<string>(recipe?.title || '');
  const [slug, setSlug] = useState<string>(recipe?.slug || '');
  const router = useRouter();

  useEffect(() => {
    setSlug(title.toLowerCase().replace(/ /g, '-'));
  }, [recipe, title]);

  const handleSaveRecipe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const recipeFormData = Object.fromEntries(formData.entries());
    if (recipe) {
      const updatedRecipe: iRecipe = {
        id: originalRecipe.id,
        title: recipeFormData.title as string,
        slug: slug,
        description: recipeFormData.description as string,
        category: recipeFormData.category as string,
        chef: recipeFormData.chef as string,
        ingredients: (recipeFormData.ingredients as string)
          .split('\n')
          .map((ingredient) => ingredient.trim()),
        instructions: (recipeFormData.instructions as string)
          .split('\n')
          .map((instruction) => instruction.trim()),
        tags: (recipeFormData.tags as string).split(',').map((tag) => tag.trim()),
        image: recipeFormData.image as string,
        created_at: originalRecipe.created_at,
        updated_at: new Date().toISOString(),
      };
      const updateRecipe = async () => {
        await UpdateRecipe(updatedRecipe.id, updatedRecipe).then((response: AxiosResponse) => {
          console.log('updatedRecipe: ', response);
          router.push(`/admin`);
        });
      };
      updateRecipe();
    } else {
      const createRecipe = async () => {
        const newRecipe: iNewRecipe = {
          title: recipeFormData.title as string,
          slug: slug,
          description: recipeFormData.description as string,
          category: recipeFormData.category as string,
          chef: recipeFormData.chef as string,
          ingredients: (recipeFormData.ingredients as string)
            .split('\n')
            .map((ingredient) => ingredient.trim()),
          instructions: (recipeFormData.instructions as string)
            .split('\n')
            .map((instruction) => instruction.trim()),
          tags: (recipeFormData.tags as string).split(',').map((tag) => tag.trim()),
          image: recipeFormData.image as string,
        };
        await CreateRecipe(newRecipe).then((response: AxiosResponse) => {
          console.log('createdRecipe: ', response);
          router.push('/admin');
        });
      };
      createRecipe();
    }
  };
  return (
    <div className='flex flex-col items-start justify-center w-5/6 h-auto px-4 py-10 bg-white'>
      <form
        className='flex flex-col items-start justify-center w-full h-full gap-3'
        onSubmit={(event) => handleSaveRecipe(event)}
      >
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='text-xl font-bold' htmlFor='title'>
            Title
            <p className='text-sm italic font-normal opacity-40'>
              This should be a unique, catchy title that signifies what this recipe is.
            </p>
          </label>
          <input
            className='w-full h-12 rounded-md'
            type='text'
            id='title'
            name='title'
            onChange={(event) => setTitle(event.target.value)}
            defaultValue={originalRecipe.title}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='text-xl font-bold' htmlFor='slug'>
            Slug
            <p className='text-sm italic font-normal opacity-40'>
              This field autopopulates based on the title.
            </p>
          </label>
          <input
            className='w-full h-12 rounded-md'
            disabled
            type='text'
            id='slug'
            name='slug'
            value={slug}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='text-xl font-bold' htmlFor='description'>
            Description
            <p className='text-sm italic font-normal opacity-40'>
              Use this area to explain what this recipe is all about and why it is special. Why do
              you like this recipe so much? Why should someone else try it?
            </p>
          </label>
          <textarea
            className='w-full h-48 rounded-md'
            id='description'
            name='description'
            defaultValue={originalRecipe.description}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='text-xl font-bold' htmlFor='category'>
            Category
            <p className='text-sm italic font-normal opacity-40'>
              What category does this recipe fall under? (e.g. breakfast, lunch, dinner, dessert,
              sides, soups, salads, etc.)
            </p>
          </label>
          <input
            className='w-full h-12 rounded-md'
            type='text'
            id='category'
            name='category'
            defaultValue={originalRecipe.category}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='text-xl font-bold' htmlFor='chef'>
            Chef
            <p className='text-sm italic font-normal opacity-40'>
              Who gets the credit for this recipe? (Hint: this should probably be you!)
            </p>
          </label>
          <input
            className='w-full h-12 rounded-md'
            type='text'
            id='chef'
            name='chef'
            defaultValue={originalRecipe.chef}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='text-xl font-bold' htmlFor='ingredients'>
            Ingredients
            <p className='text-sm italic font-normal opacity-40'>
              Put each ingredient on a new line by hitting enter. Do not try to space out the
              ingredients and make sure there are no extra trailing spaces.
            </p>
          </label>
          <textarea
            className='w-full h-48 rounded-md'
            id='ingredients'
            name='ingredients'
            defaultValue={originalRecipe.ingredients.join('\n')}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='text-xl font-bold' htmlFor='instructions'>
            Instructions
          </label>
          <p className='text-sm italic font-normal opacity-40'>
            Put each instruction on a new line by hitting enter. Do not try to space out the
            instructions and make sure there are no extra trailing spaces. No need to enter numbers!
          </p>
          <textarea
            className='w-full h-48 rounded-md'
            id='instructions'
            name='instructions'
            defaultValue={originalRecipe.instructions.join('\n')}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='text-xl font-bold' htmlFor='tags'>
            Keywords
            <p className='text-sm italic font-normal opacity-40'>
              Keywords should be memorable words to quickly describe the dish for quick referencing.
              Keywords should be separated by commas. (e.g. ground beef, steak, chicken, holiday
              meals, etc.)
            </p>
          </label>
          <input
            className='w-full h-12 rounded-md'
            type='text'
            id='tags'
            name='tags'
            defaultValue={originalRecipe.tags.join(', ')}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='text-xl font-bold' htmlFor='image'>
            Image
            <p className='text-sm italic font-normal opacity-40'>
              This field is purely optional and is currently not even used.
            </p>
          </label>
          <input
            className='w-full h-12 rounded-md'
            type='text'
            id='image'
            name='image'
            defaultValue={originalRecipe.image}
          />
        </div>
        <div className='flex flex-row items-center justify-between w-full gap-2 px-24'>
          <button
            className='px-8 py-4 font-semibold text-white rounded-lg cursor-pointer bg-cyan-600 outline outline-2 outline-cyan-600 hover:text-cyan-600 hover:bg-white'
            type='submit'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
