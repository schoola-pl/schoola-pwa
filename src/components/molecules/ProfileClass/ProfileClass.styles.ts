import styled from 'styled-components';

export const ClassWrapper = styled.div`
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;
  height: 11rem;
  width: 14rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 1.5rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: grey;
    display: flex;
    align-items: center;

    &::after {
      content: '>';
      padding-left: 1rem;
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }

  @media (min-width: 390px) {
    height: 12.5rem;
  }
`;

export const CirclesWrapper = styled.div`
  display: flex;
  transform: translateX(-15%);
`;

interface Props {
  icon?: string;
}

export const CircleOne = styled.img<Props>`
  z-index: 2;
  background-repeat: no-repeat;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 3.5rem;
  border: 3px solid white;
  transform: translateX(64%);
`;
export const CircleTwo = styled.img<Props>`
  z-index: 1;
  background-repeat: no-repeat;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 3.5rem;
  border: 3px solid white;
  transform: translateX(32%);
`;
export const CircleThree = styled.img<Props>`
  z-index: 0;
  background-repeat: no-repeat;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 3.5rem;
  border: 3px solid white;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-25%);

  @media (min-width: 390px) {
    transform: translateY(-18%);
  }

  h1 {
    padding-right: 1rem;
  }
`;
