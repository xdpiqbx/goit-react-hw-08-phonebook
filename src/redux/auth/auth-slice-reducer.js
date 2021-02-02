import { createSlice } from '@reduxjs/toolkit';
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

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
  errorMessage: '',
};
const authSliceReducer = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //---------------------------- Register ----------------------------------
    [authRegisterRequest](state, _) {
      state.isLoggedIn = false;
    },
    [authRegisterSuccess](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authRegisterError](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.errorMessage = 'Something went wrong in [auth Register]';
    },
    //---------------------------- Login ----------------------------------
    [authLoginRequest](state, action) {
      state.isLoggedIn = false;
    },
    [authLoginSuccess](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authLoginError](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.errorMessage = 'Something went wrong in [auth Login]';
    },
    //---------------------------- Logout ----------------------------------
    [authLogoutRequest](state, action) {
      state.isLoggedIn = true;
    },
    [authLogoutSuccess](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authLogoutError](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.errorMessage = 'Something went wrong in [auth Logout]';
    },
    //---------------------------- Refresh ----------------------------------
    [authRefreshRequest](state, action) {
      state.isFetchingCurrentUser = action.payload;
    },
    [authRefreshSuccess](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authRefreshError](state, action) {
      state.isLoggedIn = false;
      state.isFetchingCurrentUser = false;
      state.error = action.payload;
      state.errorMessage = 'Something went wrong in [auth Refresh]';
    },
  },
});

export default authSliceReducer.reducer;
