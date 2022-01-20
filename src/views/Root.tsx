import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import { useAppLoading } from '../hooks/useAppLoading';
import AppLoader from '../components/molecules/AppLoader/AppLoader';
import routes from '../routes';
import ProtectedRoute from '../providers/ProtectedRoute';
import Error404 from 'views/Error404/Error404';

const Root: React.FC = () => {
  const { isAppLoading, appLoadingText } = useAppLoading();

  return (
    <>
      {isAppLoading && <AppLoader loadingText={appLoadingText} />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        {routes.map((route) => {
          return route.isProtected ? (
            <Route key={route.path} element={<ProtectedRoute role={route.role} Element={route.Component} />} path={route.path} />
          ) : (
            <Route key={route.path} element={<route.Component />} path={route.path} />
          );
        })}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default Root;
