import { Routes } from 'react-router-dom';
import { Navigate, Route } from 'react-router';
import Home from 'views/auth/Psycho/Home/Home';

const PsychoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default PsychoRoutes;
