import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  CHANGE_FIELD,
} from '../actions/user';

export const initialState = {
  error: null,
  isLogged: false,
  nickname: '',
  email: '',
  password: '',
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
      };
    case CHANGE_FIELD:
      if (action.identifier === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }
      return {
        ...state,
        password: action.newValue,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        nickname: action.nickname,
        email: '',
        password: '',
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default authReducer;
