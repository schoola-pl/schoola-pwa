import AppProviders from 'providers/AppProviders';
import { Routes, Route } from 'react-router-dom';
import routes from 'routes';

const Root = () => {
  return (
    <AppProviders>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.Component />} />
        ))}
      </Routes>
    </AppProviders>
  );
};

export default Root;
