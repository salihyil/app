import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME, USEREMAIL_LOCAL_STORAGE, ERROR_MSG } from "./constants";

const initialState = {
  userDta: [],
  userEmail: localStorage.getItem(USEREMAIL_LOCAL_STORAGE),
  user: {},
  error: "",
  loading: false,
};

export const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    Logout: (state, action) => {
      state.userEmail = localStorage.removeItem(USEREMAIL_LOCAL_STORAGE);
      state.error = false;
      state.loading = false;
    },

    loginRequest(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.userDta = action.payload;
      state.userEmail = action.payload[0].email;

      if (state.userDta.length > 0) {
        localStorage.setItem(USEREMAIL_LOCAL_STORAGE, state.userDta[0].email);
        state.userEmail = state.userDta[0].email;
        state.user = state.userDta[0];

        state.loading = false;
      } else {
        state.userEmail = localStorage.removeItem(USEREMAIL_LOCAL_STORAGE);
        state.loading = false;
        state.error = ERROR_MSG;
      }
    },
    loginError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  Logout,
  loginRequest,
  loginSuccess,
  loginError,
  setUserName,
} = userSlice.actions;

export default userSlice.reducer;
