import React from 'react';
import css from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.item}>
        <p className={css.text}>
          {name}: {number}
        </p>
        <button className={css.button} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteContact: PropTypes.any.isRequired,
};
export default ContactList;
