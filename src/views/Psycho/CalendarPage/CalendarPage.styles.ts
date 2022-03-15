import styled from 'styled-components';
import Calendar from 'react-calendar';

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  position: relative;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;
  display: flex;
  padding: 2rem 4rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

  h1 {
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;
