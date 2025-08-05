import {createSlice} from "@reduxjs/toolkit";

const initialState = "";

const filmSearchSlice = createSlice({
    name: 'film-search',
    initialState: initialState,
    reducers: {
        setFilmSearchQuery: (_state, action) => {
            return action.payload;
        },
        clearFilmSearchQuery: () => ""
    }
})

export const {setFilmSearchQuery, clearFilmSearchQuery} = filmSearchSlice.actions;
export const filmSearchInputReducer = filmSearchSlice.reducer;