const localStorageJWTKey = 'jwt';

export const getJWT = () => localStorage.getItem(localStorageJWTKey);
export const removeJWT = () => localStorage.removeItem(localStorageJWTKey);
export const setJWT = (JWT: string) => {
  if (getJWT()) removeJWT();
  localStorage.setItem(localStorageJWTKey, JWT);
};
