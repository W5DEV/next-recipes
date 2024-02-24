/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Recipes from '../../data/recipes.json';
import Image from 'next/image';

export default function Example() {
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
