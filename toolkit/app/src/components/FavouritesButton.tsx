import type {IGetFilm} from "../interfaces/films.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../store/store.ts";
import {addFilm, removeFilm} from "../slices/favouritesSlice.ts";
import {Button} from "antd";
import {useMemo} from "react";


interface IFavouritesButton {
    data: IGetFilm
}
const FavouritesButton: React.FC<IFavouritesButton> = ({data}) => {
    const favourites = useSelector((state: RootState) => state.favourites);
    const inFavourites = useMemo(() => (favourites.filter((item) => item.imdbID == data.imdbID)).length > 0, [favourites, data.imdbID]);
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (inFavourites) {
            dispatch(removeFilm(data.imdbID));
        } else {
            dispatch(addFilm(data));
        }
    }

    return inFavourites ?
        <Button type="primary" onClick={handleClick}>Remove from Favorites</Button> :
        <Button onClick={handleClick}>Add to Favorites</Button>;
}

export default FavouritesButton;