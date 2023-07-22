import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
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
      <div className='overflow-hidden'>
        <div className='mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-32 lg:px-8 lg:pt-16'>
          <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
            <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                A better way to store recipes.
              </h1>
              <p className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                Stop wasting time searching through binders and boxes for your favorite recipes.
                Securely save your recipes in one place and access them anywhere.
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <Link
                  href='#'
                  className='rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400'
                >
                  Get started
                </Link>
                <Link href='#' className='text-sm font-semibold leading-6 text-gray-900'>
                  Live demo <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
            <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
              <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                <div className='relative h-72'>
                  <Image
                    src='/images/woman-cooking-with-stockpot.jpg'
                    alt=''
                    fill
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
              </div>
              <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                <div className='relative h-72'>
                  <Image
                    src='/images/chopping-peppers.jpg'
                    alt=''
                    fill
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
                <div className='relative h-72'>
                  <Image
                    src='/images/recipe-on-ipad.jpg'
                    alt=''
                    fill
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
              </div>
              <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                <div className='relative h-72'>
                  <Image
                    src='/images/woman-cooking-with-peppermill.jpg'
                    alt=''
                    fill
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
                <div className='relative h-72'>
                  <Image
                    src='/images/baking-with-cinnamon.jpg'
                    alt=''
                    fill
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
