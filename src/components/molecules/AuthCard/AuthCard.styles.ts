import styled from 'styled-components';

export const Wrapper = styled.div`
  width: min(100%, 400px);
  min-height: 450px;
  padding-block: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25% 65% 10%;
  align-items: center;
  justify-items: center;
`;
