import React from 'react';
import s from './Form.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contactsSlice';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  function handelInputChange(e) {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  }

  function reset() {
    setName('');
    setNumber('');
  }

  function handelSubmit(e) {
    e.preventDefault();
    dispatch(addContacts(name, number));
    reset();
  }

  return (
    <form type="submit" className={s.form} onSubmit={handelSubmit}>
      <label>
        <span className={s.label}>Name</span>
      </label>
      <input
        className={s.input}
        autoComplete="off"
        type="text"
        name="name"
        value={name}
        onChange={handelInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <br />
      <label>
        <span className={s.label}>Number</span>
      </label>
      <input
        className={s.input}
        type="tel"
        name="number"
        value={number}
        onChange={handelInputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <br />
      <label>
        <button type="submit">Add contact</button>
      </label>
    </form>
  );
}

export default Form;
