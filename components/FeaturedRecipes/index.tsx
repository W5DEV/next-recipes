/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Recipes from '../../data/recipes.json';
import Image from 'next/image';

export default function Example() {
  return (
    <div className='relative isolate'>
      <div className='px-6 py-24 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            A taste of the app
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>
            Check out a curated selection of recipes below and revolutionize your cooking experience
          </p>
        </div>
        <div className='flow-root mt-4'>
          <div className='-my-2'>
            <div className='box-content relative py-2 overflow-x-auto h-80'>
              <div className='absolute flex px-4 space-x-8 sm:px-6 lg:px-8 '>
                {Recipes.map((recipe) => (
                  <a
                    key={recipe.id}
                    href={`/demo/${recipe.slug}`}
                    className='relative flex flex-col w-56 p-6 overflow-hidden rounded-lg h-80 hover:opacity-75'
                  >
                    <span aria-hidden='true' className='absolute inset-0'>
                      <Image
                        fill
                        quality={25}
                        src={recipe.image}
                        alt=''
                        className='object-cover object-center w-full h-full'
                      />
                    </span>
                    <span
                      aria-hidden='true'
                      className='absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800'
                    />
                    <div className='relative flex flex-col mt-auto'>
                      <span className='text-lg font-bold text-left text-white'>{recipe.title}</span>
                      <span className='mt-2 text-sm italic text-left text-white'>
                        {recipe.category}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
