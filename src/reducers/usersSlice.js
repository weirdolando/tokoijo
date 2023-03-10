import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const usersSlice = createSlice({
  initialState: {
    users: [],
    loggedUser: {},
  },
  name: "users",
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
      return state;
    },
    logUser(state, action) {
      state.loggedUser = action.payload;
      return state;
    },
    logoutUser(state) {
      state.loggedUser = {};
      return state;
    },
  },
});

export const { addUser, logUser, logoutUser } = usersSlice.actions;

export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const { email, password } = user;
      const res = await axios.get(
        `http://localhost:2000/users?email=${email}&password=${password}`
      );
      if (res.data.length) {
        alert("Email is already registered. Use another one");
        return;
      }

      await axios.post("http://localhost:2000/users", user);
      dispatch(addUser(user));
      alert("Registered Successfully");
    } catch (err) {
      alert("Something went wrong");
      console.error(err);
    }
  };
};

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const { email, password } = user;
      const res = await axios.get(
        `http://localhost:2000/users?email=${email}&password=${password}`
      );
      if (!res.data.length) {
        alert("Email / Password Incorrect!");
        return;
      }
      dispatch(logUser(res.data[0]));
    } catch (err) {
      alert("Something went wrong");
      console.error(err);
    }
  };
};

export default usersSlice.reducer;
