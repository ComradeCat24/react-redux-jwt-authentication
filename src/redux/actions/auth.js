import * as types from "./types";
import {
  signUp,
  obtainToken,
  obtainUserData,
  logout,
} from "../../components/api/authenticationApi";

export const registerUserSuccess = () => {
  return { type: types.REGISTER_USER_SUCCESS };
};

export const registerUserFailure = (errMsg) => {
  return { type: types.REGISTER_USER_FAIL, errMsg };
};

export const registerUser = (registerData, cb) => async (dispatch) => {
  await signUp(registerData)
    .then(() => {
      dispatch(registerUserSuccess());
      cb(); //callback
    })
    .catch((error) => {
      dispatch(registerUserFailure(error.response.data));
    });
};

export const loginUserSuccess = (token) => {
  return { type: types.LOGIN_USER_SUCCESS, token };
};

export const loginUserFailure = (errMsg) => {
  return { type: types.LOGIN_USER_FAIL, errMsg };
};

export const loginUser = (username, password, cb) => async (dispatch) => {
  await obtainToken(username, password)
    .then((response) => {
      dispatch(loginUserSuccess(response.data.access));
      cb(); //callback
    })
    .catch((error) => {
      dispatch(loginUserFailure(error.response.data));
    });
};

export const userDataSuccess = (profileData) => {
  return { type: types.USER_DATA_SUCCESS, profileData };
};

export const userData = () => async (dispatch) => {
  await obtainUserData().then((response) => {
    console.log(response.data[0]);
    dispatch(userDataSuccess(response.data[0]));
  });
};

export const logoutUserSuccess = () => {
  return { type: types.LOGOUT_USER };
};

export const logoutUser = () => async (dispatch) => {
  await logout();
  dispatch(logoutUserSuccess());
};
