import * as types from "./types";
import {
  signUp,
  obtainToken,
  logout,
} from "../../components/api/authenticationApi";

export const registerUserSuccess = (data) => {
  return { type: types.REGISTER_USER_SUCCESS, data };
};

export const registerUser = (registerData, cb) => async (dispatch) => {
  try {
    const response = await signUp(registerData);
    dispatch(registerUserSuccess(response.data));
    cb(); //callback
  } catch (error) {
    console.log(error);
  }
};

export const loginUserSuccess = (token) => {
  return { type: types.LOGIN_USER_SUCCESS, token };
};

export const loginUser = (username, password, cb) => async (dispatch) => {
  try {
    const response = await obtainToken(username, password);
    dispatch(loginUserSuccess(response.data.access));
    cb(); //callback
  } catch (error) {
    console.log("Error obtaining token. " + error);
  }
};

export const logoutUserSuccess = () => {
  return { type: types.LOGOUT_USER };
};

export const logoutUser = () => async (dispatch) => {
  await logout();
  dispatch(logoutUserSuccess());
};
