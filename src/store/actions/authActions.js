import { LOGIN, LOGOUT } from "../types/constants";
import { auth, db } from "./../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export const userLogin = (data, setButtonLoader) => async (dispatch) => {
  try {
    setButtonLoader(true);
    data.userName = `${data.userName}@gulbergbostonacademy.web.app`;
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      data.userName,
      data.password
    );
    let displayName = userCredentials.user.displayName;
    window.notify(
      `"${displayName}" has been successfully logged in. `,
      "success"
    );
  } catch (error) {
    window.notify(error.message, "error");
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
