import { render, screen } from '@testing-library/react';
import App from 'views/App';

it('Renders application', () => {
  render(<App />);
  expect(screen.getByText('Hello World!')).toBeInTheDocument();
});
