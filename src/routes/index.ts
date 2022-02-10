import React from 'react';
import Login from '../views/auth/Forms/Login/Login';
import SchoolAdminTemplate from '../components/templates/SchoolAdminTemplate/SchoolAdminTemplate';
import Profile from 'views/auth/User/Profile/Profile';

interface routesInterface {
  // Path to component
  path: string;
  // Just component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.FC<any>;
  // Is route protected?
  isProtected: boolean;
  // Who can access this route?
  role: string;
  // Where to redirect if user is not authenticated?
  redirectTo?: string;
}

// Paths
export const paths: { [key: string]: string } = {
  login: '/login',
  student: '/student/*',
  schoolAdmin: '/school-admin/*'
};

// Roles
export const roles: { [key: string]: string } = {
  public: 'none',
  authenticated: 'any',
  student: 'Student',
  schoolAdmin: 'School Admin',
  moderator: 'Moderator'
};

// Environment routes
const dashboardRoute = paths.student;
const loginRoute = paths.login;

// Array with routes in application;
const routes: routesInterface[] = [
  { path: loginRoute, Component: Login, isProtected: false, role: roles.public },
  { path: paths.student, Component: Profile, isProtected: true, role: roles.student },
  { path: paths.schoolAdmin, Component: SchoolAdminTemplate, isProtected: true, role: roles.schoolAdmin }
];

// Exports
export { dashboardRoute, loginRoute };
export default routes;
