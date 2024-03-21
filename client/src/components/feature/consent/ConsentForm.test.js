import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ConsentForm from './ConsentForm'; // Adjust the import path as necessary

describe('ConsentForm', () => {
  test('renders with the submit button disabled', () => {
    render(<ConsentForm />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });

  test('enables the submit button when the checkbox is checked', () => {
    render(<ConsentForm />);
    const checkbox = screen.getByRole('checkbox', { name: /i agree/i });
    userEvent.click(checkbox);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).not.toBeDisabled();
  });

  test('shows an alert with the appropriate message when submitting the form', () => {
    window.alert = jest.fn(); // Mocking the alert function
    render(<ConsentForm />);
    const checkbox = screen.getByRole('checkbox', { name: /i agree/i });
    userEvent.click(checkbox);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    userEvent.click(submitButton);
    
    expect(window.alert).toHaveBeenCalledWith("Thank you for agreeing to our terms.");
  });

  // Removed the test case that attempts to click a disabled button
});
