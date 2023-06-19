import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const { data } = await axios.get(
      'https://645675fa5f9a4f236144c964.mockapi.io/contacts'
    );

    return data;
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts / deleteContact',
  async contactId => {
    axios.delete(
      `https://645675fa5f9a4f236144c964.mockapi.io/contacts/${contactId}`
    );
    return contactId;
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    axios.post(
      `https://645675fa5f9a4f236144c964.mockapi.io/contacts/`,
      contact
    );
    return contact;
  }
);