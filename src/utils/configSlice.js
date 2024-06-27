import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        preferredLang: "en"
    },
    reducers:{
        changeLanguage :(state, action) =>{
            state.preferredLang = action.payload;
        }
    }
})

export default configSlice.reducer;
export const {changeLanguage } = configSlice.actions