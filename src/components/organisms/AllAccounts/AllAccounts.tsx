import React, { useEffect, useRef, useState } from 'react';
import Input from 'components/atoms/Input/Input';
import styled from 'styled-components';

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

const AllAccounts: React.FC = () => {
  const [phrase, setPhrase] = useState('...');
  const searchInput = useRef<HTMLInputElement | null>(null);

  const handleSearch = (ev: KeyboardEvent) => {
    if (ev.target) {
      const target = ev.target;
      const { value } = target as HTMLInputElement;
      setPhrase(value ? value : '...');
      if (value) {
        // Rest of code
      }
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
      }
    };
  }, [searchInput]);

  return (
    <Wrapper>
      <div>
        <h1>
          Wyszukaj <span>konto ucznia</span>
        </h1>
        <Input ref={searchInput} type="search" placeholder="Np. Jan Kowalski 1D" />
      </div>
      <div>
        <h1>
          Wyniki wyszukiwania frazy: <span>{phrase}</span>
        </h1>
        <SearchRecords>
          <SearchRecord>
            <h1>Jan Kowalski</h1>
            <p>Samorząd Uczniowski</p>
            <span>1D</span>
          </SearchRecord>
          <SearchRecord>
            <h1>Jan Kowalski</h1>
            <p>Samorząd Uczniowski</p>
            <span>1D</span>
          </SearchRecord>
          <SearchRecord>
            <h1>Jan Kowalski</h1>
            <p>Samorząd Uczniowski</p>
            <span>1D</span>
          </SearchRecord>
          <SearchRecord>
            <h1>Jan Kowalski</h1>
            <p>Samorząd Uczniowski</p>
            <span>1D</span>
          </SearchRecord>
          <SearchRecord>
            <h1>Jan Kowalski</h1>
            <p>Uczeń</p>
            <span>1D</span>
          </SearchRecord>
        </SearchRecords>
      </div>
    </Wrapper>
  );
};

export default AllAccounts;
