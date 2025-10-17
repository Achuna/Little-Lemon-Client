import React from 'react';
import '../styles/components/booking.css';

export default function ConfirmedBooking() {
  return (
    <section className="booking-confirmed">
      <h1>Booking Confirmed!</h1>
      <p>
        Thank you for reserving a table at Little Lemon. 
        We look forward to seeing you soon!
      </p>
      <p>
        A confirmation has been sent to your email. 🍋
      </p>
    </section>
  );
}
