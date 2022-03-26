import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 90%;
  padding: 1.2rem;
  border: none;
  border-radius: 2.5rem;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  outline: none;
  margin-bottom: 1rem;
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const StudentResult = styled.div`
  background-color: white;
  height: 5rem;
`;

const Search = () => {
  return (
    <PageWrapper>
      <SearchInput placeholder="Wyszukaj ucznia, klasę etc." />
      <ResultsWrapper>
        <StudentResult>Student</StudentResult>
        <StudentResult>Student</StudentResult>
        <StudentResult>Student</StudentResult>
      </ResultsWrapper>
    </PageWrapper>
  );
};

export default Search;
