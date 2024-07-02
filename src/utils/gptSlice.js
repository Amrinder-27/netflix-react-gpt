import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "GPT",
    initialState: {
        showGPTSearch: false,
        showSearchGPTResults:null,
        showGptNames: null
    },
    reducers:{
        toggleGPTSearchView: (state, action)=>{
            state.showGPTSearch = !state.showGPTSearch;
        },
        AddSearchGptresults :(state, action) =>{
            state.showSearchGPTResults = action.payload;
        },
        AddSearchNames :(state, action) => {
            state.showGptNames = action.payload;
        },
        ClearSearchNames : (state, action ) =>{
            state.showGptNames = null;
            state.showSearchGPTResults = null;
        }

    }
})

export default gptSlice.reducer;
export const {toggleGPTSearchView, AddSearchGptresults, AddSearchNames, ClearSearchNames}= gptSlice.actions;