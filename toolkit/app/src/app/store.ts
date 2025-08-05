import {configureStore} from "@reduxjs/toolkit";
import type { ThunkAction, Action } from "@reduxjs/toolkit";
import {filmSearchInputReducer} from "../features/FilmSearchInput/model";
import {favoritesReducer} from "../features/Favorites";


export const store = configureStore({
    reducer: {
        filmSearch: filmSearchInputReducer,
        favorites: favoritesReducer
    },
    devTools: true
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export default store;