import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    RemoveUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUserData } = UserSlice.actions;
export default UserSlice.reducer;
