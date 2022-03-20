import { render, screen } from '../../../test-utils';
import Roles from '../../../components/atoms/Roles/Roles';

describe('Components > Atoms > Roles', () => {
  it('Renders component', () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const randomRoles = ['role1', 'role2', 'role3', 'role4', 'role5'];
    render(<Roles role={randomRoles[randomNumber]} />);
    expect(screen.getByText(randomRoles[randomNumber])).toBeInTheDocument();
  });
});
