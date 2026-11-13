import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (visibleContacts.length === 0) {
    return <p className="no-contacts">Контактів не знайдено</p>;
  }

  return (
    <ul className="contact-list">
      {visibleContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
