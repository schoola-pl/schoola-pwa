import { render, screen } from '../../../test-utils';
import Modal from '../../../components/molecules/Modal/Modal';

describe('Components > Molecules > Modal', () => {
  it('Should renders', () => {
    render(<Modal title={'tytuł'}>A to treść</Modal>);
    expect(screen.getByText('tytuł')).toBeInTheDocument();
    expect(screen.getByText('A to treść')).toBeInTheDocument();
  });
});
