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
}
