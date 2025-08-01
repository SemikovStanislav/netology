import { useCallback, useEffect, useState } from 'react';

export function useJsonFetch<T = unknown>(
    url: string,
    opts?: RequestInit
): [T | null, boolean, Error | null, () => void] {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [reloadFlag, setReloadFlag] = useState(0); // триггер для refetch

    const refetch = useCallback(() => {
        setReloadFlag(prev => prev + 1);
    }, []);

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
    }, [url, opts, reloadFlag]);

    return [data, loading, error, refetch];
}
