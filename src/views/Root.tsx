import { Route, Routes } from 'react-router-dom';
import React from 'react';
import routes from '../routes';
import ProtectedRoute from '../providers/ProtectedRoute';
import { useAppLoading } from '../hooks/useAppLoading';
import AppLoader from '../components/molecules/AppLoader/AppLoader';

const Root: React.FC = () => {
  const { isAppLoading, appLoadingText } = useAppLoading();

  return (
    <>
      {isAppLoading && <AppLoader loadingText={appLoadingText} />}
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
    </>
  );
};

export default Root;
