export interface paginatedOptions<T = unknown> {
  current: number;
  last: number;
  items: T[];
  next: number;
  first: number;
}
