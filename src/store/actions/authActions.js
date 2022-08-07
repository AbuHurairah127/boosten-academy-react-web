import { LOGIN, LOGOUT } from "../types/constants";
import { auth, db } from "./../../config/firebase";
import {
  signInWithEmailAndPassword,
  updatePassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite";
export const userLogin = (data, setButtonLoader) => async (dispatch) => {
  try {
    setButtonLoader(true);
    data.userName = `${data.userName}@gulbergbostonacademy.web.app`;
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      data.userName,
      data.password
    );
    let user = auth.currentUser;
    const docSnap = await getDoc(doc(db, "students", user.uid));
    let userData = docSnap.data();
    dispatch({
      type: LOGIN,
      payload: userData,
    });
    window.notify(
      `"${userData.name}" has been successfully logged in. `,
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
export const fetchCurrentUser = (setPreLoader) => async (dispatch) => {
  try {
    setPreLoader(true);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // const uid = user.uid;
        const docSnap = await getDoc(doc(db, "students", user.uid));
        let userData = docSnap.data();
        dispatch({
          type: LOGIN,
          payload: userData,
        });
      }
    });
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setPreLoader(false);
  }
};
export const passwordUpdate = (data, setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    const user = auth.currentUser;
    await updatePassword(user, data.newPassword);
    window.notify("Password updated successfully", "success");
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }
};
