import styled, { keyframes } from 'styled-components';

const textAppear = keyframes`
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
`;

const ErrorParagraph = styled.p`
  margin: 0 0 5px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: red;
  animation: ${textAppear} 0.4s ease-in-out;
`;

export default ErrorParagraph;
