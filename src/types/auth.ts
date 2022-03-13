// AUTH OBJECTS

export type authUser = {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  description: string;
  confirmed: boolean;
  password: string;
  blocked: boolean;
  age: number;
  avatar: string;
  Birthday: string;
  schoolId: number;
  TextRole: string;
  TextInteresteds: string;
  TextClassName: string;
  TextSocials: string | null;
  working_hours: { day: string; start: string; end: string }[] | null;
};
