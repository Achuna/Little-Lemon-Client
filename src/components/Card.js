import React from 'react';
import '../styles/components/card.css';

export default function Card({ image, title, price, description }) {
  return (
    <article className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          <span className="price">${price}</span>
        </div>
        <p>{description}</p>
        <button className="delivery-btn">
          Order a delivery <span role="img" aria-label="delivery">🚴‍♂️</span>
        </button>
      </div>
    </article>
  );
}
