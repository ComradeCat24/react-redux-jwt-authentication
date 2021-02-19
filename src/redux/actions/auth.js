import * as types from "./types";
import {
  signUp,
  obtainToken,
  logout,
} from "../../components/api/authenticationApi";

export const registerUserSuccess = (data) => {
  return { type: types.REGISTER_USER_SUCCESS, data };
};

export const registerUser = (data) => async (dispatch) => {
  try {
    const response = await signUp(data);
    dispatch(registerUserSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const loginUserSuccess = (token) => {
  return { type: types.LOGIN_USER_SUCCESS, token };
};

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const response = await obtainToken(username, password);
    dispatch(loginUserSuccess(response.data.access));
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
