import React from 'react';
import '../styles/components/testimonial-card.css';

export default function TestimonialCard({ name, review, rating }) {
  // create a simple array to render stars dynamically
  const stars = Array.from({ length: rating }, (_, i) => '⭐');

  return (
    <article className="testimonial-card">
      <div className="testimonial-rating">{stars}</div>
      <h4 className="testimonial-name">{name}</h4>
      <p className="testimonial-text">{review}</p>
    </article>
  );
}
