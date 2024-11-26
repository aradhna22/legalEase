import React, { useState } from 'react';
import './Contact.css'; // Importing the CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent: \nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // You can add form submission logic here (e.g., sending to a backend server)
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>

      {/* Footer with contact details */}
      <footer className="footer">
        <div className="footer-content">
          <p>LegalEase | All Rights Reserved</p>
          <p>Contact us at: support@legalease.com</p>
          <p>Phone: +1 (234) 567-8901</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
