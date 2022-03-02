import styled from 'styled-components';
import Calendar from 'react-calendar';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledCalendar = styled(Calendar)`
  width: 105%;
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
    margin-bottom: 4rem;
  }
`;

export const Wrapper = styled.div`
  width: 105%;
  height: 24.5rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;
  display: flex;
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

export const ModalWrapper = styled.div`
  display: flex;
`;
