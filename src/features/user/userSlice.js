import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userData } from "../../service/User/api";

const initialState = {
  userDta: [],
  success: false,
  userName: "",
  loading: false,
  error: "",
};

export const fetchUserAsync = createAsyncThunk(
  "user/fetchUser",
  async (email) => {
    const userDta = await userData(email);

    return userDta;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    Logout: (state, action) => {
      localStorage.removeItem("userEmail");
      state.success = false;
      state.userName = "";
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
        localStorage.setItem("userEmail", state.userDta[0].email);
        state.userName = state.userDta[0].name;
        state.success = true;
      } else {
        state.success = false;
        state.error = "Email is not found";
      }
    },
    [fetchUserAsync.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSuccess, setUserName, setLoading, Logout } =
  userSlice.actions;

export default userSlice.reducer;
