import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

import s from './Filter.module.scss';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <h3>Find contacts by name</h3>
      <input
        name="filter"
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
