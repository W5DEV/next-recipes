export default function RoadmapComponent() {
  return (
    <div className='flex flex-col items-center justify-center w-full p-8'>
      <div className='w-full text-2xl font-bold'>Development Roadmap</div>
      <div className='flex flex-col items-start justify-start w-full'>
        <div className='text-xl font-bold'>Coming Soon:</div>
        <ul className='list-disc list-inside'>
          <li>User Login</li>
          <li>Recipe Upload</li>
          <li>Recipe Edit</li>
          <li>Credentials Request</li>
          <>Recipe Search</>
          <li>User Favorites</li>
        </ul>
      </div>
    </div>
  );
}
