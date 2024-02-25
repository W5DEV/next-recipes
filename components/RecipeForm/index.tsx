/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { iNewRecipe, iRecipe } from '@/api';
import { CreateRecipe, UpdateRecipe } from '@/api';
import type { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { useState } from 'react';

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
  const router = useRouter();

  const handleSaveRecipe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const recipeFormData = Object.fromEntries(formData.entries());
    if (recipe) {
      const updatedRecipe: iRecipe = {
        id: originalRecipe.id,
        title: recipeFormData.title as string,
        slug: recipeFormData.slug as string,
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
          slug: recipeFormData.slug as string,
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
          router.push('/recipes');
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
          <label className='font-bold font-2xl' htmlFor='title'>
            Title
          </label>
          <input
            className='w-full h-12 rounded-md'
            type='text'
            id='title'
            name='title'
            defaultValue={originalRecipe.title}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='font-bold font-2xl' htmlFor='slug'>
            URL
          </label>
          <input
            className='w-full h-12 rounded-md'
            type='text'
            id='slug'
            name='slug'
            defaultValue={originalRecipe.slug}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='font-bold font-2xl' htmlFor='description'>
            Description
          </label>
          <textarea
            className='w-full h-48 rounded-md'
            id='description'
            name='description'
            defaultValue={originalRecipe.description}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='font-bold font-2xl' htmlFor='category'>
            Category
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
          <label className='font-bold font-2xl' htmlFor='chef'>
            Chef
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
          <label className='font-bold font-2xl' htmlFor='ingredients'>
            Ingredients (Put each ingredient on a new line by hitting enter.)
          </label>
          <textarea
            className='w-full h-48 rounded-md'
            id='ingredients'
            name='ingredients'
            defaultValue={originalRecipe.ingredients.join('\n')}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='font-bold font-2xl' htmlFor='instructions'>
            Instructions (Put each step on a new line by hitting enter - no need to enter numbers!.)
          </label>
          <textarea
            className='w-full h-48 rounded-md'
            id='instructions'
            name='instructions'
            defaultValue={originalRecipe.instructions.join('\n')}
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <label className='font-bold font-2xl' htmlFor='tags'>
            Tags (Separate tags with a comma.)
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
          <label className='font-bold font-2xl' htmlFor='image'>
            Image
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
