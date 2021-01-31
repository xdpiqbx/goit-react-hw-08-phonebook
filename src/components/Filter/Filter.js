import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import { contactsSelectors } from '../../redux/contacts';

import s from './Filter.module.scss';

const Filter = () => {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        variant="outlined"
        value={filter}
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </div>
  );
};

export default Filter;

Filter.protoTypes = {
  filter: PropTypes.string,
  filterHandler: PropTypes.func,
};
