import React, { useEffect, useRef, useState } from 'react';
import Input from 'components/atoms/Input/Input';
import styled from 'styled-components';
import { storeRoot, useGetUsersQuery } from 'store';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #fafafa;
  padding: 0 6rem;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;

    span {
      color: ${({ theme }) => theme.colors.accentGreen};
    }

    span#cut {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: block;
      font-size: 1.7rem;
      max-width: 80%;
      margin-bottom: 1.2rem;
    }

    & > h1 {
      font-size: 2.2rem;
    }

    & > input {
      width: 70%;
      font-size: 1.8rem;
    }
  }
`;

export const SearchRecords = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;

  & > div {
    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
`;

export const SearchRecord = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 23px -10px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 1rem 2rem;
  position: relative;
  border: 2px solid #fff;
  transition: border 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.accentGreen};
  }

  * {
    margin: 0;
  }

  h1 {
    font-size: 2.4rem;
  }

  p {
    font-weight: bold;
    opacity: 0.7;
    font-size: 1.3rem;
  }

  span {
    position: absolute;
    top: 50%;
    right: 20px;
    font-size: 3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.accentBlue} !important;
    letter-spacing: 0.4rem;
    transform: translateY(-50%);
  }
`;

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

  const handleSearch = (ev: KeyboardEvent) => {
    if (ev.target) {
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
    if (input) {
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
  }, [searchInput]);

  return (
    <Wrapper>
      <div>
        <h1>
          Wyszukaj <span>konto ucznia</span>
        </h1>
        <Input ref={searchInput} type="search" placeholder="Imię Nazwisko" />
      </div>
      <div>
        <h1>
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
            <p>Ni ma!</p>
          )}
        </SearchRecords>
      </div>
    </Wrapper>
  );
};

export default AllAccounts;
