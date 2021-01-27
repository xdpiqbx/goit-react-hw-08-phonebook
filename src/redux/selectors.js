export const getFilter = state => state.contacts.filter;
export const getAllContacts = state => state.contacts.items;
export const getLoading = state => state.contacts.loading;

//Можно еще так
// export const getFilteredContacts = (state) => {
//     const filter = getFilter
//     const contacts = getAllContacts
//     if (filter) {
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filter.toLowerCase()),
//       );
//     } else {
//       return contacts;
//     }
// };
