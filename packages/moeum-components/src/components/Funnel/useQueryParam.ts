import { useRouter } from "../../hooks/useRouter";

interface Options<T> {
  parser?: (val: string) => T;
  required?: boolean;
}

export function useQueryParam<T = string>(name: string, options?: Options<T>) {
  const router = useRouter();
  const value = router.getQuery(name);

  if (options?.required === true && value == null) {
    throw new Error(`${name} is required`);
  }

  if (options?.parser != null && value != null) {
    return options.parser(value);
  }

  return value;
}
