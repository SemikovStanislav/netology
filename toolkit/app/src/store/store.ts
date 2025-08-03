import {configureStore} from "@reduxjs/toolkit";
import favouritesReducer from "../slices/favouritesSlice.ts"


export const store = configureStore({
    reducer: {
        favourites: favouritesReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;