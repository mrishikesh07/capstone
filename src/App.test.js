import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import App from "./App";
import BookingForm from "./Components/BookingForm";

/* Mock data */
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const availableTimes = ["17:00", "18:00", "19:00"];

/* ---------- APP TEST ---------- */

test("renders Little Lemon header", () => {
  render(

      <App />

  );

   const headers = screen.getAllByRole("heading", { name: /little lemon/i });

  expect(headers.length).toBeGreaterThan(0);
});

/* ---------- BOOKING FORM TESTS ---------- */

describe("BookingForm Component", () => {

  test("renders all form fields", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    expect(screen.getByText("Choose date")).toBeInTheDocument();
    expect(screen.getByText("Choose time")).toBeInTheDocument();
    expect(screen.getByText("Number of guests")).toBeInTheDocument();
    expect(screen.getByText("Occasion")).toBeInTheDocument();
  });

  test("time options render correctly", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    expect(screen.getByText("17:00")).toBeInTheDocument();
    expect(screen.getByText("18:00")).toBeInTheDocument();
    expect(screen.getByText("19:00")).toBeInTheDocument();
  });

  test("guests input has correct constraints", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const guestsInput = screen.getByLabelText("Number of guests");

    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("submit button disabled initially", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const submitButton = screen.getByDisplayValue("Make Your reservation");

    expect(submitButton).toBeDisabled();
  });

  test("form becomes valid when fields are filled", async () => {

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");
    const guestsInput = screen.getByLabelText("Number of guests");
    const timeSelect = screen.getByLabelText("Choose time");
    const occasionSelect = screen.getByLabelText("Occasion");

    const submitButton = screen.getByDisplayValue("Make Your reservation");

    await userEvent.type(dateInput, "2025-12-25");
    await userEvent.selectOptions(timeSelect, "17:00");
    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, "2");
    await userEvent.selectOptions(occasionSelect, "Birthday");

    expect(submitButton).not.toBeDisabled();
  });

});