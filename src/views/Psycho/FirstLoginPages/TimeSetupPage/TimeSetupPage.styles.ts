import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  background-color: white;
  height: 80vh;
  width: 90vw;
  border-radius: 2rem;
  transform: translateY(-8%);
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h1`
  transform: translateY(100%);
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const Form = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  transform: translateY(50%);
`;
