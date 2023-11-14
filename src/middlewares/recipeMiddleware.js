import axios from 'axios';
import { FETCH_RECIPES, setRecipes } from '../actions/recipes';

const recipeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios
        .get('http://localhost:3001/recipes')
        .then((response) => {
          store.dispatch(setRecipes(response.data));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Erreur lors de la récupération des recettes :', error);
        });
      break;

    default:
  }

  next(action);
};

export default recipeMiddleware;
