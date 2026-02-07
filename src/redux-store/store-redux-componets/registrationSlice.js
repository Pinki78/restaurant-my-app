// redux/slices/registrationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../assets/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// ✅ Async thunk for registration
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      // 1️⃣ Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // 2️⃣ Set displayName
      await updateProfile(userCredential.user, { displayName: name });

      // 3️⃣ Create Firestore document in "registerUsers" collection
      await setDoc(doc(db, "registerUsers", userCredential.user.uid), {
        uid: userCredential.user.uid,
        name,
        email,
        createdAt: new Date(),
      });

      // 4️⃣ Return user info to Redux
      return {
        uid: userCredential.user.uid,
        name: userCredential.user.displayName,
        email: userCredential.user.email,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ✅ Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        name: userCredential.user.displayName,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const registrationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.currentUser = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔹 Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // 🔹 Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, clearError } = registrationSlice.actions;
export default registrationSlice.reducer;
