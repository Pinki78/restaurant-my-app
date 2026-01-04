import { createSlice } from "@reduxjs/toolkit";
import { FOOD_MENU_DATA } from "../../../public/api-data/manulist-data/manu-list-data";


const DataMenuSlice = createSlice ({
    name: "menu",
    initialState: {
    items: FOOD_MENU_DATA, // 👈 store data here
    search: "",
  },

  reducers : {
     
    setSearch : (state , action) =>{
        
    }
  }


})



