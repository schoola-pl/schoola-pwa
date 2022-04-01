import styled from 'styled-components';
import Info from 'components/atoms/Info/Info';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const StyledInfo = styled(Info)`
  margin-top: 0.5rem;
`;

export const Form = styled.form`
  padding: 1rem;
  margin-block: 2.5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
