import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    padding: 1rem;
  }

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.s};
    padding-right: 2rem;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 2rem;
`;
