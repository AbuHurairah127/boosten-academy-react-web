import { LOGIN, LOGOUT } from "../types/constants";

export const userLogin = () => {
  return {
    type: LOGIN,
  };
};
export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};
