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
} from './contacts-actions';

import axios from 'axios';

const fetchedContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = contact => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

const patchContact = (contactId, patchedContact) => dispatch => {
  dispatch(patchContactRequest());
  axios
    .patch(`/contacts/${contactId}`, patchedContact)
    .then(({ data }) => dispatch(patchContactSuccess(data)))
    .catch(error => dispatch(patchContactError(error)));
};

const contactsOperations = {
  fetchedContacts,
  addContact,
  deleteContact,
  patchContact,
};

export default contactsOperations;
