import type {RootState} from "../../../app/store.ts";

export const selectFavorites = (state: RootState) => state.favorites

export const selectIsFavorite  = (state: RootState, imdbID: string): boolean => {
    return state.favorites.some(film => film.imdbID === imdbID)
}