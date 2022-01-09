import Button from 'components/atoms/Button/Button';
import { render, screen } from '../../../test-utils';

describe('Components > Atoms > Button', () => {
  it('Should render a button', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
