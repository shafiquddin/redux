import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./Auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
