import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        }
    }
})
export const {addNowPlayingMovies, addTrailerVideos, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions
export default movieSlice.reducer