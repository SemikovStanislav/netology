import Masonry from "react-masonry-css"
import {type FilmPreview, FilmPreviewCard} from "../../../entities/Film";
import styles from "./FilmGrid.module.css"
import {FavoritesButton} from "../../Favorites";
import {useNavigate} from "react-router-dom";

interface IFilmGrid {
    data: FilmPreview[]
}

const FilmGrid: React.FC<IFilmGrid> = ({ data }) => {
    const navigate = useNavigate();

    const breakpointColumnsObj = {
        default: 4,
        1230: 3,
        980: 2,
        680: 1
    }

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.masonryGrid}
            columnClassName={styles.masonryColumn}
        >
            {data.map((item) => (
                <FilmPreviewCard key={item.imdbID} data={item} onClick={() => navigate(`film/${item.imdbID}`)}>
                    <FavoritesButton data={item} />
                </FilmPreviewCard>
            ))}
        </Masonry>
    )
}

export default FilmGrid