import React from 'react';
import Home from 'views/Home';
import Login from 'views/auth/Forms/Login/Login';

interface routesInterface {
  // Path to component
  path: string;
  // Just component
  Component: React.FC;
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
const dashboardRoute = '/';
const loginRoute = '/login';

// Array with routes in application;
const routes: routesInterface[] = [
  { path: dashboardRoute, Component: Home, isProtected: true, role: roles.authenticated },
  { path: loginRoute, Component: Login, isProtected: false, role: roles.public }
];

// Exports
export { dashboardRoute, loginRoute };
export default routes;
