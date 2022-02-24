import styled from 'styled-components';

export const ContentWrapper = styled.div`
  height: 30%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin: 0;

    @media (min-width: 390px) {
      font-size: 1.8rem;
    }
  }

  p {
    color: grey;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
`;

export const UserInfoWrapper = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-rows: 70% 30%;
  border-radius: 2rem;
  height: 24rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  @media (min-width: 390px) {
    height: 28rem;
  }
`;

export const Picture = styled.img`
  min-width: 100%;
  height: 100%;
`;
