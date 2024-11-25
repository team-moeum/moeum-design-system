import { NavigateOptions, RouterLocation, RouterQuery, SafeRouter } from "./router.type";

export class WindowRouter implements SafeRouter {
  get location(): RouterLocation {
    return {
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
      state: window.history.state
    };
  }

  push(path: string, options?: NavigateOptions): void {
    window.history.pushState(options?.state ?? null, "", this.normalizePath(path));
  }

  replace(path: string, options?: NavigateOptions): void {
    window.history.replaceState(options?.state ?? null, "", this.normalizePath(path));
  }

  back(): void {
    window.history.back();
  }

  forward(): void {
    window.history.forward();
  }

  setQuery(query: RouterQuery): void {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(query).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        searchParams.delete(key);
        value.forEach(v => searchParams.append(key, v));
      } else if (value !== undefined) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });

    this.replace(`${window.location.pathname}?${searchParams.toString()}`);
  }

  getQuery<T = string>(key: string): T | undefined {
    const searchParams = new URLSearchParams(window.location.search);
    const values = searchParams.getAll(key);

    if (values.length > 1) {
      return values as unknown as T;
    }

    return searchParams.get(key) as unknown as T;
  }

  getAllQueries(): RouterQuery {
    const searchParams = new URLSearchParams(window.location.search);
    const query: RouterQuery = {};

    searchParams.forEach((value, key) => {
      const existing = query[key];
      if (existing !== undefined) {
        query[key] = Array.isArray(existing) ? [...existing, value] : [existing as string, value];
      } else {
        query[key] = value;
      }
    });

    return query;
  }

  private normalizePath(path: string): string {
    if (path.startsWith("http://") || path.startsWith("https://")) {
      return path;
    }
    return path.startsWith("/") ? path : `/${path}`;
  }
}
