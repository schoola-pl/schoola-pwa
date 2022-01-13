import { paths, roles } from '../routes';

export const getPathForRole = (role: string) => {
  const pathsPrepared = { ...paths };
  const entriesPaths = Object.entries(pathsPrepared);
  for (const [key, value] of entriesPaths) {
    pathsPrepared[key] = value.replaceAll('*', '');
  }

  switch (role) {
    case roles.schoolAdmin:
      return pathsPrepared.schoolAdmin;
    default:
      return pathsPrepared.student;
  }
};
