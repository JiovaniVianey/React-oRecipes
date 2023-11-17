import { SET_RECIPES, SET_FAVORITE_RECIPES } from '../actions/recipes';

export const initialState = {
  list: [],
  favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        list: action.recipes,
      };
    case SET_FAVORITE_RECIPES:
      return {
        ...state,
        favorites: action.recipes,
      };
    default:
      return state;
  }
};

export default reducer;
