import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div.attrs({
  'data-testid': 'loader'
})<{ fitContent?: boolean; bgColor?: string | undefined }>`
  width: 110px;
  height: 110px;
  background: ${({ theme }) => theme.colors.accentGreen};
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 1s ease-in-out infinite;

  ${({ fitContent, theme }) =>
    fitContent &&
    `
    --loadingColor: ${theme.colors.accentGreen};
    height: 25px;
    width: 25px;
    background: ${theme.colors.accentBlue};
  `}
  ${({ bgColor }) =>
    bgColor &&
    `
  --loadingColor: ${bgColor};
  `}
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 65%;
    height: 65%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: var(--loadingColor);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 30%;
    height: 30%;
    transform: translateX(-50%);
    background-color: var(--loadingColor);
  }
`;

export default Loader;
