import { authUser } from './auth';

export type schoolClass = {
  classLevel: 1 | 2 | 3 | 4;
  className: string;
};

export type schoolUser = authUser;

export type settingsType = {
  email: schoolUser['email'];
  first_name: schoolUser['first_name'];
  last_name: schoolUser['last_name'];
  Birthday: schoolUser['Birthday'];
};
