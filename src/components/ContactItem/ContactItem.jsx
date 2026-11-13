import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import "./ContactItem.css";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className="contact-item">
      <div className="contact-info">
        <span className="contact-name">{contact.name}:</span>
        <span className="contact-number">{contact.number}</span>
      </div>
      <button
        className="delete-button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Видалити
      </button>
    </li>
  );
};

export default ContactItem;
