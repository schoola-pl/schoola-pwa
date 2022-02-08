import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    transform: translateY(30%);
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
`;

export const StyledButton = styled(Button)`
  transform: translateY(-20%);
`;

type Props = {
  icon?: string;
};

export const IconDiv = styled.div<Props>`
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  height: 35rem;
  width: 35rem;
`;
