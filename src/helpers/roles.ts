import { dashboardRoute, paths, roles } from '../routes';

export const getPathForRole = (role: string) => {
  switch (role) {
    case roles.schoolAdmin:
      return paths.schoolAdmin;
    default:
      return dashboardRoute;
  }
};
