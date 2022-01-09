import { render, screen } from '../../../test-utils';
import ClassLink from '../../../components/molecules/ClassLink/ClassLink';

describe('Components > Molecules > ClassLink', () => {
  it('Should render a class link', () => {
    render(<ClassLink name="Class name" numberOfStudents={23} />);
    expect(screen.getByText('Class name')).toBeInTheDocument();
    expect(screen.getByText(23)).toBeInTheDocument();
  });
  it('Checks does props work well', () => {
    const { rerender } = render(<ClassLink name="Class name" numberOfStudents={23} />);
    expect(screen.getByText('Class name')).toBeInTheDocument();
    expect(screen.getByText(23)).toBeInTheDocument();
    const randomName = `ui-test-name-${Math.floor(Math.random() * 100)}`;
    const randomNumber = Math.round(Math.random() * 1000);
    rerender(<ClassLink name={randomName} numberOfStudents={randomNumber} />);
    expect(screen.getByText(randomName)).toBeInTheDocument();
    expect(screen.getByText(randomNumber)).toBeInTheDocument();
  });
});
