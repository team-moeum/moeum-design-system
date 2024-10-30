interface Options<T> {
  parser?: (val: string) => T;
  required?: boolean;
}

export function useQueryParam<T = string>(name: string, options?: Options<T>) {
  const queryParams = new URLSearchParams(window.location.search);
  const value = queryParams.get(name);

  if (options?.required === true && value == null) {
    throw new Error(`${name} is required`);
  }

  if (options?.parser != null && value != null) {
    return options.parser(value);
  }

  return value;
}
