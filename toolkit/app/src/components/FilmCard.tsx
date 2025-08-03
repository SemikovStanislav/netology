import { Card } from 'antd';
import type {IGetFilm} from "../interfaces/films.ts";
import FavouritesButton from "./FavouritesButton.tsx";
import { useNavigate } from "react-router-dom";


interface IFilmCard {
    data: IGetFilm
    loading: boolean
}

const FilmCard: React.FC<IFilmCard> = ({data, loading}) => {
    const navigate = useNavigate();
    return <Card
        key={data.imdbID}
        hoverable
        style={{
            width: 280,
            breakInside: "avoid",
            marginBottom: "16px",
        }}
        cover={data.Poster !== 'N/A' ? <img alt="Poster" src={data.Poster} /> : undefined}
        loading={loading}
        actions={[
            !loading ? <FavouritesButton key={data.imdbID} data={data} /> : undefined
        ]}
        onClick={() => {navigate(`/film/${data.imdbID}`);}}
    >
        <h3>{data.Title}</h3>
        <p>{data.Type}, {data.Year}</p>
    </Card>
}

export default FilmCard;