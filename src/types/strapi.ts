import { paginatedStrapiOptions } from 'types/pagination';

export type oneResponse<T = unknown> = {
  data: {
    id: number;
    attributes: T;
  };
};

export type multiResponseWithoutPagination<T = unknown> = {
  data: oneResponse<T>[] | [];
};

export type multiResponse<T = unknown> = {
  data: oneResponse<T>[] | [];
  meta: { paginate: paginatedStrapiOptions };
};

export type strapiRequestType = string | number | null;
