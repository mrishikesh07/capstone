import BookingForm from "../Components/BookingForm";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <main>
      <h1>Reserve a Table</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />

    </main>
  );
}

export default BookingPage;