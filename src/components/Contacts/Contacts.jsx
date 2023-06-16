import React from 'react';
import css from './Contacts.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { contactsSelector, filterSelector } from 'redux/selectors';

const Contacts = () => {
  const contacts = useSelector(contactsSelector) 
  const filter = useSelector(filterSelector)
  const dispatch = useDispatch();

const normalizedFilter = filter?.toLowerCase();

const filterContacts = contacts?.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))

  return (
    <ul className={css.contactsList}>
      {filterContacts?.map(({ name, id, number }) => {
        return (
          <li key={id} className={css.item}>
            <span>
              {name}: {number}
            </span>
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
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
