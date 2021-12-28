import StyleProvider from 'providers/StyleProvider';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'routes';
import HomeView from 'views/HomeView';
import AdminLogin from 'views/auth/Admin/AdminLogin';

const Root = () => {
  return (
    <StyleProvider>
      <Routes>
        <Route path={routes.home} element={<HomeView />} />
        <Route path={routes.admLogin} element={<AdminLogin />} />
      </Routes>
    </StyleProvider>
  );
};

export default Root;
