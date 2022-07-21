import { LOGIN, LOGOUT } from "./../types/constants";
let initialState = {
  isAuthenticated: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      let isUserLogginedNow = true;
      return {
        ...state,
        isAuthenticated: isUserLogginedNow,
      };
    }
    case LOGOUT: {
      let isUserLogginedNow = false;
      return {
        ...state,
        isAuthenticated: isUserLogginedNow,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
