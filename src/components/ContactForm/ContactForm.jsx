import React from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid"; // Або використовуйте власний генератор ID (наприклад, Date.now().toString())
import "./ContactForm.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    if (!name || !number) return;

    dispatch(
      addContact({
        id: Date.now().toString(),
        name,
        number,
      })
    );

    form.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="form-label">
        Ім'я
        <input className="form-input" type="text" name="name" required />
      </label>
      <label className="form-label">
        Номер телефону
        <input className="form-input" type="tel" name="number" required />
      </label>
      <button className="form-button" type="submit">
        Додати контакт
      </button>
    </form>
  );
};

export default ContactForm;
