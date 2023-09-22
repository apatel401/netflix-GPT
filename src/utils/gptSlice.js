import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptToggle: false,
    searchText: null,
    movieNames: null,
    movies: null,
  },
  reducers: {
    toggleGpt: (state) => {
      state.gptToggle = !state.gptToggle;
    },
    addMovieSuggestions: (state, action) => {
      const { suggestedMovies, suggestedMovieNames } = action.payload;
      state.movieNames = suggestedMovieNames;
      state.movies = suggestedMovies;
    },
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});
export const { toggleGpt, addMovieSuggestions, addSearchText } =
  gptSlice.actions;
export default gptSlice.reducer;
