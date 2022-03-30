import { PageWrapper, StyledIconDiv, ResultsWrapper, SearchInputWrapper } from './Search.styles';
import { useState } from 'react';
import SearchIcon from 'assets/icons/SearchIcon.svg';
import UserSearchRecord from 'components/atoms/UserSearchRecord/UserSearchRecord';

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
    return data.filter(
      (item: any) =>
        item.firstName.toLowerCase().includes(searchTerm) ||
        item.lastName.toLowerCase().includes(searchTerm) ||
        item.firstName.toLowerCase().includes(searchTerm) ||
        item.Role.toLowerCase().includes(searchTerm) ||
        item.TextClassName.toLowerCase().includes(searchTerm)
    );
  };

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
        {searchTerm.length === 0 ? <p>Wyszukaj klasę, osobę, rolę osoby w szkole etc.</p> : <UserSearchRecord data={search(searchData)} />}
      </ResultsWrapper>
    </PageWrapper>
  );
};

export default Search;
