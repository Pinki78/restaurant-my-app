import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FaqDataList } from "../../api-data/faq-data/faq-data";


export const fetchFaqList  = createAsyncThunk (
  "faqSlice/fetchFaqList",
  async () => {
    //  const res = await axios.get(FOOD_MENU_DATA);
     return FaqDataList ;
   }
)

const  faqListStort = createSlice({
  name: "faqSlice",
  initialState: {
    faqListCreates: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFaqList.fulfilled, (state, action) => {
        state.loading = false;
        state.faqListCreates = action.payload;
      })
      .addCase(fetchFaqList.rejected, (state) => {
        state.loading = false;
      });
  },
});


export default faqListStort.reducer;

