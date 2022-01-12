import { render, screen } from '@testing-library/react';
import Home from 'views/auth/User/Home/Home';

it('Renders application', () => {
  render(<Home />);
  expect(screen.getByText('Hello World!')).toBeInTheDocument();
});
