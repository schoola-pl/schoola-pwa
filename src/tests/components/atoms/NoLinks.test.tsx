import { render, screen } from '../../../test-utils';
import NoLinks from '../../../components/atoms/NoLinks/NoLinks';

describe('Components > Atoms > NoLinks', () => {
  it('Renders component', () => {
    render(<NoLinks />);
    expect(screen.getByText('Linki społecznościowe')).toBeInTheDocument();
    expect(screen.getByText('Brak linków społecznościowych!')).toBeInTheDocument();
  });
});
