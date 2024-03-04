import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css'; // Import your CSS file for styling

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_3nx1wx1', 'template_monzlwu', e.target, 'RUMbovYBY930M2tFS')
      .then((result) => {
        console.log(result.text);
        // Clear the form data after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        // Show alert for successful submission
        alert('Message sent successfully!');
      }, (error) => {
        console.error(error.text);
        // Show alert for error
        alert('Error sending message. Please try again later.');
      });
  };

  return (
    <div className="contact-container">
      <h1 className='contact-header-text'>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className='contact-button' type="submit">Submit</button>
      </form>
      {/* Footer */}
      <footer className="footer">
        <p>© Copyright Aydhiny, Plansio, Ajdin Mehmedović 2024</p>
      </footer>
    </div>
  );
};

export default ContactMe;
