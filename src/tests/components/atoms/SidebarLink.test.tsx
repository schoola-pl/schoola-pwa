import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import { render, screen } from '../../../test-utils';

describe('Components > Atoms > SidebarLink', () => {
  it('Should render a sidebar link', () => {
    render(<SidebarLink icon={''}>I'm just simple link :)</SidebarLink>);
    expect(screen.getByText(/link/i)).toBeInTheDocument();
  });
});
