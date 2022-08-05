import { LOGIN, LOGOUT } from "../types/constants";

export const userLogin = (setButtonLoader) => {
  try {
    setButtonLoader(true);
  } catch (error) {
  } finally {
    setTimeout(() => {
      setButtonLoader(false);
    }, 2500);
  }
};
export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};
export const fetchUser = (setPreLoader) => async (dispatch) => {
  setPreLoader(true);
  setTimeout(() => setPreLoader(false), 2500);
};
