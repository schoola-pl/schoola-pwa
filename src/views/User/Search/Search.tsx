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
  { id: 1, TextClassName: '3A', Role: 'Uczeń', firstName: 'Tadeusz', lastName: 'Norek' },
  { id: 2, TextClassName: '3B', Role: 'Samorząd Uczniowski', firstName: 'Jarek', lastName: 'Tadek' },
  { id: 3, TextClassName: '1B', Role: 'Uczeń', firstName: 'Krzysztof', lastName: 'Ibisz' },
  { id: 4, TextClassName: '2D', Role: 'Uczeń', firstName: 'Tomaszenko', lastName: 'Jarenosz' },
  { id: 5, TextClassName: '1D', Role: 'Uczeń', firstName: 'Miroslav', lastName: 'Klose' }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const search = (data: any) => {
    return data.filter((item: any) => item.firstName.toLowerCase().includes(searchTerm));
  };

  console.log(searchTerm.length);

  return (
    <PageWrapper>
      <SearchInputWrapper>
        <input
          type="search"
          placeholder="Szukaj"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <StyledIconDiv icon={SearchIcon} />
      </SearchInputWrapper>
      <ResultsWrapper>
        {searchTerm.length === 0 ? (
          <p>Wpisz frazę aby wyszukać ucznia, klasę, rolę itp.</p>
        ) : (
          searchData
            .filter((user) => user.firstName.toLowerCase().includes(searchTerm))
            .map(({ TextClassName, id, Role, firstName, lastName }) => (
              <UserSearchRecord key={id} TextClassName={TextClassName} Role={Role} firstName={firstName} lastName={lastName} />
            ))
        )}
      </ResultsWrapper>
    </PageWrapper>
  );
};

export default Search;
