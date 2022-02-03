import styled from 'styled-components';

interface Props {
  isLiked?: boolean;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  margin-right: 10rem;
  transform: translateX(75%);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border: none;
    background: transparent;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme, isLiked }) => (isLiked ? theme.colors.accentRed : theme.colors.lightRed)};
  }
`;
