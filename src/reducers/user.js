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
  token: '',
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        nickname: action.nickname,
        token: action.token,
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
