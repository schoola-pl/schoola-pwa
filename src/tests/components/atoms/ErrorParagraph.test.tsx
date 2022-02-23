import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';
import { render, screen } from '../../../test-utils';

describe('Components > Atoms > ErrorParagraph', () => {
  it('Should render a paragraph', () => {
    render(<ErrorParagraph>There should be some error</ErrorParagraph>);
    expect(screen.getByText(/there should be/i)).toBeInTheDocument();
  });
});
