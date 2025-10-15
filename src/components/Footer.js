import React from 'react';
import logo from '../assets/logo_footer.png';
import '../styles/components/footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>

        {/* Doormat Navigation */}
        <div className="footer-column">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>123 Main Street, Chicago, IL</p>
          <p><a href="tel:+11234567890">(123) 456-7890</a></p>
          <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h4>Social Media Links</h4>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Little Lemon Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
