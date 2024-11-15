import { generateRandomKey } from "../../utils/generateRandomKey";
import { MemoryStorage } from "./MemoryStorage";
import { SafeStorage } from "./storage.type";

class SessionStorage implements SafeStorage {
  static isEnabled(): boolean {
    if (typeof window === "undefined" || !!window.sessionStorage) {
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

  setObject<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getObject<T>(key: string): T | null {
    const value = sessionStorage.getItem(key);
    if (!value) return null;

    return JSON.parse(value) as T;
  }
}

export const safeSessionStorage = SessionStorage.isEnabled()
  ? new SessionStorage()
  : new MemoryStorage();
