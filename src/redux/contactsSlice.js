import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Natasha', number: '050 123 12 12' },
      { id: 'id-2', name: 'Tanya', number: '098 124 15 25' },
      { id: 'id-3', name: 'Inna', number: '066 245 16 92' },
      { id: 'id-4', name: 'Svitlana', number: '093 384 39 44' },
    ],
    filter: '',
  },
  reducers: {
    addContacts: {
      reducer(state, action) {
        const contactName = [];

        for (const contact of state.contacts) {
          contactName.push(contact.name);
        }

        if (contactName.includes(action.payload.name)) {
          alert(`${action.payload.name} is already in contacts list`);
          return;
        }
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
      state.contacts.splice(action.payload, 1);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addContacts, deleteContacts, filterContacts } =
  contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
