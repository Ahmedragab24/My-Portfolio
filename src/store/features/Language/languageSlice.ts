// features/language/languageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LanguageState = {
  lang: "English" | "Arabic";
};

const initialState: LanguageState = {
  lang: "English",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"English" | "Arabic">) => {
      state.lang = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("Language", action.payload); 
      }
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
