import { createAction } from '@reduxjs/toolkit';

export const authRegisterRequest = createAction('auth/registerRequest');
export const authRegisterSuccess = createAction('auth/registerSuccess');
export const authRegisterError = createAction('auth/registerError');

export const authLoginRequest = createAction('auth/loginRequest');
export const authLoginSuccess = createAction('auth/loginSuccess');
export const authLoginError = createAction('auth/loginError');

export const authLogoutRequest = createAction('auth/logoutRequest');
export const authLogoutSuccess = createAction('auth/logoutSuccess');
export const authLogoutError = createAction('auth/logoutError');

export const authRefreshRequest = createAction('auth/refreshRequest');
export const authRefreshSuccess = createAction('auth/refreshSuccess');
export const authRefreshError = createAction('auth/refreshError');
