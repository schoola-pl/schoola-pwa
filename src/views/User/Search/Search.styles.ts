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
    width: 100%;
    font-size: 1.6rem;
    padding: 0.5rem 1rem;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }

    &::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }

    &::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }
  }
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-inline: 1.8rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const StyledIconDiv = styled(IconDiv)`
  margin-right: 0;
`;
