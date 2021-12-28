import React from 'react';
import Home from 'views/Home';
import Login from 'views/auth/Forms/Login/AdminLogin';

const routes: { path: string; Component: React.FC }[] = [
  { path: '/', Component: Home },
  { path: '/school-admin', Component: Login }
];

export default routes;
