export default function AlertBanner() {
  return (
    <div className='flex items-center gap-x-6 bg-cyan-500 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'>
      <p className='w-full text-sm leading-6 text-center text-white'>
        <a href='/roadmap' className='animate-pulse'>
          <strong className='font-semibold'>Under Construction:&nbsp;</strong>
          This app is currently a work in progress and undergoing routine updates. Find out
          more...&nbsp;
          <span aria-hidden='true'>&rarr;</span>
        </a>
      </p>
    </div>
  );
}
