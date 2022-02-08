import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  margin: 1.5rem 3rem 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  #loader {
    height: 50vh;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: -5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;
