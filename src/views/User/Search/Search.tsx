import { PageWrapper, StyledIconDiv, ResultsWrapper, SearchInputWrapper } from './Search.styles';
import { useState } from 'react';
import SearchIcon from 'assets/icons/SearchIcon.svg';
import UserSearchRecord from 'components/atoms/UserSearchRecord/UserSearchRecord';

interface Props {
  TextClassName?: string;
  Role?: string;
  firstName?: string;
  lastName?: string;
}

const searchData = [
  { TextClassName: '3A', Role: 'Uczeń', firstName: 'Tadeusz', lastName: 'Norek' },
  { TextClassName: '3B', Role: 'Samorząd Uczniowski', firstName: 'Jarek', lastName: 'Tadek' },
  { TextClassName: '1B', Role: 'Uczeń', firstName: 'Krzysztof', lastName: 'Ibisz' },
  { TextClassName: '2D', Role: 'Uczeń', firstName: 'Tomaszenko', lastName: 'Jarenosz' },
  { TextClassName: '1D', Role: 'Uczeń', firstName: 'Miroslav', lastName: 'Klose' }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <PageWrapper>
      <SearchInputWrapper>
        <input
          type="search"
          placeholder="Wyszukaj ucznia, klasę etc."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <StyledIconDiv icon={SearchIcon} />
      </SearchInputWrapper>
      <ResultsWrapper>
        {searchData
          .filter((user) => user.firstName.toLowerCase().includes(searchTerm))
          .map(({ TextClassName, Role, firstName, lastName }) => (
            <UserSearchRecord TextClassName={TextClassName} Role={Role} firstName={firstName} lastName={lastName} />
          ))}
      </ResultsWrapper>
    </PageWrapper>
  );
};

export default Search;
