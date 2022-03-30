import styled from 'styled-components';
import IconDiv from 'components/atoms/IconDiv/IconDiv';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchInputWrapper = styled.div`
  width: 95%;
  padding: 1.2rem;
  border: none;
  border-radius: 3rem;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  outline: none;
  background-color: white;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  position: relative;

  input {
    outline: none;
    border: none;
  }
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;

  p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const StyledIconDiv = styled(IconDiv)`
  margin-right: 0rem;
`;
