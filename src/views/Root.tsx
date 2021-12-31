import { Route, Routes } from 'react-router-dom';
import routes from '../routes';
import ProtectedRoute from '../providers/ProtectedRoute';

const Root = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return route.isProtected ? (
          <Route
            key={route.path}
            element={<ProtectedRoute role={route.role} redirectTo={route.redirectTo} Element={route.Component} />}
            path={route.path}
          />
        ) : (
          <Route key={route.path} element={<route.Component />} path={route.path} />
        );
      })}
    </Routes>
  );
};

export default Root;
