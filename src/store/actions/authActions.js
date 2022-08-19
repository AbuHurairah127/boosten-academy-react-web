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
    let attendanceArray = [];
    let currentStudent = {};
    let marksArray = [];
    setButtonLoader(true);
    data.userName = `${data.userName}@gulbergbostonacademy.web.app`;
    await signInWithEmailAndPassword(auth, data.userName, data.password);
    let user = auth.currentUser;
    const docSnap = await getDoc(doc(db, "students", user.uid));
    let userData = docSnap.data();
    const attendanceRef = collection(db, "attendance");
    const q = query(attendanceRef, where("studentId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      attendanceArray.push(doc.data());
    });
    const marksRef = collection(db, "marks");
    const marks = query(marksRef, where("studentId", "==", userData.uid));
    const marksSnapshot = await getDocs(marks);
    marksSnapshot.forEach((doc) => {
      marksArray.push(doc.data());
    });
    marksArray = marksArray.sort((a, b) => a.testNo - b.testNo);
    let subjects = JSON.parse(userData.subjects);
    currentStudent = {
      studentData: userData,
      studentAttendance: attendanceArray,
      studentSubjects: subjects,
      studentMarks: marksArray,
    };

    dispatch({
      type: LOGIN,
      payload: currentStudent,
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
  } finally {
    // setIsLoggingOut(false);
  }
};
export const fetchCurrentUser = (setPreLoader) => async (dispatch) => {
  try {
    onAuthStateChanged(auth, async (user) => {
      let attendanceArray = [];
      let marksArray = [];
      let currentStudent = {};
      if (user) {
        const docSnap = await getDoc(doc(db, "students", user.uid));
        const userData = docSnap.data();
        const attendanceRef = collection(db, "attendance");
        const q = query(attendanceRef, where("studentId", "==", userData.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          attendanceArray.push(doc.data());
        });
        const marksRef = collection(db, "marks");
        const marks = query(marksRef, where("studentId", "==", userData.uid));
        const marksSnapshot = await getDocs(marks);
        marksSnapshot.forEach((doc) => {
          marksArray.push(doc.data());
        });
        marksArray = marksArray.sort((a, b) => a.testNo - b.testNo);
        console.log("====================================");
        console.log(marksArray);
        console.log("====================================");
        let subjects = JSON.parse(userData.subjects);
        currentStudent = {
          studentData: userData,
          studentAttendance: attendanceArray,
          studentSubjects: subjects,
          studentMarks: marksArray,
        };
        dispatch({
          type: LOGIN,
          payload: currentStudent,
        });
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
