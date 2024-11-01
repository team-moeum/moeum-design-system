import { generateRandomKey } from "../../utils/generateRandomKey";
import { MemoryStorage } from "./MemoryStorage";
import { SafeStorage } from "./storage.type";

class LocalStorage implements SafeStorage {
  public static isEnabled(): boolean {
    if (typeof window === "undefined" || !Boolean(window.localStorage)) {
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
}

export const safeLocalStorage = LocalStorage.isEnabled()
  ? new LocalStorage()
  : new MemoryStorage();
