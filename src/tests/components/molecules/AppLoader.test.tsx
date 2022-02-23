import { render, screen } from '../../../test-utils';
import AppLoader from '../../../components/molecules/AppLoader/AppLoader';

describe('Components > Molecules > AppLoader', () => {
  it('Should render an App Loader', () => {
    render(<AppLoader loadingText={'test'} />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  it('Checks is loadingText parameter working correctly', () => {
    const { rerender } = render(<AppLoader loadingText={'test'} />);
    expect(screen.getByText('test')).toBeInTheDocument();
    const randomText = `ui-test-${Math.floor(Math.random() * 100)}`;
    rerender(<AppLoader loadingText={randomText} />);
    expect(screen.getByText(randomText)).toBeInTheDocument();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
