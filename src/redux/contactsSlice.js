import { createSlice} from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  getContactsThunk,
  deleteContactsThunk,
  addContactsThunk,
} from './contacts.thunk';


const handlePending = (state) =>  {state.contacts.isLoading = true};


const handleRejected = (state, {payload}) => {
     state.contacts.error = true;
     console.log(payload)
     state.contacts.isLoading = false;
    }
   
  const handleGetContactsFulfield =  (state, { payload }) => {
    state.contacts.items = payload;
    state.contacts.isLoading = false;
    state.contacts.error = '';
  }

const handleAddContactsFulfield = (state, { payload }) => {
    state.contacts.items.push(payload);
    state.contacts.isLoading = false;
state.contacts.error = '';
  }

  const handleDeleteContactsFulfield = (state, { payload }) => {
    state.contacts.items = state.contacts.items.filter(
      item => item.id !== payload
    );
    state.contacts.isLoading = false;
state.contacts.error = '';

  }

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
 
  reducers: {
    filterSearch: (state, {payload}) => {state.filter = payload },
},

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleGetContactsFulfield )
      .addCase(getContactsThunk.rejected, handleRejected)

      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, handleAddContactsFulfield)
      .addCase(addContactsThunk.rejected, handleRejected)
      
      .addCase(deleteContactsThunk.pending,handlePending)
      .addCase(deleteContactsThunk.fulfilled, handleDeleteContactsFulfield )
      .addCase(deleteContactsThunk.rejected, handleRejected)
    //   .addMatcher(isAnyOf([ getContactsThunk.pending, addContactsThunk.pending, deleteContactsThunk.pending ]), handlePending)
    //   .addMatcher(isAnyOf([getContactsThunk.rejected, addContactsThunk.rejected, deleteContactsThunk.rejected ]), handleRejected)
  },
});

export const {filterSearch} = contactsSlice.actions;
export const filterReducer = contactsSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
