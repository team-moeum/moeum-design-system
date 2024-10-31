export interface RouterQuery {
  [key: string]: string | string[] | undefined;
}

export interface RouterState {
  [key: string]: unknown;
}

export interface RouterLocation {
  pathname: string;
  search: string;
  hash: string;
  state?: RouterState;
}

export interface NavigateOptions {
  replace?: boolean;
  state?: RouterState;
}

export interface SafeRouter {
  readonly location: RouterLocation;
  push(path: string, options?: NavigateOptions): void;
  replace(path: string, options?: NavigateOptions): void;
  back(): void;
  forward(): void;
  setQuery(query: RouterQuery): void;
  getQuery<T = string>(key: string): T | undefined;
  getAllQueries(): RouterQuery;
}
