import {ResponseApi} from './request';
// AUTH OBJECTS

export type authUser = {
  isBlocked: boolean;
  user: {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    age: number;
    birthday: string;
    school: string;
    role: string;
  };
};

// API RESPONSES

export type ResponseAuthUser = ResponseApi & {
  data: authUser;
};