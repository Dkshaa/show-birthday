import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('shows birthdays and clears the list', async () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /5 birthdays today/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /clear all/i }));

  expect(screen.getByText(/no birthdays left for today/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /clear all/i })).toBeDisabled();

  fireEvent.click(screen.getByRole('button', { name: /reset list/i }));

  expect(screen.getByRole('heading', { name: /5 birthdays today/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /clear all/i })).not.toBeDisabled();
});

test('removes a single birthday from the list', () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole('button', {
      name: /remove bertie yates from birthday list/i,
    })
  );

  expect(screen.getByRole('heading', { name: /4 birthdays today/i })).toBeInTheDocument();
  expect(screen.queryByText(/bertie yates/i)).not.toBeInTheDocument();
});
