import styled from 'styled-components';

type Props = {
  icon?: string;
};

export const IconDiv = styled.div<Props>`
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  height: 35rem;
  width: 35rem;
`;

export const Greetings = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    text-align: center;
  }
`;
