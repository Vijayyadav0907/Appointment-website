/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h4 style={headingStyle}>About Us</h4>
          <p style={textStyle}>
            We provide the best healthcare services with our top doctors available 24/7.
          </p>
        </div>

        <div style={sectionStyle}>
          <h4 style={headingStyle}>Quick Links</h4>
          <ul style={listStyle}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/about" style={linkStyle}>About Us</Link></li>
            <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
            <li><Link to="/doctors" style={linkStyle}>Find a Doctor</Link></li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h4 style={headingStyle}>Contact Us</h4>
          <p style={textStyle}>Phone: +123 456 789</p>
          <p style={textStyle}>Email: info@healthcare.com</p>
          <p style={textStyle}>Address: 123 Health St, Wellness City</p>
        </div>
      </div>
      <div style={copyrightStyle}>
        <p>&copy; 2024 DocBook. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#343a40',
  color: '#ffffff',
  padding: '20px 0',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
};

const sectionStyle = {
  flex: 1,
  padding: '0 15px',
};

const headingStyle = {
  fontSize: '18px',
  marginBottom: '15px',
};

const textStyle = {
  fontSize: '14px',
  marginBottom: '10px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '14px',
  marginBottom: '10px',
  display: 'block',
};

const copyrightStyle = {
  textAlign: 'center',
  padding: '10px 0',
  borderTop: '1px solid #50575d',
  marginTop: '20px',
};

export default Footer;
