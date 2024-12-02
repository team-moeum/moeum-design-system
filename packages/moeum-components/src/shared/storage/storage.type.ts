export interface SafeStorage {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
  clear(): void;
  has(key: string): boolean;
  getObject<T>(key: string): T | null;
  setObject<T>(key: string, value: T): void;
}
