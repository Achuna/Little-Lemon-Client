import React from 'react';
import logo from '../assets/logo.png'; // add your actual logo path

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="/">
          <img src={logo} alt="Little Lemon logo" />
        </a>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}
