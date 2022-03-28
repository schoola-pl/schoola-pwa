import styled from 'styled-components';
import IconDiv from 'components/atoms/IconDiv/IconDiv';
import SearchIcon from 'assets/icons/SearchIcon.svg';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SearchInputWrapper = styled.div`
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

  input {
    outline: none;
    border: none;
  }
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

const StudentResultWrapper = styled.div`
  background-color: white;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  height: 7.5rem;
  margin-bottom: 1.5rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &::after {
    content: '>';
    font-size: 2rem;
    margin-left: 5rem;
  }

  h1 {
    margin: 0.75rem;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    border-right: 3px solid ${({ theme }) => theme.colors.accentBlue};
  }
`;

const StyledIconDiv = styled(IconDiv)`
  margin-right: 1.5rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  h1 {
    margin: 0;
    padding: 0;
    text-transform: none;
    border: none !important;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  p {
    color: grey;
    margin: 0;
  }
`;

const Search = () => {
  return (
    <PageWrapper>
      <SearchInputWrapper>
        <input type="search" placeholder="Wyszukaj ucznia, klasę etc." />
        <StyledIconDiv icon={SearchIcon} />
      </SearchInputWrapper>
      <ResultsWrapper>
        <StudentResultWrapper>
          <h1>3d</h1>
          <InfoWrapper>
            <h1>Janusz Piechociński</h1>
            <p>Uczeń</p>
          </InfoWrapper>
        </StudentResultWrapper>
      </ResultsWrapper>
    </PageWrapper>
  );
};

export default Search;
