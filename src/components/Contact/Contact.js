import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

import s from './Contact.module.scss';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const [editContactId, setEditContactId] = useState('');
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const editIdHandler = id => {
    setEditContactId(id);
  };

  const saveEditedHandler = () => {
    dispatch(
      contactsOperations.patchContact(editContactId, {
        name: editedName,
        number: editedNumber,
      }),
    );
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

  if (editContactId === id) {
    return (
      <li className={s.listItem}>
        <label>
          <input
            // className={s.ContactForm__input}
            type="text"
            name="name"
            value={editedName}
            onChange={onChangeInputHandler}
          />
        </label>
        <label>
          <input
            // className={s.ContactForm__input}
            type="text"
            name="number"
            value={editedNumber}
            onChange={onChangeInputHandler}
          />
        </label>
        <button className={s.btn} type="button" onClick={saveEditedHandler}>
          Save
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => setEditContactId('')}
        >
          Cancel
        </button>
      </li>
    );
  } else {
    return (
      <li className={s.listItem}>
        <span className={s.name}>{name}: </span>
        <span className={s.number}>{number}</span>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(contactsOperations.deleteContact(id))}
        >
          Delete
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => editIdHandler(id)}
        >
          Edit
        </button>
      </li>
    );
  }
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
