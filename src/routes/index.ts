import React from 'react';
import Login from 'views/auth/Forms/Login/Login';
import Dashboard from 'views/auth/Admin/Dashboard/Dashboard';
import ManageClasses from 'views/auth/Admin/ManageClasses/ManageClasses';

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

// Roles
export const roles: { [key: string]: string } = {
  public: 'none',
  authenticated: 'any',
  student: 'Student'
};

// Environment routes
const dashboardRoute = '/dashboard';
const loginRoute = '/login';

// Array with routes in application;
const routes: routesInterface[] = [
  { path: dashboardRoute, Component: Dashboard, isProtected: false, role: roles.authenticated },
  { path: '/manage/*', Component: ManageClasses, isProtected: false, role: roles.authenticated },
  { path: loginRoute, Component: Login, isProtected: false, role: roles.public }
];

// Exports
export { dashboardRoute, loginRoute };
export default routes;
