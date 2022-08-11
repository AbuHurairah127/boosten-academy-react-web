import { LOGIN, LOGOUT } from "./../types/constants";
let initialState = {
  isAuthenticated: false,
  cUser: {},
  cUserAttendance: [],
  noOfPresentDays: 0,
  totalDays: 0,
  noOfAbsents: 0,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      let isUserLogginedNow = true;
      let user = action.payload.studentData;
      let userAttendance = action.payload.studentAttendance;
      let presents = 0;
      let absents = 0;
      let totalNoOfDays = 0;
      userAttendance.map((attendance) => {
        if (attendance.attendanceStatus === true) {
          presents++;
        }
        totalNoOfDays++;
      });
      absents = totalNoOfDays - presents;
      console.log(totalNoOfDays, presents, absents);
      return {
        ...state,
        isAuthenticated: isUserLogginedNow,
        cUser: user,
        cUserAttendance: userAttendance,
      };
    }
    case LOGOUT: {
      let isUserLogginedNow = false;
      return {
        ...state,
        isAuthenticated: isUserLogginedNow,
        cUser: {},
      };
    }
    default:
      return state;
  }
};

export default authReducer;
