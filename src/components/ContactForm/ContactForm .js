import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

import s from './ContactForm.module.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const allContacts = useSelector(contactsSelectors.getAllContacts);
  const dispatch = useDispatch();

  const addUnicContactToList = newContact => {
    if (allContacts) {
      const res = allContacts.find(contact => contact.name === newContact.name);
      if (res) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }
    }
    dispatch(contactsOperations.addContact(newContact));
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    if (name && number) {
      addUnicContactToList({
        name,
        number,
      });
    }
    setName('');
    setNumber('');
  };

  const onChangeInputHandler = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'number':
        setNumber(value);
        return;
      default:
        return;
    }
  };

  return (
    <div className={s.ContactForm}>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span className={s.ContactForm__title}>Name</span>
          <input
            className={s.ContactForm__input}
            type="text"
            name="name"
            value={name}
            onChange={onChangeInputHandler}
          />
        </label>
        <label>
          <span className={s.ContactForm__title}>Phone</span>
          <input
            className={s.ContactForm__input}
            type="text"
            name="number"
            value={number}
            onChange={onChangeInputHandler}
          />
        </label>
        <button className={s.ContactForm__btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
