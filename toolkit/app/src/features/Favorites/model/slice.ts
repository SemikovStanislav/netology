import type {FilmPreview} from "../../../entities/Film";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


const initialState: FilmPreview[] = []

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        addToFavorites: (state: FilmPreview[], action: PayloadAction<FilmPreview>) => {
            const isFavorite = state.some(film => film.imdbID === action.payload.imdbID)
            if (isFavorite) {
                return state
            }
            return [...state, action.payload]
        },
        removeFromFavorites: (state: FilmPreview[], action) => {
            return state.filter(film => film.imdbID !== action.payload)
        }
    }
})

export const {addToFavorites, removeFromFavorites} = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;