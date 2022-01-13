import { render, screen } from '../../../test-utils';
import Logo from '../../../components/atoms/Logo/Logo';

describe('Components > Atoms > Logo', () => {
  it('Should render a logo', () => {
    render(<Logo />);
    expect(screen.getByText('schoola')).toBeInTheDocument();
  });
});
