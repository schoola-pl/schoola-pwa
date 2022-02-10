import React from 'react';
import Login from 'views/auth/Forms/Login/Login';
import Dashboard from 'views/auth/Admin/Dashboard/Dashboard';
import ManageClasses from 'views/auth/Admin/ManageClasses/ManageClasses';
import AddClass from 'views/auth/Admin/AddClass/AddClass';
import Profile from 'views/auth/User/Profile/Profile';
import Appointment from 'views/auth/User/Appointment/Appointment';
import Spotted from 'views/auth/User/Spotted/Spotted';
import Feed from 'views/auth/User/Feed/Feed';
import Welcome from 'views/auth/User/FirstLoginPages/Welcome/Welcome';
import DataPage from 'views/auth/User/FirstLoginPages/DataPage/DataPage';
import FinishPage from 'views/auth/User/FirstLoginPages/FinishPage/FinishPage';
import Hobbies from 'views/auth/User/FirstLoginPages/Hobbies/Hobbies';
import CommentSection from 'views/auth/User/CommentSection/CommentSection';
import ForgotPassword from 'views/auth/Forms/ForgotPassword/ForgotPassword';
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
const addClassRoute = '/add-class';

// Array with routes in application;
const routes: routesInterface[] = [
  { path: '/feed', Component: Feed, isProtected: false, role: roles.authenticated },
  { path: '/forgot-password', Component: ForgotPassword, isProtected: false, role: roles.public },
  { path: '/welcome', Component: Welcome, isProtected: false, role: roles.authenticated },
  { path: '/finish', Component: FinishPage, isProtected: false, role: roles.authenticated },
  { path: '/hobbies', Component: Hobbies, isProtected: false, role: roles.authenticated },
  { path: '/complete-info', Component: DataPage, isProtected: false, role: roles.authenticated },
  { path: '/spotted', Component: Spotted, isProtected: false, role: roles.authenticated },
  { path: '/appointment', Component: Appointment, isProtected: false, role: roles.authenticated },
  { path: '/profile', Component: Profile, isProtected: false, role: roles.authenticated },
  { path: '/spotted/comments', Component: CommentSection, isProtected: false, role: roles.authenticated },
  { path: dashboardRoute, Component: Dashboard, isProtected: false, role: roles.authenticated },
  { path: addClassRoute, Component: AddClass, isProtected: false, role: roles.authenticated },
  { path: '/manage/*', Component: ManageClasses, isProtected: false, role: roles.authenticated },
  { path: loginRoute, Component: Login, isProtected: false, role: roles.public }
];

// Exports
export { dashboardRoute, loginRoute };
export default routes;
