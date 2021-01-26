import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

import s from './Contact.module.scss';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.listItem}>
      <span className={s.name}>{contact.name}: </span>
      <span className={s.number}>{contact.phone}</span>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object
};

