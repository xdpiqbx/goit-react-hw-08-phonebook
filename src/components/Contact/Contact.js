import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import ContactEdit from './ContactEdit';
import ContactListItem from './ContactListItem';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const [editContactId, setEditContactId] = useState('');
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const editIdHandler = id => {
    setEditContactId(id);
  };

  const allContacts = useSelector(contactsSelectors.getAllContacts);

  const addUnicContactToList = newContact => {
    const res = allContacts.find(
      contact =>
        contact.name === newContact.name &&
        contact.number === newContact.number,
    );
    if (res) return;
    dispatch(contactsOperations.patchContact(editContactId, newContact));
  };

  const saveEditedHandler = () => {
    if (editedName && editedNumber) {
      addUnicContactToList({
        name: editedName,
        number: editedNumber,
      });
    } else {
      setEditedName(name);
      setEditedNumber(number);
    }
    setEditContactId('');
  };

  const onChangeInputHandler = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setEditedName(value);
        return;
      case 'number':
        setEditedNumber(value);
        return;
      default:
        return;
    }
  };

  const deleteContactHandler = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  if (editContactId === id) {
    return (
      <ContactEdit
        editedName={editedName}
        editedNumber={editedNumber}
        onChangeInputHandler={onChangeInputHandler}
        saveEditedHandler={saveEditedHandler}
        setEditContactId={setEditContactId}
      />
    );
  } else {
    return (
      <ContactListItem
        id={id}
        name={name}
        number={number}
        deleteContactHandler={deleteContactHandler}
        editIdHandler={editIdHandler}
      />
    );
  }
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
