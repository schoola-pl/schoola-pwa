import React from 'react';
import Home from 'views/Home';
import Login from 'views/auth/Forms/Login/Login';
import SchoolAdminTemplate from '../components/templates/SchoolAdminTemplate/SchoolAdminTemplate';

interface routesInterface {
  // Path to component
  path: string;
  // Just component
  Component: React.FC;
  // Is route protected?
  isProtected: boolean;
  // Who can access this route?
  role: string;
}

// Paths
export const paths = {
  login: '/login',
  student: '/student/*',
  schoolAdmin: '/school-admin/*'
};

// Roles
export const roles: { [key: string]: string } = {
  public: 'none',
  authenticated: 'any',
  student: 'Student',
  schoolAdmin: 'School Admin'
};

// Environment routes
const dashboardRoute = paths.student;
const loginRoute = paths.login;

// Array with routes in application;
const routes: routesInterface[] = [
  { path: loginRoute, Component: Login, isProtected: false, role: roles.public },
  { path: paths.student, Component: Home, isProtected: true, role: roles.student },
  { path: paths.schoolAdmin, Component: SchoolAdminTemplate, isProtected: true, role: roles.schoolAdmin }
];

// Exports
export { dashboardRoute, loginRoute };
export default routes;
