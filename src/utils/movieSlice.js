import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState :{
        nowPlayingMovies: null,
        trailerVideo : null,
        upcomingVideos: null,
        topRatedVideos: null
    },
    reducers:{
        AddNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        AddTrailerVideo :(state, action) =>{
            state.trailerVideo = action.payload;
        },
        AddPopularVideos :(state, action) =>{
            state.popularVideos = action.payload;
        },
        AddUpcomingVideos :(state, action) =>{
            state.upcomingVideos = action.payload;
        },
        AddTopRatedVideos :(state, action) =>{
            state.topRatedVideos = action.payload;
        }
    }
});

export const {AddNowPlayingMovies, AddTrailerVideo, AddPopularVideos, AddUpcomingVideos, AddTopRatedVideos} = movieSlice.actions;
export default movieSlice.reducer;