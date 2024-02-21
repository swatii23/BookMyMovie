// src/App.js
import React, { useState } from 'react';
import SeatSelector from './components/SeatSelector';
import BookingForm from './components/BookingForm';
import BookingDetails from './components/BookingDetails';

import './App.css'; // Remember to create and style this CSS file

function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingDetails, setBookingDetails] = useState([]);

  const handleSeatSelect = (selectedSeat) => {
    setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, selectedSeat]);
  };

  const handleSeatDeselect = (deselectedSeat) => {
    setSelectedSeats((prevSelectedSeats) => prevSelectedSeats.filter(seat => seat !== deselectedSeat));
  };

  const handleBookingSubmit = (formData) => {
    const newBooking = {
      name: formData.name,
      tickets: formData.tickets,
      selectedSeats: selectedSeats,
    };

    // For simplicity, just updating state. In a real scenario, you would send this data to the backend.
    setBookingDetails((prevBookingDetails) => [...prevBookingDetails, newBooking]);
    setSelectedSeats([]); // Reset selected seats after booking
  };

  return (
    <div className="app">
      <h1>Book My Movie</h1>

      <div className="booking-container">
        <SeatSelector
          selectedSeats={selectedSeats}
          onSelect={handleSeatSelect}
          onDeselect={handleSeatDeselect}
        />

        <BookingForm
          onBookingSubmit={handleBookingSubmit}
          selectedSeatsCount={selectedSeats.length}
        />
      </div>

      <BookingDetails bookings={bookingDetails} />
    </div>
  );
}

export default App;
