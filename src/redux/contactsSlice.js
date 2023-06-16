import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  contacts: [],
  filter: ""
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, {payload}) =>{
            // return  {...state, contacts: [...state.contacts, payload]} without immer
            state.contacts.push(payload);
        },
        deleteContact: (state, {payload}) => {
          state.contacts = state.contacts.filter(contact=>contact.id !== payload)
        },
        filterContacts: (state, {payload})=> {state.filter = payload}
    }
    
})


export const {addContact, deleteContact, filterContacts} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;