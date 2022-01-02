import styled from 'styled-components';

export const Logo = styled.h1`
  margin-top: 6.5rem;
  font-size: ${({ theme }) => theme.fontSize.xl};

  &::after {
    content: '.';
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

export const Wrapper = styled.nav`
  position: fixed;
  height: 100vh;
  width: 22.5rem;
  padding: 0;
  left: 0;
  top: 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightBrown};
  border-right: 5px solid ${({ theme }) => theme.colors.accentGreen};
  flex-direction: column;
  align-items: center;
  z-index: 9999;
`;

export const StyledList = styled.ul`
  margin: 2.5rem 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  left: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
  height: 8rem;
  width: 20rem;
  align-items: center;
  text-decoration: none;
  margin-top: 2rem;
  color: black;
  border-radius: 2rem;
  position: relative;
  left: 0;
  transition: all 0.3s;

  &:last-child {
    margin-top: 20rem;
  }

  &:hover {
    background-color: white;
  }
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;
