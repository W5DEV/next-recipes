import Hero from '../components/Hero';
import FeaturedRecipes from '../components/FeaturedRecipes';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedRecipes />
      <CTA />
    </main>
  );
}
