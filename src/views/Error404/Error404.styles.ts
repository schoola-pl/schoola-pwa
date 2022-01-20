import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

type Props = {
  icon: string;
};

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    margin-top: 7.5rem;
    text-align: center;
  }
`;

export const ErrorDiv = styled.div<Props>`
  background-size: 75%;
  background-position: center;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  margin-bottom: 8rem;

  @media (min-width: 320px) {
    height: 35rem;
    width: 35rem;
  }

  @media (min-width: 650px) {
    height: 75rem;
    width: 75rem;
  }
`;

export const StyledButton = styled(Button)`
  margin-bottom: 7.5rem;
  padding: 2rem;
`;
