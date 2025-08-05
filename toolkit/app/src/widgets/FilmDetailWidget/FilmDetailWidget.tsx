import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {fetchFilmDetail, type FilmDetail, FilmDetailCard} from "../../entities/Film";


const FilmDetailWidget = () => {
    const { film_id } = useParams()
    const [film, setFilm] = useState<FilmDetail | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchData = useCallback(async () => {
        if (film_id) {
            setLoading(true)
            setError(null)

            try {
                const film = await fetchFilmDetail(film_id)

                setFilm(film)
            } catch (err: unknown) {
                if (err instanceof Error) setError(err.message)
                else setError("Unknown error")
                setFilm(null)
            } finally {
                setLoading(false)
            }
        }
    }, [film_id])

    useEffect(() => {
        fetchData()
    }, [fetchData])


    return (
        <>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!error && ((!loading && film) || loading) && <FilmDetailCard data={film} loading={loading} />}
        </>
    )
}

export default FilmDetailWidget