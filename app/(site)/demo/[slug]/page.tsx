'use client';

import Recipes from '../../../../data/recipes.json';
import { usePathname } from 'next/navigation';
import RecipeModule from '../../../../components/RecipeModule';

interface iRecipe {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  inactive: boolean;
  chef: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export default function RecipePage() {
  const recipes = Recipes;
  const pathname = usePathname();
  const recipeSlug = pathname.split('/')[2];

  const selectedRecipe = recipes.find((recipe) => recipe.slug === recipeSlug) as iRecipe;

  return (
    <>{selectedRecipe ? <RecipeModule recipe={selectedRecipe} /> : <div>Recipe not found</div>}</>
  );
}
