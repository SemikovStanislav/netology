import { useEffect, useState } from 'react';

export function useJsonFetch<T = unknown>(
    url: string,
    opts?: RequestInit
): [T | null, boolean, Error | null] {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url, opts);
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
    }, [url, opts]);

    return [data, loading, error];
}
