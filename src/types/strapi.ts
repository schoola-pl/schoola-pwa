import { paginatedStrapiOptions } from 'types/pagination';

interface baseBody<T> {
  id: number;
  attributes: T;
}

export type oneResponse<T = unknown> = {
  data: baseBody<T>;
};

export type multiResponseWithoutPagination<T = unknown> = {
  data: baseBody<T>[];
};

export type multiResponse<T = unknown> = {
  data: baseBody<T>[];
  meta: { pagination: paginatedStrapiOptions };
};

export type strapiRequestType = string | number | null;
