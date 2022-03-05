import styled from 'styled-components';

const Sidebar = styled.div`
  z-index: 99999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  border-radius: 3rem;
  width: 95%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  left: 2.6%;
  bottom: 2.5%;

  & > ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    padding-left: 1rem;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default Sidebar;
