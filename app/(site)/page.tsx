'use client';
import Hero from '../../components/Hero';
import FeaturedRecipes from '../../components/FeaturedRecipes';
import CTA from '../../components/CTA';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className='flex-col hidden sm:flex'>
        <Hero />
        <FeaturedRecipes />
        <CTA />
      </div>
      <div className='flex flex-col sm:hidden'>
        <button
          onClick={() => router.push('/login')}
          className='px-8 py-4 text-3xl font-bold text-white rounded-2xl bg-cyan-600 outline outline-cyan-600 outline-2 hover:bg-white hover:text-cyan-600'
        >
          Login
        </button>
      </div>
    </main>
  );
}
