import { render, screen } from '../../../test-utils';
import ActionMenu from '../../../components/molecules/ActionMenu/ActionMenu';

describe('Components > Molecules > ActionMenu', () => {
  it('Should renders', () => {
    render(<ActionMenu isLoading={false} isComment={false} isOpened={true} />);
    expect(screen.getByText('Zgłoś')).toBeVisible();
  });
  it('Should react with props', () => {
    const { rerender } = render(<ActionMenu isLoading={false} isComment={false} isOpened={false} />);
    expect(screen.getByText('Zgłoś')).not.toBeVisible();
    rerender(<ActionMenu isLoading={true} isComment={false} isOpened={true} />);
    expect(screen.queryByText('Zgłoś')).not.toBeInTheDocument();
    expect(screen.getByText('Zgłaszanie...')).toBeVisible();
  });
});
