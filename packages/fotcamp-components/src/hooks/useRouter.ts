import { createContext, useContext } from "react";
import { SafeRouter } from "../router/router.type";

const RouterContext = createContext<SafeRouter | null>(null);

export const RouterProvider = RouterContext.Provider;

export function useRouter(): SafeRouter {
  const router = useContext(RouterContext);
  if (!router) {
    throw new Error("RouterProvider를 설정해주세요");
  }
  return router;
}
