// otpSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../assets/firebase/firebase"; // Firestore instance

// send OTP
export const sendOtp = createAsyncThunk(
  "auth/sendOtp",
  async (email, { rejectWithValue }) => {
    try {
      const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
      const expiresAt = Date.now() + 5 * 60 * 1000; // 5 mins expiry
      const docId = email.replace(/\./g, "_"); // safe ID

      await setDoc(doc(db, "otps", docId), { otp, expiresAt, email });

      console.log(`Send OTP ${otp} to email ${email}`);

      return "OTP sent to your email!";
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// verify OTP
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const docId = email.replace(/\./g, "_");
      const docSnap = await getDoc(doc(db, "otps", docId));
      if (!docSnap.exists()) throw new Error("OTP not found");

      const data = docSnap.data();

      if (Date.now() > data.expiresAt) throw new Error("OTP expired");
      if (parseInt(otp) !== data.otp) throw new Error("Invalid OTP");

      return "OTP verified!";
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const otpSlice = createSlice({
  name: "otp",
  initialState: {
    loading: false,
    message: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default otpSlice.reducer;
