export default function LoggedInSplash({ name }: { name: string }) {
  return (
    <>
      <div className='flex flex-col justify-center flex-1 px-6 py-12 lg:px-8'>
        <div className='flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm'>
          <picture>
            <img src='./logo-maroon.png' className='w-32 h-32' alt='cookbook logo' />
          </picture>
          <h2 className='mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900'>
            Welcome, {name}! You are already logged in!
          </h2>
        </div>
      </div>
    </>
  );
}
