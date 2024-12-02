import { configureStore } from '@reduxjs/toolkit';
import appReducer from "./appSplice";

export const store = configureStore({
  reducer: {
    app: appReducer
  },
});