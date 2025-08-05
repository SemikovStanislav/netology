import type {FilmDetail} from "../model";


type SearchResponseSuccess = FilmDetail

interface SearchResponseError {
    Response: 'False'
    Error: string
}

type SearchResponse = SearchResponseSuccess | SearchResponseError

export const fetchFilmDetail = async (id: string): Promise<FilmDetail> => {
    const apiKey = import.meta.env.VITE_API_KEY
    const apiUrl = import.meta.env.VITE_API_URL

    const urlParams = new URLSearchParams({
        apikey: apiKey,
        i: id,
    })

    const url = `${apiUrl}?${urlParams.toString()}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }

        const result: SearchResponse = await response.json()

        if ("Response" in result && result.Response === 'False') {
            throw new Error(result.Error)
        }

        return result as SearchResponseSuccess
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('Error fetching film:', err.message)
            throw err
        }
        console.error('Unknown error fetching film')
        throw new Error('Unknown error fetching film')
    }
}