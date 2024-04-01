// src/features/songs/songsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
const initialState = {
  songs: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Async thunk actions
export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await axios.get('Your_API_Endpoint_Here');
  return response.data;
});

// The slice
const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    // Reducers for actions here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSongs.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add fetched songs to the state
        state.songs = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default songsSlice.reducer;
