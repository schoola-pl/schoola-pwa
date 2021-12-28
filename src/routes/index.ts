import React from 'react';
import Home from 'views/Home';
import Login from 'views/auth/Forms/Login/Login';

const routes: { path: string; Component: React.FC }[] = [
  { path: '/', Component: Home },
  { path: '/login', Component: Login }
];

export default routes;
