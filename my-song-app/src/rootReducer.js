// src/app/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';

// Import slices here
import songsReducer from '../features/songs/songsSlice'; // You'll create this file next

const rootReducer = combineReducers({
  // Add slices here
  songs: songsReducer,
});

export default rootReducer;
