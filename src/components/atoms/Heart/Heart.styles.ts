import styled from 'styled-components';

interface Props {
  isLiked?: boolean;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  transform: translateX(50%);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.75rem;
    width: 2.75rem;
    border: none;
    background: transparent;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme, isLiked }) => (isLiked ? theme.colors.accentRed : theme.colors.lightRed)};
  }
`;
