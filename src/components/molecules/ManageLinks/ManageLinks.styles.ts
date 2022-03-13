import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  margin: 2rem 3rem 3rem 3rem;
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  border-bottom: 3px solid #eceff7;
  transition: all 0.1s linear;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  flex-direction: column;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  margin-right: 15rem;
  padding-bottom: 0.75rem;
  margin-bottom: 1.1rem;
  transition: color 0.1s linear;
  cursor: pointer;
  color: black;

  &::before {
    content: '';
    opacity: 0;
    position: absolute;
    bottom: -14px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    height: 3px;
    transition: opacity 0.2s linear;
  }

  &.active {
    &::before {
      opacity: 1;
    }
  }
`;
