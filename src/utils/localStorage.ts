export function setItem(key: string, value: unknown) {
  if (typeof window === "undefined") return; // Ensure we're in the browser

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    throw new Error("Local storage error");
  }
}

export function getItem(key: string) {
  if (typeof window === "undefined") return; // Ensure we're in the browser

  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (e) {
    throw new Error("Local storage error");
  }
}
