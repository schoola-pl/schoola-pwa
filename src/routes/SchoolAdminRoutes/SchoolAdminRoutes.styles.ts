import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  height: 100vh;
  width: 100vw;
  background-color: #f7f8fa !important;
  @media (max-width: ${({ theme }) => theme.screenSize.tabletMD}) {
    grid-template-columns: 25% 75%;
  }
`;
