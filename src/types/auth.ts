// AUTH OBJECTS

export type authUser = {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  confirmed: boolean;
  password: string;
  blocked: boolean;
  age: number;
  avatar: string;
  Birthday: string;
  schoolId: number;
  TextRole: string;
  interesteds: { id: number; name: string }[];
  TextClassName: string;
};
