import styled from 'styled-components';
import Calendar from 'react-calendar';
import Button from 'components/atoms/Button/Button';

export const PageWrapper = styled.div`
  display: grid;
  margin-top: -2rem;
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
`;

export const Wrapper = styled.div`
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  select {
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    background-color: #f7f8fa;
  }

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const StyledButton = styled(Button)`
  margin: 1rem 0 1rem;
  width: 20rem;
  background-color: ${({ theme }) => theme.colors.accentBlue};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentBlue};
    opacity: 0.9;
  }
`;
