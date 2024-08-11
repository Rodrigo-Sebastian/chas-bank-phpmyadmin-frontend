import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../login';

// Mocka fetch globalt
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: false, // Simulera ett fel
      json: () => Promise.resolve({}),
    })
  );
});

afterAll(() => {
  global.fetch.mockClear();
});

test('renders correctly', () => {
  render(<LoginPage />);
  
  // Kontrollera att rätt element är renderat
  expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
});

test('shows error on invalid login', async () => {
  render(<LoginPage />);

  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: 'invalidUser' },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'wrongPassword' },
  });

  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  const errorMessage = await screen.findByText('Invalid username or password');
  expect(errorMessage).toBeInTheDocument();
});
