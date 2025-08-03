import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import type {IGetFilmDetail} from "../interfaces/films.ts";
import FilmDetail from "../components/FilmDetail.tsx";


const PageFilmDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState<IGetFilmDetail | undefined>();
    const [loading, setLoading] = useState(false);

    const fetchData= useCallback( async () => {
        if (id) {
            setLoading(true)
            try {
                const urlParams = new URLSearchParams({apikey: import.meta.env.VITE_API_KEY, i: id})
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}?${urlParams.toString()}`
                )
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result: IGetFilmDetail = await response.json();
                setData(result);
            }  catch (err: unknown) {
                if (err instanceof Error) {
                    console.error(err);
                } else {
                    console.error(new Error('Unknown error occurred'));
                }
            } finally {
                setLoading(false)
            }
        } else {
            setData(undefined);
        }
    }, [id])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return <>
        {(data) ? <FilmDetail loading={loading} data={data} /> : "Loading..."}
    </>
}

export default PageFilmDetail;