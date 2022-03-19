import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import { useAppLoading } from 'hooks/useAppLoading';
import AppLoader from '../components/molecules/AppLoader/AppLoader';
import routes from '../routes';
import ProtectedRoute from '../providers/ProtectedRoute';
import Error404 from 'views/Error404/Error404';
import Modal from 'components/molecules/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root: React.FC = () => {
  const { isAppLoading, appLoadingText } = useAppLoading();
  const { isOpen, modalTitle, modalContent } = useModal();

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
      {isOpen && <Modal title={modalTitle}>{modalContent}</Modal>}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Root;
