export const SIGN_IN = "SIGN_IN";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const signIn = (data) => {
  return {
    type: SIGN_IN,
    payload: {
      nick: data.user_nick,
      avatar: data.user_email,
    },
  };
};

export const logIn = () => {
  return {
    type: LOGIN,
  };
};
export const logOut = () => {
  return {
    type: LOGOUT,
  };
};
