import React, { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }

    // Basic validity check after every change
    validateForm(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      submitForm(formData);
    }
  };

  // --- React-side validation ---
  const validateForm = (data) => {
    const today = new Date().toISOString().split('T')[0];
    const valid =
      data.date &&
      data.date >= today && // date not in the past
      data.time &&
      data.guests >= 1 &&
      data.guests <= 10 &&
      data.occasion;
    setIsValid(valid);
  };

  return (
    <form aria-label="Little Lemon table reservation form" className="booking-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose Date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        min={new Date().toISOString().split('T')[0]} // 🔹 no past dates
      />

      <label htmlFor="res-time">Choose Time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((t, i) => (
          <option key={i} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>

      <button
        type="submit"
        className={`submit-btn ${!isValid ? 'disabled' : ''}`}
        disabled={!isValid}
      >
        Submit Reservation
      </button>
    </form>
  );
}
