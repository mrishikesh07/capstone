import BookingForm from "../Components/BookingForm";

function BookingPage({ availableTimes, dispatch , submitForm }) {
  return (
    <main>
      <h1>Reserve a Table</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />

    </main>
  );
}

export default BookingPage;