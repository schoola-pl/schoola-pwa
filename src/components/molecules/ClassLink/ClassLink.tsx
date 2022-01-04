import styled from 'styled-components';
import Link from 'react-router-dom';

const Wrapper = styled.div`
  min-height: 12rem;
  width: 99%;
  background-color: white;
  border-radius: 2rem;
  margin-top: 1rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.12);
  display: flex;
  text-decoration: none;
  color: black;

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.accentGreen};
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.5);
    cursor: pointer;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: black;
    margin-right: 1rem;
    transform: translateX(-100%);
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.l};

    strong {
      color: ${({ theme }) => theme.colors.accentBlue};
    }
  }
`;

const ClassLink = () => (
  <Wrapper as="a" href="#">
    <InfoWrapper>
      <h1>1A</h1>
      <p>
        liczba osób w klasie: <strong>35</strong>
      </p>
    </InfoWrapper>
  </Wrapper>
);

export default ClassLink;
