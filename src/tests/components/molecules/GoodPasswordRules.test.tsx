import { render, screen } from '../../../test-utils';
import GoodPasswordRules from '../../../components/molecules/GoodPasswordRules/GoodPasswordRules';

describe('Components > Molecules > GoodPasswordRules', () => {
  it('Should render a good password rules', () => {
    render(<GoodPasswordRules />);
    expect(screen.getByText('Znaków')).toBeInTheDocument();
  });
});
