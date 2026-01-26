import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../assets/firebase/firebase";

export const submitBookForm = createAsyncThunk(
  "bookMessages/submitBookForm",
  async (formData, { rejectWithValue }) => {
    try {
      await addDoc(collection(db, "bookTableForms"), {
        ...formData,
        createdAt: new Date(),
      });
      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const bookingFormStort = createSlice({
  name: "bookMessages",
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
      .addCase(submitBookForm.pending, state => {
        state.loading = true;
      })
      .addCase(submitBookForm.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitBookForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetContactState } = bookingFormStort.actions;
export default bookingFormStort.reducer;