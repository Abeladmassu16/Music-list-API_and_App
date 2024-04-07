
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMusic = createAsyncThunk('music/fetchMusic', async () => {
  const response = await fetch("https://vercel.com/abeladmassu16s-projects/v1/music/");
  const music = await response.json();
  return music;
});

// Async thunk for adding a new music entry
export const addMusic = createAsyncThunk('music/addMusic', async (musicData) => {
  const response = await fetch("https://vercel.com/abeladmassu16s-projects/v1/music/create", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(musicData),
  });
  const data = await response.json();
  return data; 
});

export const editMusic = createAsyncThunk('music/editMusic', async ({ id, ...musicData }) => {
  const response = await fetch(`https://vercel.com/abeladmassu16s-projects/v1/music/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(musicData),
  });
  const data = await response.json();
  return data;
});

export const musicSlice = createSlice({
  name: 'music',
  initialState: {
    items: [],
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Existing cases for fetching music
      .addCase(fetchMusic.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMusic.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMusic.rejected, (state) => {
        state.status = 'failed';
      })
      // Handle addMusic
      .addCase(addMusic.fulfilled, (state, action) => {
        state.items.push(action.payload); 
      })
      // Handle editMusic
      .addCase(editMusic.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload; 
        }
      });
  },
});

export default musicSlice.reducer;
