import React from 'react';

import './style.sass';

const ContactItem = ({ children }) => (
  <li className="contact-item">
    <div className="contact-item__header">
      <h4 className="contact-item__name">
        <i className="fas fa-address-card" />
Stepan Petrovich
      </h4>
    </div>
    <div className="contact-item__contacts">
      <ul className="contact-item__contacts-list">
        <li className="contact-item__contacts-item">
          <i className="fas fa-phone-square" />
          <b>Phone:</b>
          {' '}
+380 9895 50351
        </li>
        <li className="contact-item__contacts-item">
          <i className="fas fa-map-marker-alt" />
          <b>Address:</b>
          {' '}
          o. Volinska , c.Lutsk, s. Peremogi 15
        </li>
        <li className="contact-item__contacts-item">
          <i className="fas fa-at" />
          <b>E-mail:</b>
          {' '}
          biktor12487@gmail.com
        </li>
      </ul>
    </div>
  </li>
);
export default ContactItem;
