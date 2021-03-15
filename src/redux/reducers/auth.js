import * as types from "../actions/types";
import initialState from "./initialState";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { ...state };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, accessToken: action.token };

    case types.REGISTER_USER_FAIL:
    case types.LOGIN_USER_FAIL:
      return { ...state, errMsg: action.errMsg };

    case types.LOGOUT_USER:
      return { ...state, accessToken: null, errMsg: null };

    default:
      return state;
  }
};

export default authReducer;
