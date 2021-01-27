import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

import s from './Contact.module.scss';

const Contact = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.listItem}>
      <span className={s.name}>{name}: </span>
      <span className={s.number}>{phone}</span>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};
