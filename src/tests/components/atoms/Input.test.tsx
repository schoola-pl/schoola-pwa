import Input from 'components/atoms/Input/Input';
import { render, screen } from '../../../test-utils';
import { theme } from 'assets/styles/theme';

describe('Components > Atoms > Input', () => {
  it('Should render a input', () => {
    render(<Input placeholder="Input file" />);
    expect(screen.getByPlaceholderText('Input file')).toBeInTheDocument();
  });
  it('Should change border when error', () => {
    const { rerender } = render(<Input placeholder="Input file" />);
    const input = screen.getByPlaceholderText('Input file');
    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle(`border: 2px solid ${theme.colors.selectedItemGrey}`);
    rerender(<Input placeholder="Input file" error />);
    expect(input).not.toHaveStyle(`border: 2px solid ${theme.colors.selectedItemGrey}`);
    expect(input).toHaveStyle(`border: 2px solid ${theme.colors.accentRed}`);
  });
});
