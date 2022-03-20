import { render, screen } from '../../../test-utils';
import Person from '../../../components/atoms/Person/Person';

describe('Components > Atoms > Person', () => {
  it('Renders component', () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const randomNames = ['Janek Maskarpone', 'Piotruś Pan', 'Maryla Rodowicz'];
    const randomDescriptions = ['Lubię placki', 'Lubię koty', 'Lubię psy'];
    const { rerender } = render(
      <Person userName={randomNames[randomNumber]} description={randomDescriptions[randomNumber]} userProfilePicture={'https://google.com/'} />
    );
    expect(screen.getByText(randomNames[randomNumber])).toBeInTheDocument();
    expect(screen.getByText(randomDescriptions[randomNumber])).toBeInTheDocument();
    rerender(<Person userName={randomNames[randomNumber]} description={null} userProfilePicture={'https://google.com/'} />);
    expect(screen.queryByText(randomDescriptions[randomNumber])).not.toBeInTheDocument();
  });
});
