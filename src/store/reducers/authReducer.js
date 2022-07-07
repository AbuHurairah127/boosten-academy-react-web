import { LOGIN, LOGOUT } from "./../types/constants";
let initialState = {
  isUserLoggined: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      let isUserLogginedNow = true;
      return {
        ...state,
        isUserLoggined: isUserLogginedNow,
      };
    }
    case LOGOUT: {
      let isUserLogginedNow = false;
      return {
        ...state,
        isUserLoggined: isUserLogginedNow,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
