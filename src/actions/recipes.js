export const SET_RECIPES = 'SET_RECIPES';
export const FETCH_RECIPES = 'FETCH_RECIPES';

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  payload: recipes,
});

export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});
