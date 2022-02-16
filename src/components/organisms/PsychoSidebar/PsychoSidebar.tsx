import styled from 'styled-components';
import TodayIcon from 'assets/icons/TodayIcon.svg';
import AppointmentIcon from 'assets/icons/UserSidebarIcons/AppointmentIcon.svg';
import UserIcon from 'assets/icons/UserSidebarIcons/UserIcon.svg';
import WeekIcon from 'assets/icons/WeekIcon.svg';
import { NavLink } from 'react-router-dom';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const Wrapper = styled.div`
  z-index: 999999;
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
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 1rem;
`;

interface Props {
  name?: string;
}

export const StyledListItem = styled(NavLink)<Props>`
  display: flex;
  align-items: center;
  text-decoration: none;
  // margin-right: 1.5rem;
  &.active {
    border-radius: 2rem;
    &::after {
      padding-right: 1rem;
      content: '${({ name }) => name}';
      color: white;
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export const StyledSidebarLink = styled(SidebarLink)`
  padding-right: 1rem;
  margin-right: 0rem;
`;

const PsychoSidebar = () => (
  <Wrapper>
    <StyledList key="237079786">
      <StyledListItem name="Profil" to="/psycho/profile">
        <StyledSidebarLink icon={UserIcon} />
      </StyledListItem>
      <StyledListItem name="Kalendarz" to="/psycho/calendar">
        <StyledSidebarLink icon={AppointmentIcon} />
      </StyledListItem>
      <StyledListItem name="Tydzień" to="/psycho/week">
        <StyledSidebarLink icon={WeekIcon} />
      </StyledListItem>
      <StyledListItem name="Dzisiaj" to="/psycho/today">
        <StyledSidebarLink icon={TodayIcon} />
      </StyledListItem>
    </StyledList>
  </Wrapper>
);

export default PsychoSidebar;
