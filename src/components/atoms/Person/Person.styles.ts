import styled from 'styled-components';

export const ContentWrapper = styled.div`
  height: 30%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    @media (min-width: 390px) {
      font-size: 1.8rem;
    }
  }

  p {
    transform: translateY(-100%);
    color: grey;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
`;

export const UserInfoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  width: 17rem;
  height: 24rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  @media (min-width: 390px) {
    width: 21rem;
    height: 28rem;
  }
`;

export const Picture = styled.img`
  background-repeat: no-repeat;
  max-height: 70%;
  min-width: 100%;
`;
