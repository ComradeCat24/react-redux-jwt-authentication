import * as types from "../actions/types";
import initialState from "./initialState";

const authReducer = (state = initialState.accessToken, action) => {
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return action.data;
    case types.LOGIN_USER_SUCCESS:
      return action.token;
    case types.LOGOUT_USER:
      return "";
    default:
      return state;
  }
};

export default authReducer;
