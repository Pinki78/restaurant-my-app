// src/features/team/teamSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TeamData } from "../../api-data/team-data/team-data";
import { db } from "../../assets/firebase/firebase";
import { collection, addDoc, doc, setDoc,  getDocs } from "firebase/firestore";

// Async thunk to upload all team members

export const fetchTeamList = createAsyncThunk(
  "teamName/fetchTeamList",
  async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "teamlist"));
      const TeamDataupload = [];
      querySnapshot.forEach((doc) => {
        TeamDataupload.push({ id: doc.id, ...doc.data() });
      });

      // If Firebase is empty, fallback to static TeamData
      return TeamDataupload.length ? TeamDataupload : TeamData;
    } catch (error) {
      console.error("Error fetching menu from Firebase:", error);
      return TeamData; // fallback if Firebase fails
    }
  }
);




const teamSlice = createSlice({
  name: "teamName",
  initialState: {
    loading: false,
    success: null,
    error: null,
    teamList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamList.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchTeamList.fulfilled, (state, action) => {
        state.loading = false;
        state.success = "Team data uploaded successfully!";
        state.teamList = action.payload;
      })
      .addCase(fetchTeamList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default teamSlice.reducer;
