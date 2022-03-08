import styled from 'styled-components';
import Calendar from 'react-calendar';
import Button from 'components/atoms/Button/Button';

export const PageWrapper = styled.div`
  display: grid;
  margin-top: -2rem;
  padding-inline: 2rem;
  grid-template-rows: 1fr auto;
  grid-gap: 1rem;
`;

export const StyledCalendar = styled(Calendar)`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;
  display: flex;
  padding: 2rem 4rem;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 100%;

  h1 {
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
