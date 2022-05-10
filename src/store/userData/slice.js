import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userData } from "../../service/User/api";

const initialState = {
  userDta: [],
  success: false,
  name: "",
  phone: "",
  website: "",
  username: "",
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    Logout: (state, action) => {
      localStorage.removeItem("userEmail");
      state.success = false;
      state.name = "";
      state.error = false;
    },
  },
  extraReducers: {
    [fetchUserAsync.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUserAsync.fulfilled]: (state, action) => {
      state.userDta = action.payload;
      console.log(state.userDta.length > 0);

      if (state.userDta.length > 0) {
        localStorage.setItem("userEmail", state.userDta[0].email);
        state.name = state.userDta[0].name;
        state.phone = state.userDta[0].phone;
        state.username = state.userDta[0].username;
        state.website = state.userDta[0].website;

        state.success = true;
        state.loading = false;
      } else {
        state.success = false;
        state.loading = false;
        state.error = "Email is not found";
      }
    },
    [fetchUserAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSuccess, setLoading, Logout } = userSlice.actions;

export default userSlice.reducer;
