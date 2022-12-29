import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  function filterName(e) {
    dispatch(filterContacts(e.currentTarget.value));
  }
  return (
    <div>
      <label className={s.filter}>Filter</label>
      <input type="text" value={filter} onChange={filterName} />
    </div>
  );
};

export default Filter;
