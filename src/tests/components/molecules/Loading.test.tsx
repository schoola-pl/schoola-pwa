import { render, screen } from '../../../test-utils';
import Loading from '../../../components/molecules/Loading/Loading';

describe('Components > Molecules > Loading', () => {
  it('Should render a loading', () => {
    render(<Loading />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
