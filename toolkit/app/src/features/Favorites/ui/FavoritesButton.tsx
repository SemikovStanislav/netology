import {Button} from "antd";
import type {FilmPreview} from "../../../entities/Film";
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {addToFavorites, removeFromFavorites, selectIsFavorite} from "../model";
import {HeartOutlined} from "@ant-design/icons";


interface IFavoritesButton {
    data: FilmPreview
}

const FavoritesButton: React.FC<IFavoritesButton> = ({data})=> {
    const dispatch = useAppDispatch();

    const isFavorite = useAppSelector(state => selectIsFavorite(state, data.imdbID))


    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if (isFavorite) {
            dispatch(removeFromFavorites(data.imdbID))
        } else {
            dispatch(addToFavorites(data))
        }
    }

    return <Button
        onClick={handleClick}
        type={isFavorite ? "primary" : "default"}
        icon={<HeartOutlined/>}
        iconPosition={"end"}
    >
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
    </Button>
}

export default FavoritesButton;