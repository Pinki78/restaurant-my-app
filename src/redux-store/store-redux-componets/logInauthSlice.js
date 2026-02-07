import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../assets/firebase/firebase";

// LOGIN
export const loginUser = createAsyncThunk(
  "loginauth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// LOGOUT
export const logoutUser = createAsyncThunk(
  "loginauth/logoutUser",
  async () => {
    await signOut(auth);
  }
);

const logInauthSlice = createSlice({
  name: "loginauth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGOUT
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearAuthError } = logInauthSlice.actions;
export const selectAuth = (state) => state.loginauth;

export default logInauthSlice.reducer;

