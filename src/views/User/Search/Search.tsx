import { PageWrapper, StyledIconDiv, ResultsWrapper, SearchInputWrapper } from './Search.styles';
import SearchIcon from 'assets/icons/SearchIcon.svg';
import UserSearchRecord from 'components/atoms/UserSearchRecord/UserSearchRecord';

const Search = () => {
  return (
    <PageWrapper>
      <SearchInputWrapper>
        <input type="search" placeholder="Wyszukaj ucznia, klasę etc." />
        <StyledIconDiv icon={SearchIcon} />
      </SearchInputWrapper>
      <ResultsWrapper>
        <UserSearchRecord />
      </ResultsWrapper>
    </PageWrapper>
  );
};

export default Search;
