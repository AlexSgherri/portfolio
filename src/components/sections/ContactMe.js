import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactMe = ({ checkTopOffset }) => {
  const [sendFormMessage, setSendFormMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    textarea: "",
  });
  const contactRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    checkTopOffset(contactRef, "contact");
  }, []);

  // function to update the controlled form

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formAttribute = event.target.name;
    setForm({ ...form, [formAttribute]: inputValue });
  };

  // function to handle the form's submit

  const handleFormData = (e) => {
    e.preventDefault();

    const [name, email, textarea] = [
      e.target.elements.name.value,
      e.target.elements.email.value,
      e.target.elements.textarea.value,
    ];

    emailjs
      .sendForm(
        "service_3w8hck3",
        "Portfolio_Contact_Form",
        formRef.current,
        "-m2sanQ8bL-dct25M"
      )
      .then(() => {
        setSendFormMessage(true);
      })
      .catch(() => {
        setSendFormMessage(false);
      });

    setForm({ name: "", email: "", textarea: "" });
  };

  return (
    <section ref={contactRef} className="flex_column" id="contact">
      <h1>CONTACT</h1>
      <p>Feel free to contact me</p>
      <form ref={formRef} onSubmit={handleFormData} className="contact-form">
        <input
          onChange={handleInputChange}
          name="name"
          value={form.name}
          placeholder="Name"
        />
        <input
          onChange={handleInputChange}
          name="email"
          value={form.email}
          type="email"
          placeholder="Email"
        />
        <textarea
          onChange={handleInputChange}
          name="textarea"
          value={form.textarea}
          placeholder="Your message"
        />
        <button className="btn" type="submit">
          SUBMIT
        </button>
      </form>
      {sendFormMessage !== null && (
        <p className={sendFormMessage ? "green-message" : "red-message"}>
          {sendFormMessage
            ? "Message sent correctly!"
            : "There has been a error"}
        </p>
      )}
    </section>
  );
};
