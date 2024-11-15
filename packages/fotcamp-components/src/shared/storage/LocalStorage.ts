import { generateRandomKey } from "../../utils/generateRandomKey";
import { MemoryStorage } from "./MemoryStorage";
import { SafeStorage } from "./storage.type";

class LocalStorage implements SafeStorage {
  static isEnabled(): boolean {
    if (typeof window === "undefined" || !!window.localStorage) {
      return false;
    }

    try {
      const KEY = generateRandomKey();
      localStorage.setItem(KEY, "test");
      localStorage.removeItem(KEY);
      return true;
    } catch {
      return false;
    }
  }

  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  setObject<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getObject<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    if (!value) return null;

    return JSON.parse(value) as T;
  }
}

export const safeLocalStorage = LocalStorage.isEnabled() ? new LocalStorage() : new MemoryStorage();
