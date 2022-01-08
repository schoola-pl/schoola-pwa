import { render, screen } from '@testing-library/react';
import Home from 'views/Home';

it('Renders application', () => {
  render(<Home />);
  expect(screen.getByText('For everyone')).toBeInTheDocument();
});
