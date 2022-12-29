import React from 'react';
import s from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice';
import { getFilter, getContacts } from '../../redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div className={s.contactsList}>
      <h2 className={s.text}>CONTACTS</h2>
      {visibleContacts.map(contact => (
        <li className={s.contact} key={contact.id}>
          {contact.name} : {contact.number}{' '}
          <button
            type="buttun"
            onClick={() => dispatch(deleteContacts(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default ContactsList;
