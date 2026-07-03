export function getStorage<T>(key: string): T | null {
  if (typeof window === "undefined") return null;

  const value = localStorage.getItem(key);

  if (!value) return null;

  return JSON.parse(value) as T;
}

export function setStorage<T>(key: string, value: T) {
  if (typeof window === "undefined") return;

  localStorage.setItem(key, JSON.stringify(value));
}

export function removeStorage(key: string) {
  if (typeof window === "undefined") return;

  localStorage.removeItem(key);
}

export function clearStorage() {
  if (typeof window === "undefined") return;

  localStorage.clear();
}