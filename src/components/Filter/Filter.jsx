import React from 'react';
import css from './Filter.module.css';
import { FcSearch } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';
import { filterSelector } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(filterSelector)
  const dispatch = useDispatch();
  return (
    <div className={css.filterWrapper}>
      <p className={css.filterText}>
        Find contact by name <FcSearch />
      </p>
      <label htmlFor="">
        <input
          className={css.filterInput}
          type="text"
          value={filter ?? ''}
          onChange={(e) => dispatch(filterContacts(e.target.value))}
        />
      </label>
    </div>
  );
};


export default Filter;
