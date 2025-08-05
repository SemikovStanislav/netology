import {useEffect, useState} from "react"
import {useAppSelector} from "../../app/hooks.ts";
import {selectFilmSearchQuery} from "../../features/FilmSearchInput/model";
import {fetchFilms, type FilmPreview, PAGE_SIZE} from "../../entities/Film";
import FilmSearchInput from "../../features/FilmSearchInput/ui/FilmSearchInput.tsx";
import FilmGrid from "../../features/FilmGrid/ui/FilmGrid.tsx";
import {GridLoading} from "../../shared/ui/GridLoading";
import {Spacer} from "../../shared/ui/Spacer";
import {Button, Spin} from "antd";

const FilmSearchPanel = () => {
    const query = useAppSelector(selectFilmSearchQuery)
    const [films, setFilms] = useState<FilmPreview[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState<number | undefined>(undefined)

    const isLoadMoreLoading = loading && page > 1


    const handleSearch = async (query: string) => {
        if (!query.trim()) return

        setLoading(true)
        setError(null)

        try {
            const {data, total} = await fetchFilms(query, page)

            if (total > page * PAGE_SIZE) {
                setPage(prevState => prevState + 1)
            } else {
                setPage(-1)
            }
            setTotalResults(total)
            setFilms(prevState => [...prevState, ...data])
        } catch (err: unknown) {
            if (err instanceof Error) setError(err.message)
            else setError("Unknown error")
            setFilms([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setPage(1)
        setFilms([])
    }, [query])

    return (
        <div>
            <FilmSearchInput onSearch={handleSearch} />
            <Spacer />
            {loading && <GridLoading count={10} />}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {films.length > 0 && (
                <>
                    {totalResults ? <p>Total results: {totalResults}</p> : null}

                    <FilmGrid data={films} />

                    {!loading && page !== -1 && (
                        <Button onClick={() => handleSearch(query)} type={"primary"}>Load more</Button>
                    )}

                    {isLoadMoreLoading && (
                        <div style={{ display: "flex", justifyContent: "center", padding: 16 }}>
                            <Spin />
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default FilmSearchPanel
