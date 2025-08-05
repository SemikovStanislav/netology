import { Card } from 'antd';
import type {FilmPreview} from "../model";
import styles from "./FilmPreviewCard.module.css";
import {FALLBACK_URL} from "../../../shared/constants.ts";


interface IFilmPreviewCard {
    data: FilmPreview
    onClick?: () => void
    children?: React.ReactNode
}

const FilmPreviewCard: React.FC<IFilmPreviewCard> = ({data, onClick, children}) => {
    return <Card
        key={data.imdbID}
        hoverable
        cover={
            <img
                alt="Poster"
                src={data.Poster !== 'N/A' ? data.Poster : FALLBACK_URL}
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_URL;
                }}
            />
        }
        onClick={onClick}
        className={styles.card}
    >
        <h3>{data.Title}</h3>
        <p>{data.Type}, {data.Year}</p>
        {children}
    </Card>
}

export default FilmPreviewCard;