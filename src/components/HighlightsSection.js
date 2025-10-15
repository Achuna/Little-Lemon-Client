import React from 'react';
import Card from './Card';
import '../styles/components/highlights.css';

// Sample images (replace with real imports)
import salad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import dessert from '../assets/lemon-dessert.jpg';

export default function HighlightsSection() {
  const specials = [
    {
      image: salad,
      title: 'Greek Salad',
      price: '12.99',
      description:
        'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
      image: bruschetta,
      title: 'Bruschetta',
      price: '5.99',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
      image: dessert,
      title: 'Lemon Dessert',
      price: '5.00',
      description:
        'This comes straight from grandma’s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.'
    }
  ];

  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2>This week’s specials</h2>
        <button className="menu-btn">Online Menu</button>
      </div>

      <div className="highlights-grid">
        {specials.map((item, index) => (
          <Card
            key={index} {...item}
            />
        ))}
      </div>
    </section>
  );
}
