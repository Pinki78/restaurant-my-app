// forgotPassword.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../assets/firebase/firebase";

// async thunk
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    const actionCodeSettings = {
      url: window.location.origin + "/reset-password", // custom React page
      handleCodeInApp: true, // required for custom page
    };

    try {
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      return "Reset email sent! Check your inbox.";
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// slice
const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: {
    loading: false,
    message: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default forgotPasswordSlice.reducer;
