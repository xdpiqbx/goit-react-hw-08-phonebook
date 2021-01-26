import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  addContactRequest,
  addContactSuccess,
  addContactError,

  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,

  filterContacts,
} from './actions';

const reducerItems = createReducer([], {
  [fetchContactsSuccess]: (_, action) => {
    return action.payload
  },

  [addContactSuccess]: (state, action) => {
    return [...state, action.payload]
  },

  [deleteContactSuccess]: (state, action) => {
    return state.filter(({ id }) => id !== action.payload)
  },
});

const reducerFilter = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

const reducerLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]:() => true,
  [deleteContactSuccess]:() => false,
  [deleteContactError]:() => false
  }
)

export default combineReducers({
  items: reducerItems,
  filter: reducerFilter,
  loading: reducerLoading
});
