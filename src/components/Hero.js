import React from 'react';
import heroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional recipes
          served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
      <img src={heroImg} alt="Little Lemon Dishes" />
    </section>
  );
}
