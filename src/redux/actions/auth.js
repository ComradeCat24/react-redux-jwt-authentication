import * as types from "./types";
import {
  signUp,
  obtainToken,
  logout,
} from "../../components/api/authenticationApi";

export const registerUserSuccess = () => {
  return { type: types.REGISTER_USER_SUCCESS };
};

export const registerUserFailure = (msg) => {
  return { type: types.REGISTER_USER_FAIL, msg };
};

export const registerUser = (registerData, cb) => async (dispatch) => {
  await signUp(registerData)
    .then(() => {
      dispatch(registerUserSuccess());
      cb(); //callback
    })
    .catch((error) => {
      console.log(error);
      dispatch(registerUserFailure("ERROR"));
    });
};

export const loginUserSuccess = (token) => {
  return { type: types.LOGIN_USER_SUCCESS, token };
};

export const loginUserFailure = (msg) => {
  return { type: types.LOGIN_USER_FAIL, msg };
};

export const loginUser = (username, password, cb) => async (dispatch) => {
  await obtainToken(username, password)
    .then((response) => {
      dispatch(loginUserSuccess(response.data.access));
      cb(); //callback
    })
    .catch((error) => {
      console.log(error.response.data);
      // dispatch(loginUserFailure(error.response.data));
      dispatch(loginUserFailure("ERROR"));
    });
};

export const logoutUserSuccess = () => {
  return { type: types.LOGOUT_USER };
};

export const logoutUser = () => async (dispatch) => {
  await logout();
  dispatch(logoutUserSuccess());
};
