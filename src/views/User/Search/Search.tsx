import { PageWrapper, ResultsWrapper, SearchInputWrapper, StyledIconDiv } from './Search.styles';
import { useState } from 'react';
import SearchIcon from 'assets/icons/SearchIcon.svg';
import UserSearchRecord from 'components/atoms/UserSearchRecord/UserSearchRecord';
import { storeRoot } from '../../../store';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getJWT } from '../../../helpers/jwt';
import { debounce } from 'lodash';
import { upperFirstLetter } from '../../../helpers/text';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const user = useSelector((state: storeRoot) => state.user);

  const search = (searchTerm: string) => {
    const first_name = searchTerm.split(' ')[0];
    const last_name = searchTerm.split(' ')[1];
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/users?filters[TextRole][$eq]=Student&filters[TextRole][$eq]=Moderator&filters[schoolId][$eq]=${
          user?.schoolId || ''
        }&pagination[pageSize]=100&filters[first_name][$eq]=${upperFirstLetter(first_name)}${
          last_name ? `&filters[last_name][$eq]=${upperFirstLetter(last_name)}` : ''
        }`,
        {
          headers: {
            Authorization: `Bearer ${getJWT()}`
          }
        }
      )
      .then((res) => {
        const preparedResults = res.data.filter((user: any) => user.confirmed === true);
        setSearchResults(preparedResults);
      });
  };

  return (
    <PageWrapper>
      <SearchInputWrapper>
        <input
          type="search"
          placeholder="Szukaj"
          onChange={debounce((e) => {
            search(e.target.value);
          }, 1000)}
        />
        <StyledIconDiv icon={SearchIcon} />
      </SearchInputWrapper>
      <ResultsWrapper>
        {!searchResults ? (
          <p>Wpisz pełne imię (możesz też nazwisko) osoby, którą chcesz znaleźć!</p>
        ) : searchResults.length > 0 ? (
          <UserSearchRecord data={searchResults} />
        ) : (
          <p>Brak wyników!</p>
        )}
      </ResultsWrapper>
    </PageWrapper>
  );
};

export default Search;
