import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const data = localStorage.getItem('contacts');
    if (data !== null) {
      return JSON.parse(data);
    }
    return [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const { name } = contact;
    const normalizedName = name.toLowerCase();

    if (
      contacts?.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return toast.warn(`${name} is already in contacts`);
    }
    setContacts(prev => [contact, ...prev]);
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const filterContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact?.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2 className={css.title}>Contacts</h2>
      <Filter onFilter={changeFilter} value={filter} />
      <Contacts contacts={filterContact()} onDeleteContact={deleteContact} />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
