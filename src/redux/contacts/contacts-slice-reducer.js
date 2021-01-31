import { createSlice } from '@reduxjs/toolkit';
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
  patchContactRequest,
  patchContactSuccess,
  patchContactError,
  filterContacts,
} from './contacts-actions';

const initialState = {
  items: [],
  filter: '',
  loading: false,
};

const contactsSliceReducer = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContactsSuccess](state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    [addContactSuccess](state, action) {
      state.loading = false;
      state.items = [...state.items, action.payload];
    },
    [deleteContactSuccess](state, action) {
      state.loading = false;
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    [patchContactSuccess](state, action) {
      state.loading = false;
      state.items = state.items.map(item =>
        item.id === action.payload.id ? action.payload : item,
      );
    },

    [filterContacts](state, action) {
      state.filter = action.payload;
    },

    [fetchContactsRequest](state, _) {
      state.loading = true;
    },
    [fetchContactsError](state, _) {
      state.loading = false;
    },

    [addContactRequest](state, _) {
      state.loading = true;
    },
    [addContactError](state, _) {
      state.loading = false;
    },

    [deleteContactRequest](state, _) {
      state.loading = true;
    },
    [deleteContactError](state, _) {
      state.loading = false;
    },

    [patchContactRequest](state, _) {
      state.loading = true;
    },
    [patchContactError](state, _) {
      state.loading = false;
    },
  },
});

export default contactsSliceReducer.reducer;
