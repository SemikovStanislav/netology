import {useJsonFetch} from "../hooks/useJsonFetch.tsx";

interface IFetchComponent {
    url: string;
}

const FetchComponent: React.FC<IFetchComponent> = ({url}) => {
    const [data, loading, error] = useJsonFetch<{status: string}>(url);

    return (
        <div>
            <h2>/data</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
            {data && <pre>{JSON.stringify(data)}</pre>}
        </div>
    );
};

export default FetchComponent;