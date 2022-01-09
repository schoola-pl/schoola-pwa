import { render, screen } from '../../../test-utils';
import InfoCard from '../../../components/molecules/InfoCard/InfoCard';

describe('Components > Molecules > InfoCard', () => {
  it('Should render a info card', () => {
    const randomName = `ui-test-name-${Math.floor(Math.random() * 100)}`;
    const randomNumber = Math.round(Math.random() * 1000);
    render(<InfoCard icon={''} name={randomName} number={randomNumber} />);
    expect(screen.getByText(randomName)).toBeInTheDocument();
    expect(screen.getByText(randomNumber)).toBeInTheDocument();
  });
});
