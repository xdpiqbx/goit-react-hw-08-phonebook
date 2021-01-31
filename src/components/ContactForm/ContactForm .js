import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={name}
          onChange={onChangeInputHandler}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          name="number"
          value={number}
          onChange={onChangeInputHandler}
        />
        <Button variant="contained" color="primary" type="submit">
          Add contact
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
