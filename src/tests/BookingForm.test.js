// BookingForm.test.js
import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("Renders the Choose Date label", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const labelElement = screen.getByText(/Choose Date/i);
  expect(labelElement).toBeInTheDocument();
});



const mockDispatch = jest.fn();
const mockSubmit = jest.fn();

describe('BookingForm HTML5 Validation', () => {
  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );
  });

  test('Date input has required and min attributes', () => {
    const dateInput = screen.getByLabelText(/Choose Date/i);
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min');
  });

  test('Time select is required', () => {
    const timeSelect = screen.getByLabelText(/Choose Time/i);
    expect(timeSelect).toHaveAttribute('required');
  });

  test('Guests input has min and max attributes', () => {
    const guestInput = screen.getByLabelText(/Number of Guests/i);
    expect(guestInput).toHaveAttribute('min', '1');
    expect(guestInput).toHaveAttribute('max', '10');
    expect(guestInput).toHaveAttribute('required');
  });

  test('Occasion select is required', () => {
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
  });
});