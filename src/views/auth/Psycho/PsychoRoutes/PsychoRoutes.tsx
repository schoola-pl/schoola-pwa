import { Routes } from 'react-router-dom';
import { Navigate, Route } from 'react-router';
import TodayPage from 'views/auth/Psycho/TodayPage/TodayPage';
import ProfilePage from 'views/auth/Psycho/ProfilePage/ProfilePage';
import CalendarPage from 'views/auth/Psycho/CalendarPage/CalendarPage';
import WeekPage from 'views/auth/Psycho/WeekPage/WeekPage';

const PsychoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="today" />} />
      <Route path="/today" element={<TodayPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/week" element={<WeekPage />} />
    </Routes>
  );
};

export default PsychoRoutes;
