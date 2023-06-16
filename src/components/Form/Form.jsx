import React, { useState } from 'react';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import css from './Form.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { toast } from 'react-toastify';


const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch(); 
  const contacts = useSelector(state=>state.contacts.contacts)
  

  const handleInputChange = e => {
    const { name } = e.target;
    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const contact = {
    id: nanoid(),
    name,
    number,
  };


  const formSubmit = e => {
    e.preventDefault();
    const normalizedName = contact.name.toLowerCase()
    if(contacts.find(contact=>contact.name.toLowerCase() === normalizedName)){
      return toast.warn(`${name} is already in contacts`);
    }
    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  return (
    <form onSubmit={formSubmit} className={css.form}>
      <label htmlFor={inputNameId}>
        <span className={css.inputLabel}> Name</span>
        <input
          className={css.formInput}
          id={inputNameId}
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor={inputNumberId}>
        <span className={css.inputLabel}>Tel</span>
        <input
          className={css.formInput}
          id={inputNumberId}
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.addBtn}>
        <BsFillTelephonePlusFill /> Add contact
      </button>
    </form>
  );
};

export default Form;
