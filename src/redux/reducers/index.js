import { combineReducers } from "redux";
import auth from "./auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth,
});

export default persistReducer(persistConfig, rootReducer);
