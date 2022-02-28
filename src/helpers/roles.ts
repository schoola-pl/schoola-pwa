import { paths, roles } from 'routes';

export const getPathForRole = (role: string) => {
  const pathsPrepared = { ...paths };
  const entriesPaths = Object.entries(pathsPrepared);
  for (const [key, value] of entriesPaths) {
    pathsPrepared[key] = value.replaceAll('*', '');
  }

  switch (role) {
    case roles.schoolAdmin:
      return pathsPrepared.schoolAdmin;
    case roles.moderator:
      return `${pathsPrepared.student}home`;
    case roles.psycho:
      return pathsPrepared.psycho;
    default:
      return `${pathsPrepared.student}home`;
  }
};

export const getRoleFromText = (textRole: string) => {
  switch (textRole) {
    case roles.schoolAdmin:
      return 1;
    case roles.moderator:
      return 4;
    case roles.psycho:
      return 5;
    default:
      return 3;
  }
};

export const getRoleFromLocalStorage = () => localStorage.getItem('role');
