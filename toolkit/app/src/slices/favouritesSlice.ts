import {createSlice} from "@reduxjs/toolkit";
import type {IGetFilm} from "../interfaces/films.ts";

const initialState: IGetFilm[] = [];

const favouritesSlice = createSlice({
    name: 'film',
    initialState: initialState,
    reducers: {
        addFilm: (state: IGetFilm[] , action: {payload: IGetFilm}) => {
            state.push(action.payload);
        },
        removeFilm: (state: IGetFilm[] , action: {payload: string}) => {
            const index = state.findIndex(film => film.imdbID === action.payload);
            if (index !== -1) state.splice(index, 1);
        }
    }
})

export const {addFilm, removeFilm} = favouritesSlice.actions
export default favouritesSlice.reducer