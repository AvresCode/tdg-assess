import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    RemoveUser: (state, action) => {
      state.user = {};
    },
  },
});

export const { setUser, clearUserData } = UserSlice.actions;
export default UserSlice.reducer;
