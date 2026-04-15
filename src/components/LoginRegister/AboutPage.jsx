// src/AboutPage.js

import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div id='about-section' className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our eCommerce store, your one-stop shop for quality products at great prices.</p>
      <p>Our goal is to offer a seamless shopping experience, with fast shipping, secure payments, and excellent customer service.</p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Wide variety of products</li>
        <li>Safe and easy payments</li>
        <li>Fast delivery</li>
      </ul>
      <p>For inquiries, contact us at <strong>SeeUsoon.com</strong>.</p>
    </div>
  );
};

export default AboutPage;
