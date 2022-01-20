import Loader from 'components/atoms/Loader/Loader';
import { render, screen } from '../../../test-utils';

describe('Components > Atoms > Loader', () => {
  it('Should render a loader', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
