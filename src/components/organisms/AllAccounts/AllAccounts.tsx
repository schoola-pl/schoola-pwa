import React, { useEffect, useRef, useState } from 'react';
import Input from 'components/atoms/Input/Input';
import { storeRoot, useGetUsersQuery } from 'store';
import { useSelector } from 'react-redux';
import { SearchRecord, SearchRecords, Wrapper } from './AllAccounts.styles';
import Loading from 'components/molecules/Loading/Loading';

interface resultType {
  id: string;
  first_name: string;
  last_name: string;
  TextRole: string;
}

const defaultPhrase = 'Tutaj się pojawi twoja fraza...';
const AllAccounts: React.FC = () => {
  const [phrase, setPhrase] = useState(defaultPhrase);
  const [results, setResults] = useState<resultType[] | []>([]);
  const user = useSelector((state: storeRoot) => state.user);
  const users = useGetUsersQuery({
    schoolId: user?.schoolId
  });
  const searchInput = useRef<HTMLInputElement | null>(null);

  const copyURL = () => {
    const cb = navigator.clipboard;
    cb.writeText(encodeURI(window.location.href.split('?', 1) + '?q=' + phrase)).then(() => {
      alert('Skopiowano URL do schowka!');
    });
  };

  const handleSearch = (ev: KeyboardEvent) => {
    if (ev.target && ev.key !== 'Shift' && ev.key !== 'Enter' && ev.key !== 'Tab' && ev.key !== 'Ctrl') {
      const target = ev.target;
      const { value } = target as HTMLInputElement;
      const preparedValue = value.toLowerCase().trim();
      setPhrase(value ? value.trim() : defaultPhrase);
      if (preparedValue) {
        const destructuredUsers = users.data as resultType[];
        const founded = destructuredUsers.filter(
          ({ first_name, last_name }) => first_name.toLowerCase().includes(preparedValue) || last_name.toLowerCase().includes(preparedValue)
        );
        setResults(founded);
      } else setResults([]);
    }
  };

  useEffect(() => {
    const input = searchInput.current;
    if (input && !users.isLoading) {
      input.focus();
      input.addEventListener('keyup', handleSearch);
    }
    return () => {
      if (input) {
        input.removeEventListener('keyup', handleSearch);
        setResults([]);
        setPhrase(defaultPhrase);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, users.isLoading]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const query = urlParams.get('q');
    if (!users.isLoading && query && searchInput.current) {
      setPhrase(query);
      const destructuredUsers = users.data as resultType[];
      const founded = destructuredUsers.filter(
        ({ first_name, last_name }) => first_name.toLowerCase().includes(query) || last_name.toLowerCase().includes(query)
      );
      setResults(founded);
      searchInput.current.value = query;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users.isLoading, searchInput]);

  return (
    <Wrapper>
      {users.isLoading ? (
        <Loading />
      ) : (
        <>
          <div style={{ borderRight: '2px solid #eceff7' }}>
            <h1>
              Wyszukaj <span>konto ucznia</span>
            </h1>
            <Input ref={searchInput} type="search" placeholder="Imię Nazwisko" />
            {phrase !== defaultPhrase ? <u onClick={copyURL}>Skopiuj URL do błyskawicznego wyszukania podanej frazy</u> : null}
          </div>
          <div>
            <h1
              style={{
                display: 'block',
                paddingLeft: '3rem',
                paddingBottom: '1rem',
                borderBottom: '2px solid #eceff7'
              }}
            >
              Wyniki wyszukiwania frazy: <span id="cut">{phrase}</span>
            </h1>
            <SearchRecords>
              {results.length > 0 ? (
                results.map(({ id, first_name, last_name, TextRole }) => (
                  <SearchRecord key={id}>
                    <h1>{`${first_name} ${last_name}`}</h1>
                    <p>{TextRole === 'Student' ? 'Uczeń' : 'Samorząd Uczniowski'}</p>
                  </SearchRecord>
                ))
              ) : (
                <p style={{ textAlign: 'center', fontSize: '2.5rem', marginTop: '15rem' }}>Brak wyników</p>
              )}
            </SearchRecords>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default AllAccounts;
