import React from 'react';
import '../assets/ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact">
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
