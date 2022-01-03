import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
export const StyledListItem = styled(NavLink)<{ isDanger?: boolean }>`
  display: flex;
  height: 8rem;
  width: 20rem;
  align-items: center;
  text-decoration: none;
  margin-top: 2rem;
  color: black;
  position: relative;
  left: 0;
  opacity: 0.8;
  transition: opacity 0.2s ${easing};

  &:last-child {
    margin-top: 20rem;
  }

  &::after {
    content: '';
    opacity: 0;
    background-color: ${({ isDanger, theme }) => (!isDanger ? 'white' : theme.colors.accentRed)};
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: opacity 0.2s ${easing};
  }

  &:hover {
    opacity: 1;

    &::after {
      opacity: 0.5;
    }
  }

  &:hover,
  &.active {
    opacity: 1;

    &::after {
      opacity: 1;
    }
  }
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;
