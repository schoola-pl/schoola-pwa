import { authUser } from './auth';

export type schoolClass = {
  classLevel: 1 | 2 | 3 | 4;
  className: string;
};

export type schoolUser = authUser;
