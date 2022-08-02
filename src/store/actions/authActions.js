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
export const fetchUser = (setPreLoader) => async (dispatch) => {
  setPreLoader(true);
  setTimeout(() => setPreLoader(false), 10000);
};
