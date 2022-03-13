import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 9999999999999999;
  min-height: 200px;
  width: min(100%, 600px);
  padding: 3rem;
  background-color: white;
  border-radius: 2rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 1.5rem;

  * {
    margin: 0;
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999999999999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  border-bottom: 3px solid black;
  padding-bottom: 0.8rem;
  margin-bottom: 1.2rem;
`;
