import React from 'react';
import { ContactItem } from './components';

import './style.sass';

const ContactsList = () => (
  <ul className="contacts-list">
    { [0,0,0,0,0,0,0,0,0,0,0,0].map((contactId) => <ContactItem />)}
  </ul>
);

export default ContactsList;
