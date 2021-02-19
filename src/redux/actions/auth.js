import * as types from "./types";
import {
  signUp,
  obtainToken,
  logout,
} from "../../components/api/authenticationApi";

export function registerUserSuccess(data) {
  return { type: types.REGISTER_USER_SUCCESS, data };
}

export function registerUser(data) {
  return async function (dispatch) {
    try {
      const response = await signUp(data);
      dispatch(registerUserSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function loginUserSuccess(token) {
  return { type: types.LOGIN_USER_SUCCESS, token };
}

export function loginUser(username, password) {
  return async function (dispatch) {
    try {
      const response = await obtainToken(username, password);
      dispatch(loginUserSuccess(response.data.access));
    } catch (error) {
      console.log("Error obtaining token. " + error);
    }
  };
}

export function logoutUserSuccess() {
  return { type: types.LOGOUT_USER };
}

export function logoutUser() {
  return async function (dispatch) {
    await logout();
    dispatch(logoutUserSuccess());
  };
}
