import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import { Routes } from 'react-router-dom';
import { Navigate, Route } from 'react-router';
import Appointment from 'views/User/Appointment/Appointment';
import Spotted from 'views/User/Spotted/Spotted';
import Feed from 'views/User/Feed/Feed';
import SecuritySettings from 'views/User/Settings/SecuritySettings/SecuritySettings';
import Error404 from 'views/Error404/Error404';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import FirstLoginTemplate from 'components/templates/FirstLoginTemplate/FirstLoginTemplate';
import CommentSection from 'views/User/CommentSection/CommentSection';
import TooBigScreen from 'components/organisms/TooBigScreen/TooBigScreen';
import Search from 'views/User/Search/Search';
import SearchProfileView from 'views/User/SearchProfileView/SearchProfileView';
import ProfileSettings from 'views/User/Settings/Profile/Profile';
import Profile from 'views/User/Profile/Profile';
import SocialLinks from 'views/User/Settings/SocialLinks/SocialLinks';
import Interests from 'views/User/Settings/Interests/Interests';

const UserRoutes = () => {
  const user = useSelector((state: storeRoot) => state.user);

  return window.innerWidth > 550 ? (
    <TooBigScreen />
  ) : (
    <>
      {user && !user.confirmed ? (
        <FirstLoginTemplate />
      ) : (
        <UserTemplate>
          <Routes>
            <Route path="/" element={<Navigate to="profile/me" />} />
            <Route path="/profile/me" element={<Profile />} />
            <Route path="/profiles/:userId" element={<SearchProfileView />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/spotted" element={<Spotted />} />
            <Route path="/spotted/comments" element={<Navigate to="/student/spotted" />} />
            <Route path="/spotted/comments/:commentsId" element={<CommentSection />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/feed/comments" element={<Navigate to="/student/spotted" />} />
            <Route path="/feed/comments/:commentsId" element={<CommentSection />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile/settings" element={<ProfileSettings />} />
            <Route path="/profile/settings/social-links" element={<SocialLinks />} />
            <Route path="/profile/settings/interests" element={<Interests />} />
            <Route path="/profile/settings/security" element={<SecuritySettings />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </UserTemplate>
      )}
    </>
  );
};

export default UserRoutes;
