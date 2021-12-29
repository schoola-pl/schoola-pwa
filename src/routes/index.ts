import HomeView from 'views/HomeView';
import AdminLogin from 'views/auth/Admin/AdminLogin/AdminLogin';
import Dashboard from 'views/auth/Admin/Dashboard/Dashboard';
import ManageClasses from 'views/auth/Admin/ManageClasses/ManageClasses';

const routes: { path: string; Component: React.FC }[] = [
  { path: '/', Component: HomeView },
  { path: '/school-admin', Component: AdminLogin },
  { path: '/school-admin/dashboard', Component: Dashboard },
  { path: '/school-admin/manage-classes', Component: ManageClasses }
];

export default routes;
