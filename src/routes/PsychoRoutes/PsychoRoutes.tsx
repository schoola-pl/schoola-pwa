import PsychoTemplate from 'components/templates/PsychoTemplate/PsychoTemplate';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import PsychoLoginTemplate from 'components/templates/PsychoLoginTemplate/PsychoLoginTemplate';
import { Navigate, Route, Routes } from 'react-router';
import TodayPage from 'views/Psycho/TodayPage/TodayPage';
import CalendarPage from 'views/Psycho/CalendarPage/CalendarPage';
import WeekPage from 'views/Psycho/WeekPage/WeekPage';
import DayPage from 'views/Psycho/DayPage/DayPage';
import Settings from 'views/User/Settings/Settings';

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
          <Route
            path="/settings"
            element={
              <div style={{ marginTop: '2.5rem', paddingInline: '2.5rem' }}>
                <Settings />
              </div>
            }
          />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/week" element={<WeekPage />} />
          <Route path="/week/:dayName" element={<DayPage />} />
        </Routes>
      )}
    </PsychoTemplate>
  );
};

export default PsychoRoutes;
