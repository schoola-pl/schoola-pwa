import { Wrapper, StyledListItem, StyledList, StyledSidebarLink } from './PsychoSidebar.styles';
import TodayIcon from 'assets/icons/TodayIcon.svg';
import AppointmentIcon from 'assets/icons/UserSidebarIcons/AppointmentIcon.svg';
import UserIcon from 'assets/icons/UserSidebarIcons/UserIcon.svg';
import WeekIcon from 'assets/icons/WeekIcon.svg';

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
