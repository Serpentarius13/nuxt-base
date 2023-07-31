export const setCookieClient = (name: string, value: string | number) =>
  (document.cookie = `${name}=${value};path=/`);

export const removeCookieClient = (name: string) => (document.cookie = `${name}=; Max-Age=0`);
