import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '../login.page';

test('renders learn react link', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/One/i);
  expect(linkElement).toBeInTheDocument();
});
