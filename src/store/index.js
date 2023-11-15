import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';

import recipeMiddleware from '../middlewares/recipeMiddleware';
import authMiddleware from '../middlewares/authMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(recipeMiddleware, authMiddleware)
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancer
);

export default store;
