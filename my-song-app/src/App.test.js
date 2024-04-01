import { render, screen } from '@testing-library/react';
import Song from './song';

test('renders learn react link', () => {
  render(<Song />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
