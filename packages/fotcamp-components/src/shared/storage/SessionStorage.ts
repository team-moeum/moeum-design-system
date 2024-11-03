import { generateRandomKey } from "../../utils/generateRandomKey";
import { MemoryStorage } from "./MemoryStorage";
import { SafeStorage } from "./storage.type";

class SessionStorage implements SafeStorage {
  static isEnabled(): boolean {
    if (typeof window === "undefined" || !Boolean(window.sessionStorage)) {
      return false;
    }

    try {
      const KEY = generateRandomKey();
      sessionStorage.setItem(KEY, "test");
      sessionStorage.removeItem(KEY);
      return true;
    } catch {
      return false;
    }
  }

  has(key: string): boolean {
    return sessionStorage.getItem(key) !== null;
  }

  get(key: string) {
    return sessionStorage.getItem(key);
  }

  set(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
  }
}

export const safeSessionStorage = SessionStorage.isEnabled()
  ? new SessionStorage()
  : new MemoryStorage();
