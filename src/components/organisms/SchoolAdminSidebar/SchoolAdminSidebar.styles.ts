import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Logo = styled.h1`
  margin-bottom: 7rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-decoration: none;
  color: black;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &::after {
    content: '.';
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

export const Wrapper = styled.nav`
  height: 100vh;
  width: 100%;
  padding: 3rem 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightBrown};
  flex-direction: column;
  align-items: center;
  z-index: 9999;
`;

export const StyledList = styled.ul`
  height: 100%;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
export const StyledListItem = styled(NavLink)<{ isDanger?: boolean }>`
  cursor: pointer;
  display: grid;
  grid-template-columns: 37% 43%;
  grid-template-rows: 1fr;
  align-items: center;
  width: 85%;
  text-decoration: none;
  color: black;
  position: relative;
  left: 0;
  opacity: 0.8;
  transition: opacity 0.2s ${easing};

  &:not(:first-child) {
    margin-top: 2rem;
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
  font-size: 1.5rem;
`;
