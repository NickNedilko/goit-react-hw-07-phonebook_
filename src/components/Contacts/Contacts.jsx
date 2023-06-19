import React, { useEffect } from 'react';
import css from './Contacts.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk, getContactsThunk } from 'redux/contacts.thunk';
import { getContacts, getFilter } from 'redux/selectors';

const Contacts = () => {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch();
  const filter = useSelector(getFilter)


useEffect(() => {
dispatch(getContactsThunk())
}, [dispatch])

const filterContact = () => {
  if (filter === ''){
    return contacts;
  }
   const data = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter?.toLowerCase())
    );
    return data;
  };
  
 const filterContacts = filterContact();


  return (
    <ul className={css.contactsList}>
      {filterContacts?.map(({ name, id, phone }) => {
        return (
          <li key={id} className={css.item}>
            <span>
              {name}: {phone}
            </span>
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => dispatch( deleteContactsThunk(id))}
            >
              Delete <RiDeleteBin6Line />
            </button>
          </li>
        );
      })}
    </ul>
  );
};



export default Contacts;
