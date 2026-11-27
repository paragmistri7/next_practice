import { createSlice } from "@reduxjs/toolkit";

const initailState = {
  userData: [
    {
      name: "",
      id: 0,
    },
  ],
};

const UserSlice = createSlice({
  name: "user",
  initialState: initailState,
  reducers: {
    addUser: (state, action) => {
      console.log("<<<adduser", state, action);
      state.userData.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.userData = state.userData.filter(
        (user) => user.id !== action.payload.id,
      );
    },
  },
});

export const { addUser, deleteUser } = UserSlice.actions;

export default UserSlice.reducer;
