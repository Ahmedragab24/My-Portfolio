import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/Language/languageSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      language: languageReducer,
    },

  })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
