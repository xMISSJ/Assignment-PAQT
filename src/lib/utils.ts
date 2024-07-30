import { Assignments } from "../data/assignment";
import { Recipes } from "../data/recipes";

export function getAssignmentByRoute(route: string): Assignment {
  const assignment = Assignments.find((assignment) => assignment.route === route);
  if (!assignment) {
    throw new Error(`Assignment data not found for route: ${route}`);
  }
  return assignment as Assignment;
}

export function getRecipeByRecipeName(name: string): Recipe {
  const recipe = Recipes.find((recipe) => recipe.recipe_name === name);
  if (!recipe) {
    throw new Error(`Recipe data not found for recipe name: ${recipe}`);
  }
  return recipe as Recipe;
}

