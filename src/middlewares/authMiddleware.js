import axios from 'axios';
import { LOGIN_REQUEST, loginSuccess } from '../actions/user';
import { fetchFavoriteRecipes } from '../actions/recipes';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      axios
        .post('http://localhost:3001/login', {
          email: store.getState().user.email,
          password: store.getState().user.password,
        })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
          store.dispatch(
            loginSuccess(response.data.pseudo, response.data.token)
          );

          store.dispatch(fetchFavoriteRecipes());
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
      break;

    default:
  }
  next(action);
};

export default authMiddleware;
