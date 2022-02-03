import { render, screen } from '../../../test-utils';
import UserRecord from '../../../components/molecules/UserRecord/UserRecord';

describe('Components > Molecules > UserRecord', () => {
  it('Should render a user record', () => {
    render(<UserRecord index={0} setAddedUser={() => console.log('Hello World')} />);
    expect(screen.getByPlaceholderText(/imię/i)).toBeInTheDocument();
    expect(screen.getByText('Kopiuj')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
  });
});
