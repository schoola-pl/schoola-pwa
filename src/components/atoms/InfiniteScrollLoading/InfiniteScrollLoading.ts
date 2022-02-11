import styled, { keyframes } from 'styled-components';

const textBouncing = keyframes`
  from {
    transform: translate(-50%, 0);
  }
  to {
    transform: translate(-50%, 10px);
  }
`;

export default styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 235px;
  z-index: 1000;
  background: rgb(91, 117, 166);
  background: linear-gradient(0deg, rgba(91, 117, 166, 1) 42%, rgba(255, 255, 255, 0.17970938375350143) 100%);

  &::before {
    content: 'Wczytywanie...';
    position: absolute;
    top: 7.5rem;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    animation: ${textBouncing} 0.5s 1.5s ease-in-out infinite alternate;
    font-size: 2.3rem;
    font-weight: bold;
  }
`;
