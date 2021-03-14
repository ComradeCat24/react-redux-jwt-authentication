import * as types from "../actions/types";
import initialState from "./initialState";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return action.data;
    case types.LOGIN_USER_SUCCESS:
      return { ...state, accessToken: action.token };
    case types.LOGIN_USER_FAIL:
      console.log(action);
      return { ...state, msg: action.msg };
    case types.LOGOUT_USER:
      return { ...state, accessToken: "" };
    default:
      return state;
  }
};

export default authReducer;
