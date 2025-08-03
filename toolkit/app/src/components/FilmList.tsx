import type {IGetFilm} from "../interfaces/films.ts";
import FilmCard from "./FilmCard.tsx";
import { nanoid } from 'nanoid'


interface IFilmList {
    data: IGetFilm[]
    loading: boolean
}

const loadingData: IGetFilm[] = Array.from({ length: 8 }, () => ({
    Poster: "N/A",
    Title: "",
    Type: "",
    Year: "",
    imdbID: `tt${nanoid(7)}`
}));

const FilmList: React.FC<IFilmList> = ({data, loading}) => {
    return <div style={{ columnCount: 4, columnGap: "16px" }}>
        {(loading ? loadingData : data).map((item) => <FilmCard data={item} loading={loading}/>)}
    </div>
}

export default FilmList;