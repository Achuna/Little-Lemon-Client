import React from 'react';
import TestimonialCard from './TestimonialCard';
import '../styles/components/testimonials.css';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Emily R.',
      review: 'The best dining experience! The food was fresh and flavorful.',
      rating: 5,
    },
    {
      name: 'John D.',
      review: 'Amazing atmosphere and friendly staff. Highly recommend!',
      rating: 4,
    },
    {
      name: 'Sophia K.',
      review: 'Loved the Lemon Dessert! Will definitely come back.',
      rating: 5,
    },
    {
      name: 'Michael L.',
      review: 'A wonderful family restaurant with authentic Mediterranean dishes.',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
