import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import { Routes } from 'react-router-dom';
import { Navigate, Route } from 'react-router';
import Appointment from 'views/auth/User/Appointment/Appointment';
import Spotted from 'views/auth/User/Spotted/Spotted';
import Feed from 'views/auth/User/Feed/Feed';
import Settings from 'views/auth/User/Settings/Settings';
import Error404 from 'views/Error404/Error404';
import Home from 'views/auth/User/Home/Home';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import FirstLoginTemplate from 'components/templates/FirstLoginTemplate/FirstLoginTemplate';
import CommentSection from 'views/auth/User/CommentSection/CommentSection';

const Profile = () => {
  const user = useSelector((state: storeRoot) => state.user);

  return (
    <>
      {user && !user.confirmed ? (
        <FirstLoginTemplate />
      ) : (
        <UserTemplate>
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="/home" element={<Home />} />
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

export default Profile;
