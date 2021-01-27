import { useSelector } from 'react-redux';

import { getFilter, getAllContacts, getLoading } from '../../redux/selectors';

import Contact from '../Contact';

import s from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(state =>
    getFilteredContacts(getAllContacts(state), getFilter(state)),
  );

  const isLoadingContacts = useSelector(state => getLoading(state));

  if (isLoadingContacts) {
    return <h2>Loading...</h2>;
  } else {
    if (contacts.length > 0) {
      return (
        <ul className={s.list}>
          {contacts.map(contact => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </ul>
      );
    } else {
      return <h2>There is no contacts</h2>;
    }
  }
};

const getFilteredContacts = (contacts, filter) => {
  if (filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  } else {
    return contacts;
  }
};

export default ContactList;
