import { StyledListItem, StyledSidebarLink } from './PsychoSidebar.styles';
import TodayIcon from 'assets/icons/TodayIcon.svg';
import AppointmentIcon from 'assets/icons/UserSidebarIcons/AppointmentIcon.svg';
import WeekIcon from 'assets/icons/WeekIcon.svg';
import SettingsIcon from 'assets/icons/UserSidebarIcons/SettingsGreenIcon.svg';
import Sidebar from 'components/atoms/Sidebar/Sidebar';

const PsychoSidebar = () => (
  <Sidebar>
    <ul>
      <StyledListItem name="Dzisiaj" to="/psycho/today">
        <StyledSidebarLink icon={TodayIcon} />
      </StyledListItem>
      <StyledListItem name="Tydzień" to="/psycho/week">
        <StyledSidebarLink icon={WeekIcon} />
      </StyledListItem>
      <StyledListItem name="Kalendarz" to="/psycho/calendar">
        <StyledSidebarLink icon={AppointmentIcon} />
      </StyledListItem>
      <StyledListItem name="Ustawienia" to="/psycho/settings">
        <StyledSidebarLink icon={SettingsIcon} />
      </StyledListItem>
    </ul>
  </Sidebar>
);

export default PsychoSidebar;
