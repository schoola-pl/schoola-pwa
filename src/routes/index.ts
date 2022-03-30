import React from 'react';
import Login from '../views/Forms/Login/Login';
import SchoolAdminTemplate from '../components/templates/SchoolAdminTemplate/SchoolAdminTemplate';
import UserRoutes from './UserRoutes/UserRoutes';
import ForgotPassword from 'views/Forms/ForgotPassword/ForgotPassword';
import PsychoRoutes from './PsychoRoutes/PsychoRoutes';

interface routesInterface {
  // Path to component
  path: string;
  // Just component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.FC<any>;
  // Is route protected?
  isProtected: boolean;
  // Who can access this route?
  role: string | string[];
  // Where to redirect if user is not authenticated?
  redirectTo?: string;
}

// Paths
export const paths: { [key: string]: string } = {
  login: '/login',
  student: '/student/*',
  schoolAdmin: '/school-admin/*',
  psycho: '/psycho/*'
};

// Roles
export const roles: { [key: string]: string } = {
  public: 'none',
  authenticated: 'any',
  student: 'Student',
  schoolAdmin: 'SchoolAdmin',
  moderator: 'Moderator',
  psycho: 'Psycho'
};

// Environment routes
const dashboardRoute = paths.student;
const loginRoute = paths.login;

// Array with routes in application;
const routes: routesInterface[] = [
  { path: loginRoute, Component: Login, isProtected: false, role: roles.public },
  { path: '/forgot-password', Component: ForgotPassword, isProtected: false, role: roles.public },
  { path: paths.student, Component: UserRoutes, isProtected: true, role: [roles.student, roles.moderator] },
  { path: paths.psycho, Component: PsychoRoutes, isProtected: true, role: roles.psycho },
  { path: paths.schoolAdmin, Component: SchoolAdminTemplate, isProtected: true, role: roles.schoolAdmin }
];

// Exports
export { dashboardRoute, loginRoute };
export default routes;
