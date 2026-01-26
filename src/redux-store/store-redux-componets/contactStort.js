import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../assets/firebase/firebase";

export const submitContactForm = createAsyncThunk(
  "contactMessages/submitContactForm",
  async (formData, { rejectWithValue }) => {
    try {
      await addDoc(collection(db, "contactForms"), {
        ...formData,
        createdAt: new Date(),
      });
      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactStort = createSlice({
  name: "contactMessages",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetContactState: state => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(submitContactForm.pending, state => {
        state.loading = true;
      })
      .addCase(submitContactForm.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetContactState } = contactStort.actions;
export default contactStort.reducer;
