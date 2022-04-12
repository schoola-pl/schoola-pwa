import { render, screen } from '../../../test-utils';
import Meeting from '../../../components/molecules/Meeting/Meeting';
import { authUser } from '../../../types/auth';

const meetHour = '12:00';
const user = {
  first_name: 'Marek',
  last_name: 'Polaczek',
  TextClassName: '2D',
  meetingId: 12
} as authUser & { meetingId: number };

describe('Components > Molecules > Meeting', () => {
  it('Should renders', () => {
    render(<Meeting meetHour={meetHour} user={user} />);
    expect(screen.getByText(meetHour)).toBeInTheDocument();
  });
});
