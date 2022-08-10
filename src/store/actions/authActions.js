import { LOGIN, LOGOUT } from "../types/constants";
import { auth, db } from "./../../config/firebase";
import {
  signInWithEmailAndPassword,
  updatePassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore/lite";
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
export const userLogout = (setIsLoggingOut) => async (dispatch) => {
  try {
    setIsLoggingOut(true);
    signOut(auth);
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    window.notify(error.message, "error");
    console.log(error.message);
  } finally {
    // setIsLoggingOut(false);
  }
};
export const fetchCurrentUser = (setPreLoader) => async (dispatch) => {
  try {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docSnap = await getDoc(doc(db, "students", user.uid));
        const userData = docSnap.data();
        console.log(userData);
        const attendanceRef = collection(db, "attendance");
        const q = query(attendanceRef, where("studentId", "==", userData.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
        dispatch({
          type: LOGIN,
          payload: userData,
        });
        window.notify(`${userData.name} is already logged in.`);
      }
    });
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setTimeout(() => {
      setPreLoader(false);
    }, 7500);
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
