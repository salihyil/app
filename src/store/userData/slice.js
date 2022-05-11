import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userData } from "../../service/User/api";
import {
  SLICE_NAME,
  USEREMAIL_LOCAL_STORAGE,
  ERROR_MSG,
  TYPEPREFIX_NAME,
} from "./constants";

const initialState = {
  userDta: [],
  userEmail: localStorage.getItem(USEREMAIL_LOCAL_STORAGE),
  user: {},
  error: "",
};

export const fetchUserAsync = createAsyncThunk(
  TYPEPREFIX_NAME,
  async (email) => {
    const userDta = await userData(email);

    return userDta;
  }
);

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
    },
  },
  extraReducers: {
    [fetchUserAsync.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUserAsync.fulfilled]: (state, action) => {
      state.userDta = action.payload;

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
    [fetchUserAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, Logout } = userSlice.actions;

export default userSlice.reducer;
