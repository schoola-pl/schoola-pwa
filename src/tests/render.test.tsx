import { render, screen } from '@testing-library/react';
import Profile from 'views/auth/User/Profile/Profile';

it('Renders application', () => {
  render(<Profile />);
  expect(screen.getByText('Hello World!')).toBeInTheDocument();
});
