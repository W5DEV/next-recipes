interface LogoProps {
  color?: string;
  height?: string;
}

export default function Logo({ color, height }: LogoProps) {
  return (
    <svg
      version='1.2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 286 286'
      height={height ?? '65'}
      fill={color ?? '#06b6d4'}
      className='w-auto h-auto'
    >
      <path
        fillRule='evenodd'
        className='a'
        d='M248.6 83.2v186.4c0 3-2.5 5.4-5.5 5.4h-173c-17.3 0-29.9-13.8-29.9-32.8V44.9C40.2 27.4 56.7 12 75.5 12h167.6c2.2 0 4.2 1.3 5 3.4.9 2 .4 4.4-1.1 6-12.2 12.2-12.2 45.8 0 58 .6.7 1 1.5 1.3 2.4q.1.4.1.8c.1.2.2.4.2.6zm-11 5.5H75.5c-9.2 0-17.9-3.7-24.3-9.6v163.1c0 10.9 5.8 21.9 18.9 21.9h167.5zM85.7 109c-2.2-2.1-2.2-5.6 0-7.7 2.1-2.2 5.6-2.2 7.7 0l32.9 32.8c1.1 1.1 1.6 2.5 1.6 3.9 0 12.7 5 24.6 13.9 33.6l1.5 1.4 18.5-16.4c-8.8-12.8-7.6-30.5 3.8-41.8 6.1-6.2 16.1-11.3 26-13.4 12-2.6 22.1-.6 28.3 5.6 6.2 6.2 8.2 16.3 5.6 28.3-2.1 9.9-7.2 19.9-13.4 26-6.2 6.2-14.4 9.6-23.2 9.6-7.1 0-13.8-2.3-19.4-6.5l-18.4 16.4 63 63c2.1 2.1 2.1 5.6 0 7.7-1.1 1.1-2.5 1.6-3.9 1.6s-2.8-.5-3.9-1.6l-63.4-63.4-71.6 63.6c-1.1.9-2.4 1.4-3.7 1.4-1.5 0-3-.6-4.1-1.8-2-2.3-1.8-5.8.5-7.8l71.1-63.2-1-1c-9-8.9-20.9-13.9-33.6-13.9-1.4 0-2.8-.6-3.9-1.6l-32.9-32.9c-2.1-2.1-2.1-5.6 0-7.7 2.2-2.2 5.7-2.2 7.8 0l31.3 31.3c6.3.2 12.3 1.6 18 3.8-2.1-5.7-3.5-11.7-3.8-18zM51.2 55.8c0 11.5 11.6 21.9 24.4 21.9h157.1c-3.2-6.3-5-14-5.6-21.9h-154c-3 0-5.4-2.4-5.4-5.5 0-3 2.4-5.4 5.4-5.4h154c.6-7.9 2.4-15.6 5.6-22H75.6c-12.8 0-24.4 10.5-24.4 22zm122.2 97.6c8.3 8.3 22.7 8.3 31 0 4.7-4.6 8.8-12.6 10.4-20.5 1.8-8.1.8-14.8-2.6-18.2-2.4-2.4-6.3-3.4-10.8-3.4-9.4 0-21.5 4.6-28 11.2-8.6 8.5-8.6 22.4 0 30.9z'
      ></path>
    </svg>
  );
}
