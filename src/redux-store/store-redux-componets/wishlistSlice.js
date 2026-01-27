import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDocs
} from "firebase/firestore";
import { db } from "../../assets/firebase/firebase";

/* 🔹 Fetch Wishlist */
export const fetchWishlist = createAsyncThunk(
  "wishlistName/fetchWishlist",
  async (userId, { rejectWithValue }) => {
    try {
      if (!userId) return [];

      const snapshot = await getDocs(
        collection(db, "wishlist", userId, "items")
      );

      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/* 🔹 Add to Wishlist */
export const addToWishlist = createAsyncThunk(
  "wishlistName/addToWishlist",
  async ({ userId, product }) => {
    await setDoc(
      doc(db, "wishlist", userId, "items", product.id),
      {
        ...product,
        createdAt: Date.now(),
      }
    );
    return product;
  }
);

/* 🔹 Remove from Wishlist */
export const removeFromWishlist = createAsyncThunk(
  "wishlistName/removeFromWishlist",
  async ({ userId, productId }) => {
    await deleteDoc(
      doc(db, "wishlist", userId, "items", productId)
    );
    return productId;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.items = state.items.filter(
          item => item.id !== action.payload
        );
      });
  },
});

export default wishlistSlice.reducer;
