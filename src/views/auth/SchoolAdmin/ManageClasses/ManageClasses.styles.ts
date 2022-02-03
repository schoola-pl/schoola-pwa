import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const Links = styled.div`
  width: 100%;
  margin: 2rem 3rem 3rem 3rem;
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  border-bottom: 3px solid #eceff7;
  transition: all 0.1s linear;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export const HeadingLink = styled(NavLink)`
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

export const AmountWrapper = styled.div`
  padding: 0.2rem 3rem 3rem 3rem;
  display: flex;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  span {
    border-radius: 1rem;
    margin-left: 0.5rem;
    padding: 0.5rem 0.75rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

export const ClassesWrapper = styled.div<{ columns?: number; isCenter?: boolean }>`
  padding-left: 3rem;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || '3'}, 1fr);
  ${({ isCenter }) =>
    isCenter &&
    `
    padding: 2rem;
    justify-items: center;
    `}
`;

export const InnerWrapper = styled.div`
  margin: 3rem 3rem 0;
  display: flex;
  justify-content: space-between;
`;

export const AddButton = styled(SidebarLink)`
  padding: 2.5rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  text-decoration: none;
`;
