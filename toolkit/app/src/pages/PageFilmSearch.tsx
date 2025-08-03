import FilmSearch from "../components/FilmSearch.tsx";
import {useCallback, useEffect, useState} from "react";
import type {IGetFilm} from "../interfaces/films.ts";
import FilmList from "../components/FilmList.tsx";
import {Space} from "antd";

const PageFilmSearch = () => {

    const [data, setData] = useState<IGetFilm[]>([]);

    const [search, setSearch] = useState('')

    const [loading, setLoading] = useState(false)

    const fetchData = useCallback(async () => {
        if (search) {
            setLoading(true)
            try {
                const urlParams = new URLSearchParams({apikey: import.meta.env.VITE_API_KEY, s: search})
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}?${urlParams.toString()}`
                )
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result: IGetFilm[] = (await response.json()).Search;
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
            setData([]);
        }

    }, [search])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const onSearchChange = (value: string) => {
        console.log(value)
        setSearch(value)
    }

    useEffect(() => {
        console.log("data", data)
    }, [data])

    useEffect(() => {
        console.log("search_data0", search)
    }, [search]);
    return <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <FilmSearch onSearchChange={onSearchChange}/>
        <FilmList data={data} loading={loading}/>
        //TODO: Добавить Empty
    </Space>
}

export default PageFilmSearch;