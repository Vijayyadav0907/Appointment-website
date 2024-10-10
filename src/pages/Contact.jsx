/* eslint-disable no-unused-vars */
// import React from 'react';

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="container my-5">
      <div className="row">
        {/* Contact Information */}
        <div className="col-lg-6 mb-4">
          <h2 className="mb-4">Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us using the form below or through the contact details provided.</p>
          <ul className="list-unstyled">
            <li><i className="bi bi-house-door"></i> 1234 Street Name, City, Country</li>
            <li><i className="bi bi-envelope"></i> contact@example.com</li>
            <li><i className="bi bi-phone"></i> +123 456 7890</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="col-lg-6">
          <h2 className="mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter Subject"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-control"
                rows="4"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

