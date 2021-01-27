import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;
export const getAllContacts = state => state.contacts.items;
export const getLoading = state => state.contacts.loading;

export const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    } else {
      return contacts;
    }
  },
);

// export const getFilteredContacts = state => {
//   const filter = getFilter(state);
//   const contacts = getAllContacts(state);
//   if (filter) {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     );
//   } else {
//     return contacts;
//   }
// };
