import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userInfo: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
    },
  },
});

export const { setToken, setUserInfo, clearToken } = userSlice.actions;

export default userSlice.reducer;
