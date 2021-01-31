import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import Contact from '../Contact';
import data from './data.json';
import s from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const isFilter = '' !== useSelector(contactsSelectors.getFilter);
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchedContacts());
  }, [dispatch]);

  const defaultData = async () => {
    // иногда добавлялись не все контакты
    await data.map(contact => dispatch(contactsOperations.addContact(contact)));
  };

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
      return (
        <>
          <h2>There is no contacts</h2>
          {!isFilter && (
            <button
              className={s.ContactForm__btn}
              type="button"
              onClick={defaultData}
            >
              add default data
            </button>
          )}
        </>
      );
    }
  }
};

export default ContactList;
