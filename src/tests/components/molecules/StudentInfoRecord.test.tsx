import { render, screen } from '../../../test-utils';
import StudentInfoRecord from '../../../components/molecules/StudentInfoRecord/StudentInfoRecord';

describe('Components > Molecules > StudentInfoRecord', () => {
  it('Should render a student info record', () => {
    render(
      <StudentInfoRecord
        userToFind={'userToFind'}
        info={{
          id: '23',
          attributes: {
            first_name: 'name',
            Birthday: 'string',
            last_name: 'lastname',
            TextRole: 'string',
            blocked: false
          }
        }}
      />
    );
    expect(screen.getByText('name lastname')).toBeInTheDocument();
    expect(screen.getByTestId('edition-button')).toBeInTheDocument();
    expect(screen.getByTestId('delete-button')).toBeInTheDocument();
  });
  it('Should block user edition when user is blocked', () => {
    render(
      <StudentInfoRecord
        userToFind={'userToFind'}
        info={{
          id: '23',
          attributes: {
            first_name: 'name',
            Birthday: 'string',
            last_name: 'lastname',
            TextRole: 'string',
            blocked: true
          }
        }}
      />
    );
    expect(screen.getByText('name lastname')).toBeInTheDocument();
    expect(screen.queryByTestId('edition-button')).not.toBeInTheDocument();
    expect(screen.getByTestId('delete-button')).toBeInTheDocument();
  });
});
