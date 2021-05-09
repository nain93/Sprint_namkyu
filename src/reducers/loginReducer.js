import { LOGIN, LOGOUT, SIGN_IN } from "../action";

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, ...action.payload };
    case LOGIN:
      return { ...state, isLogin: true };
    case LOGOUT:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

export default loginReducer;
