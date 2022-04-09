import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.lightBrown};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2,
  p {
    text-align: center;
    padding-inline: 1.5rem;
  }

  h2 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    margin: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin: 0;
    letter-spacing: 1px;
  }
`;
