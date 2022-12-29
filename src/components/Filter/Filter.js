// import React, { Component } from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contactsReducer';
import { getFilter } from '../../redux/contactsActions';

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
