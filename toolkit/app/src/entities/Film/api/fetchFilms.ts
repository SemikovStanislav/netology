import type {FilmPreview} from "../model";


interface SearchResponseSuccess {
    Search: FilmPreview[]
    totalResults?: string
    Response: 'True'
}

interface SearchResponseError {
    Response: 'False'
    Error: string
}

type SearchResponse = SearchResponseSuccess | SearchResponseError

export const PAGE_SIZE = 10;

export const fetchFilms = async (title: string, page: number): Promise<{data: FilmPreview[], total: number}> => {
    const apiKey = import.meta.env.VITE_API_KEY
    const apiUrl = import.meta.env.VITE_API_URL

    const urlParams = new URLSearchParams({
        apikey: apiKey,
        s: title,
        page: String(page),
    })

    const url = `${apiUrl}?${urlParams.toString()}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }

        const result: SearchResponse = await response.json()

        if (result.Response === 'False') {
            throw new Error(result.Error)
        }

        return {data: result.Search, total: Number(result.totalResults)}
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('Ошибка при получении фильмов:', err.message)
            throw err
        }
        console.error('Неизвестная ошибка при получении фильмов')
        throw new Error('Неизвестная ошибка при получении фильмов')
    }
}