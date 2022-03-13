import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 34rem;
  min-height: 450px;
  padding-block: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25% 65% 10%;
  align-items: center;
  justify-items: center;

  @media (min-width: 435px) {
    width: min(100%, 400px);
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 0;
    }

    p {
      margin: 0 0 2.5rem;
      opacity: 0.9;
      letter-spacing: 0.3px;
      font-size: 1.3rem;
    }
  }
`;
