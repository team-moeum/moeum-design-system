import { SafeStorage } from "./storage.type";

export class MemoryStorage implements SafeStorage {
  private map = new Map<string, string>();

  has(key: string): boolean {
    return this.map.get(key) !== null;
  }

  get(key: string) {
    return this.map.get(key) || null;
  }

  set(key: string, value: string) {
    this.map.set(key, value);
  }

  remove(key: string) {
    this.map.delete(key);
  }

  clear() {
    this.map.clear();
  }

  setObject<T>(key: string, value: T): void {
    this.map.set(key, JSON.stringify(value));
  }

  getObject<T>(key: string): T | null {
    const value = this.map.get(key);
    if (!value) return null;

    return JSON.parse(value) as T;
  }
}
