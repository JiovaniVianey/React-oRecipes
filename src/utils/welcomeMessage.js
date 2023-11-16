// eslint-disable-next-line import/prefer-default-export
export const generateWelcomeMessage = (recipeCount) => {
  if (recipeCount === 0) {
    return 'Bienvenue sur oRecipes. Reviens bientôt pour découvrir nos recettes';
  }
  if (recipeCount === 1) {
    return 'Bienvenue sur oRecipes, découvre notre recette';
  }
  return `Bienvenue sur oRecipes, découvre nos ${recipeCount} recettes`;
};
