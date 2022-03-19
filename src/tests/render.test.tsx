import { render, screen } from 'test-utils';
import Root from '../views/Root';

it('Renders application', () => {
  render(<Root />);
  expect(screen.getAllByText(/zaloguj się/i)[0]).toBeInTheDocument();
});
