import {useAppSelector} from "../app/hooks.ts";
import {selectFavorites} from "../features/Favorites";
import FilmGrid from "../features/FilmGrid/ui/FilmGrid.tsx";

const PageFilmFavorites = () => {
    const data = useAppSelector(selectFavorites)

    return <>
        <FilmGrid data={data} />
    </>
}

export default PageFilmFavorites