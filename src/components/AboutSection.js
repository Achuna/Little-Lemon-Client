import React from 'react';
import '../styles/components/about.css';
import about1 from '../assets/employees.jpg'
import about2 from '../assets/restaurant-chef.jpg'

export default function AboutSection() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant focused on traditional recipes 
          served with a modern twist. Our chefs draw inspiration from their family’s roots in Italy, 
          Greece, and North Africa to bring you authentic, flavorful dishes prepared fresh daily.
        </p>
        <p>
          We believe in simple ingredients, sustainable sourcing, and a warm, welcoming experience 
          for every guest. Join us for a meal and taste the Mediterranean sunshine in every bite.
        </p>
      </div>

      <div className="about-images">
        <img src={about1} alt="Little Lemon staff" className="img-top" />
        <img src={about2} alt="Little Lemon kitchen" className="img-bottom" />
      </div>
    </section>
  );
}
