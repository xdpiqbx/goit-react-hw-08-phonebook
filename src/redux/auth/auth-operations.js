import axios from 'axios';
import {
  authRegisterRequest,
  authRegisterSuccess,
  authRegisterError,
  authLoginRequest,
  authLoginSuccess,
  authLoginError,
  authLogoutRequest,
  authLogoutSuccess,
  authLogoutError,
  authRefreshRequest,
  authRefreshSuccess,
  authRefreshError,
} from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
//---------------------------------------------------------------------
/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = credentials => async dispatch => {
  dispatch(authRegisterRequest());
  try {
    const { data } = await axios.post('/users/signup', credentials);
    dispatch(authRegisterSuccess(data));
    token.set(data.token);
  } catch (error) {
    authRegisterError(error);
    // TODO: Добавить обработку ошибки error.message
  }
};
//---------------------------------------------------------------------
/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = credentials => async dispatch => {
  dispatch(authLoginRequest());
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    dispatch(authLoginSuccess(data));
  } catch (error) {
    authLoginError(error);
    // TODO: Добавить обработку ошибки error.message
  }
};
//---------------------------------------------------------------------
/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = () => async dispatch => {
  dispatch(authLogoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authLogoutSuccess());
  } catch (error) {
    dispatch(authLogoutError(error));
    // TODO: Добавить обработку ошибки error.message
  }
};
//---------------------------------------------------------------------
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 *
 */
const fetchCurrentUser = persistedToken => async dispatch => {
  if (persistedToken === null) {
    console.log('Токена нет, уходим из fetchCurrentUser');
    dispatch(authRefreshRequest(false));
    return;
  }
  dispatch(authRefreshRequest(true));
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    console.log(data);
    dispatch(authRefreshSuccess(data));
  } catch (error) {
    dispatch(authRefreshError(error));
  }
};

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
