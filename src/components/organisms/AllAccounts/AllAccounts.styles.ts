import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #fafafa;
  padding: 0 6rem;
  position: relative;

  #loader {
    height: 50vh;
  }

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;

    &:last-child {
      padding-left: 7rem;
    }

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

      &::-webkit-search-cancel-button {
        position: relative;
        right: 20px;
        -webkit-appearance: none;
      }
    }

    & > u {
      font-size: 1.3rem;
      padding-left: 2.5rem;
      margin-top: 0.8rem;
      color: ${({ theme }) => theme.colors.accentBlue};
      cursor: pointer;
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
