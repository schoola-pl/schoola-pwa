import styled from 'styled-components';

type Props = {
  icon?: string;
};

export const IconDiv = styled.div<Props>`
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 100%;
  aspect-ratio: 9/12;
  width: 70%;
  background-position: center;

  @media (min-width: ${({ theme }) => theme.screenSize.tabletSM}) {
    width: 50%;
  }
`;

export const Greetings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 1.4rem;
  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    margin: 0;

    span {
      color: ${({ theme }) => theme.colors.accentGreen};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0;
    text-align: center;

    span {
      color: ${({ theme }) => theme.colors.accentBlue};
    }
  }
`;
