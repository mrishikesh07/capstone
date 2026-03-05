import { fetchAPI } from "./api";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./api";
import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BookingPage from "./Pages/BookingPage";
import ConfirmedBooking from "./Pages/ConfirmedBookings";

/* Initial times function */
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

/* Reducer function */
export function updateTimes(state, action) {
  if (action.type === "update") {
    return fetchAPI(new Date(action.date));
  }
  return state;
}
function Main() {

  const navigate = useNavigate();

function submitForm(formData) {
  const success = submitAPI(formData);

  if (success) {
    navigate("/confirmed");
  }
}

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking/>}/>
      </Routes>
    </main>
  );
}

export default Main;