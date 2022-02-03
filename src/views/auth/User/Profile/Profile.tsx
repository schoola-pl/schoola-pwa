import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import { Routes } from 'react-router-dom';
import { Navigate, Route } from 'react-router';
import Appointment from 'views/auth/User/Appointment/Appointment';
import Spotted from 'views/auth/User/Spotted/Spotted';
import Feed from 'views/auth/User/Feed/Feed';
import Error404 from 'views/Error404/Error404';
import Home from 'views/auth/User/Home/Home';

const Profile = () => {
  return (
    <UserTemplate>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/spotted" element={<Spotted />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </UserTemplate>
  );
};

export default Profile;
