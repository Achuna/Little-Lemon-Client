import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import '../styles/components/booking.css';
import { fetchAPI, submitAPI } from '../api/api';

// === Reducer functions ===
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    return fetchAPI(new Date(action.date));
  }
  return state;
}

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  // This function will be passed to the BookingForm
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    } else {
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <section className="booking-page">
      <div className="booking-header">
        <h1>Reserve a Table</h1>
        <p>
          Celebrate special occasions or enjoy a cozy dinner at Little Lemon.
          Fill out the form below to book your table.
        </p>
      </div>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}
