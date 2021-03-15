import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

export const store = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export const persistor = persistStore(store);
