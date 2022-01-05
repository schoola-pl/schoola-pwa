import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  height: 100vh;
  width: 100vw;
  background-color: #f2f2f2 !important;
  @media (max-width: ${({ theme }) => theme.screenSize.tabletMD}) {
    grid-template-columns: 25% 75%;
  }
`;
