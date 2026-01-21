import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BlogListData } from "../../api-data/blog-data/blog-data";

// export const fetchBlog = createAsyncThunk(
//     "blogData/fetchBlog",
//      async () =>{
//         return BlogListData;
//     }
// )

export const fetchBlog = createAsyncThunk(
  "blogData/fetchBlog",
  async () => {
    return BlogListData.map(item => ({
      ...item,
      montheData: new Date(item.montheData).toISOString(),
    }));
  }
);

const blogListItems = createSlice({
     name:'blogData',
    initialState:{
         blogDataList: [],
    loading: false,
    },

    reducers:{},

    extraReducers:(builder) =>{
builder
.addCase(fetchBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogDataList = action.payload;
      })
      .addCase(fetchBlog.rejected, (state) => {
        state.loading = false;
      });


    }

})


export default blogListItems.reducer;