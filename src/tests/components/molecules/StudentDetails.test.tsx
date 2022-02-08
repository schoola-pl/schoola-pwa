import { render, screen } from '../../../test-utils';
import StudentDetail from '../../../components/molecules/StudentDetail/StudentDetail';

describe('Components > Molecules > StudentDetail', () => {
  it('Should render a student detail', () => {
    render(
      <StudentDetail
        userToFind={'userToFind'}
        students={[
          {
            id: '23',
            attributes: {
              first_name: 'testFirstName',
              last_name: 'test',
              blocked: false,
              avatar: 'test',
              Birthday: 'test',
              TextRole: 'test'
            }
          }
        ]}
      />
    );
    expect(screen.getByText('testFirstName test')).toBeInTheDocument();
  });
  it('Should display multiple students', () => {
    const students = [
      {
        id: '23',
        attributes: {
          first_name: 'testFirstName',
          last_name: 'test',
          blocked: false,
          avatar: 'test',
          Birthday: 'test',
          TextRole: 'test'
        }
      },
      {
        id: '24',
        attributes: {
          first_name: 'testFirstName2',
          last_name: 'test2',
          blocked: false,
          avatar: 'test2',
          Birthday: 'test2',
          TextRole: 'test2'
        }
      }
    ];
    render(<StudentDetail students={students} userToFind={'userToFind'} />);
    expect(screen.getByText('testFirstName test')).toBeInTheDocument();
    expect(screen.getByText('testFirstName2 test2')).toBeInTheDocument();
    expect(screen.queryByText('testFirstName3 test3')).not.toBeInTheDocument();
  });
});
