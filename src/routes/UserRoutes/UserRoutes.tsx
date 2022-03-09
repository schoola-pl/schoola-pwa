import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import { Routes } from 'react-router-dom';
import { Navigate, Route } from 'react-router';
import Appointment from 'views/User/Appointment/Appointment';
import Spotted from 'views/User/Spotted/Spotted';
import Feed from 'views/User/Feed/Feed';
import Settings from 'views/User/Settings/Settings';
import Error404 from 'views/Error404/Error404';
import Profile from 'views/User/Profile/Profile';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import FirstLoginTemplate from 'components/templates/FirstLoginTemplate/FirstLoginTemplate';
import CommentSection from 'views/User/CommentSection/CommentSection';

const UserRoutes = () => {
  const user = useSelector((state: storeRoot) => state.user);

  return (
    <>
      {user && !user.confirmed ? (
        <FirstLoginTemplate />
      ) : (
        <UserTemplate>
          <Routes>
            <Route path="/" element={<Navigate to="profile" />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/spotted" element={<Spotted />} />
            <Route path="/spotted/comments" element={<Navigate to="/student/spotted" />} />
            <Route path="/spotted/comments/:commentsId" element={<CommentSection />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/feed/comments" element={<Navigate to="/student/spotted" />} />
            <Route path="/feed/comments/:commentsId" element={<CommentSection />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </UserTemplate>
      )}
    </>
  );
};

export default UserRoutes;
