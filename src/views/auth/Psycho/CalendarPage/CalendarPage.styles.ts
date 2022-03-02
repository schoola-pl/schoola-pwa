import styled from 'styled-components';
import Calendar from 'react-calendar';
import Button from 'components/atoms/Button/Button';

export const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const StyledCalendar = styled(Calendar)`
  width: 90%;
  height: 29.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  margin-bottom: 1rem;

  @media (min-height: 788px) {
    margin-bottom: 2rem;
    height: 30.5rem;
  }

  @media (min-height: 830px) {
    margin-bottom: 4.2rem;
    height: 31.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 24.5rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  h1 {
    margin-right: 6rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  button {
    border: none;
    border-radius: 1rem;
    color: white;
    height: 4rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xs};
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
`;

export const CancelButton = styled(Button)`
  margin-left: 1rem;
  background-color: ${({ theme }) => theme.colors.accentRed};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentRed};
    opacity: 0.5;
  }
`;
