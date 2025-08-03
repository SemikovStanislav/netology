import { useEffect, useState } from 'react';

export function useJsonFetch<T = unknown>(
    params?: {[key: string]: string}
): [T | null, boolean, Error | null] {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const resultParams = new URLSearchParams({...params ?? {}, ...{apikey: import.meta.env.VITE_API_KEY}})
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}?${resultParams.toString()}`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result: T = await response.json();
                setData(result);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err);
                } else {
                    setError(new Error('Unknown error occurred'));
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params]);

    return [data, loading, error];
}
