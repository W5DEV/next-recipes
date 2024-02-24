export default function CTA() {
  return (
    <div className='relative bg-transparent py-8 z-40'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='max-w-2xl text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex flex-col'>
          <h2 className='inline sm:block'>Ready to experience a cooking revolution?</h2>{' '}
          <p className='inline sm:block text-xl mt-4 font-medium'>
            Sign up below to request access!
          </p>
        </div>
        <form className='mt-10 max-w-md'>
          <div className='flex gap-x-4'>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6'
              placeholder='Enter your email'
            />
            <button
              type='submit'
              className='flex-none rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500'
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
