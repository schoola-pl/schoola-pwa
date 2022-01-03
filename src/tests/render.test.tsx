import { render, screen } from '@testing-library/react';
import HomeView from 'views/HomeView';

it('Renders application', () => {
  render(<HomeView />);
  expect(screen.getByText('Hello World!')).toBeInTheDocument();
});
