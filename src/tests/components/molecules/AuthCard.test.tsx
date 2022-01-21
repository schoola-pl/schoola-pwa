import { render, screen } from '../../../test-utils';
import AuthCard from '../../../components/molecules/AuthCard/AuthCard';

describe('Components > Molecules > AuthCard', () => {
  it('Should render an Auth Card', () => {
    render(<AuthCard>Test text</AuthCard>);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});
