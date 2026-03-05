import { useState } from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
 

  const isValid = date && time && guests >=1 && guests <= 10 && occasion;

  const handleDateChange = (e) => {
    setDate(e.target.value);

    dispatch({
      type: "update",
      date: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const formData = {
    date,
    time,
    guests,
    occasion
  };

  submitForm(formData);
};

  return (
  <div className="booking-container">

    <form className="booking-form" onSubmit={handleSubmit}>

      <h2>Reserve a Table</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Choose time</option>
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isValid}
      />

    </form>

  </div>
);
}

export default BookingForm;