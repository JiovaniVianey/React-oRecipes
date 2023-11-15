export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const CHANGE_FIELD = 'CHANGE_FIELD';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (nickname) => ({
  type: LOGIN_SUCCESS,
  nickname,
});

export const logout = () => ({
  type: LOGOUT,
});

export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue,
  identifier,
});
