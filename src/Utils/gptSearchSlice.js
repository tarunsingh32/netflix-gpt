import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch: false,
    },
    reducers:{
        toggleGptSearchView:(state , action) =>{
            state.showGptSearch =!state.showGptSearch;
        },
    }
});

export const {toggleGptSearchView} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;