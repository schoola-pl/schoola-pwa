import { Routes } from 'react-router-dom';
import { Navigate, Route } from 'react-router';
import TodayPage from 'views/auth/Psycho/TodayPage/TodayPage';
import ProfilePage from 'views/auth/Psycho/ProfilePage/ProfilePage';
import CalendarPage from 'views/auth/Psycho/CalendarPage/CalendarPage';
import WeekPage from 'views/auth/Psycho/WeekPage/WeekPage';
import PsychoTemplate from 'components/templates/PsychoTemplate/PsychoTemplate';

const PsychoRoutes = () => {
  return (
    <PsychoTemplate>
      <Routes>
        <Route path="/" element={<Navigate to="today" />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/week" element={<WeekPage />} />
      </Routes>
    </PsychoTemplate>
  );
};

export default PsychoRoutes;
