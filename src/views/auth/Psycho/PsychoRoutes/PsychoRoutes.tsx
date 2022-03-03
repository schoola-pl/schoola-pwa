import PsychoTemplate from 'components/templates/PsychoTemplate/PsychoTemplate';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import PsychoLoginTemplate from 'components/templates/PsychoLoginTemplate/PsychoLoginTemplate';
import { Navigate, Route, Routes } from 'react-router';
import TodayPage from 'views/auth/Psycho/TodayPage/TodayPage';
import ProfilePage from 'views/auth/Psycho/ProfilePage/ProfilePage';
import CalendarPage from 'views/auth/Psycho/CalendarPage/CalendarPage';
import WeekPage from 'views/auth/Psycho/WeekPage/WeekPage';
import DayPage from 'views/auth/Psycho/DayPage/DayPage';

const PsychoRoutes = () => {
  const user = useSelector((state: storeRoot) => state.user);

  return (
    <PsychoTemplate>
      {user && !user.confirmed ? (
        <PsychoLoginTemplate />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="today" />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/week" element={<WeekPage />} />
          <Route path="/week/:dayName" element={<DayPage />} />
        </Routes>
      )}
    </PsychoTemplate>
  );
};

export default PsychoRoutes;