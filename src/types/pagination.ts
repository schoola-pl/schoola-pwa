export interface paginatedOptions<T = unknown> {
  current: number;
  last: number;
  items: T[];
  next: number;
  first: number;
}

export interface paginatedStrapiOptions {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
