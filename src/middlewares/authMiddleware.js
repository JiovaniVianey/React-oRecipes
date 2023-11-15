import axios from 'axios';
import { LOGIN_REQUEST, loginSuccess } from '../actions/user';

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
          store.dispatch(loginSuccess(response.data.pseudo));
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
