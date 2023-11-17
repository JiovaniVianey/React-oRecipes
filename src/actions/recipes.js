export const SET_RECIPES = 'SET_RECIPES';
export const SET_FAVORITE_RECIPES = 'SET_FAVORITE_RECIPES';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_FAVORITE_RECIPES = 'FETCH_FAVORITE_RECIPES';

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  recipes,
});

export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const setFavoriteRecipes = (recipes) => ({
  type: SET_RECIPES,
  recipes,
});

export const fetchFavoriteRecipes = () => ({
  type: FETCH_FAVORITE_RECIPES,
});
