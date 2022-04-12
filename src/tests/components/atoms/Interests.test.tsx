import Interests from 'components/atoms/Interests/Interests';
import { render, screen } from '../../../test-utils';

describe('Components > Atoms > Interests', () => {
  it('Renders component', () => {
    const randomNames = ['Jan Rapowanie', 'Szkatułka Muska', 'Lawenda WMiseczce', 'Kopułka Szczęścia', 'Posolona Margaryna'];
    const randomNamesPrepared = randomNames.map((name) => {
      if (Math.random() > 0.5) {
        return name;
      } else return null;
    });
    const filteredNames = randomNamesPrepared.filter((name) => name !== null);
    const buffer = filteredNames as string[];
    const readyProp = buffer.map((name, i) => ({ id: i, name }));
    render(<Interests interests={readyProp} />);
    expect(screen.getByText('Zainteresowania')).toBeInTheDocument();
    if (randomNamesPrepared.length > 0) {
      buffer.forEach((name) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    }
  });
});
