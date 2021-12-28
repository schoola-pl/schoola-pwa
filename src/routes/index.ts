import React from 'react';
import HomeView from 'views/HomeView';
import AdminLogin from 'views/auth/Admin/AdminLogin/AdminLogin';

const routes: { path: string; Component: React.FC }[] = [
  { path: '/', Component: HomeView },
  { path: '/school-admin', Component: AdminLogin }
];

export default routes;
