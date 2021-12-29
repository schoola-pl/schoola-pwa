import React from 'react';
import Home from 'views/Home';
import Login from 'views/auth/Forms/Login/Login';
import Dashboard from 'views/auth/Admin/Dashboard/Dashboard';
import ManageClasses from 'views/auth/Admin/ManageClasses/ManageClasses';

const routes: { path: string; Component: React.FC }[] = [
  { path: '/', Component: Home },
  { path: '/login', Component: Login },
  { path: '/school-admin/dashboard', Component: Dashboard },
  { path: '/school-admin/manage-classes', Component: ManageClasses }
];

export default routes;
