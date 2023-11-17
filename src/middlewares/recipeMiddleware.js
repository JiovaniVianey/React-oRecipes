import axios from 'axios';
import {
  FETCH_FAVORITE_RECIPES,
  FETCH_RECIPES,
  setRecipes,
  setFavoriteRecipes,
} from '../actions/recipes';

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
    case FETCH_FAVORITE_RECIPES:
      axios
        .get(
          // URL
          'http://localhost:3001/favorites',
          // options (notamment les headers)
          {
            headers: {
              // nom: contenu
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          }
        )
        .then((response) => {
          store.dispatch(setFavoriteRecipes(response.data));
        });
      break;
    default:
  }

  next(action);
};

export default recipeMiddleware;
