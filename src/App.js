import React from 'react';
import s from './App.css';
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

function App() {
  return (
    <>
      <div className={s.container}>
        <h1>PHONEBOOK</h1>
        <Form />
        <Filter />
        <ContactsList />
      </div>
    </>
  );
}

export default App;
