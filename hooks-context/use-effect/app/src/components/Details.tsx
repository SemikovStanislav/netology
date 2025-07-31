import DetailsView from "./DetailsView.tsx";
import { useFetch } from "../hooks/useFetch.tsx";

interface IDetails {
    selectedId?: number;
}

const Details: React.FC<IDetails> = ({ selectedId }) => {
    const url = selectedId
        ? `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${selectedId}.json`
        : null;

    const { data, loading, error } = useFetch<{
        id: number;
        name: string;
        avatar: string;
        details: {
            city: string;
            company: string;
            position: string;
        };
    }>(url);

    if (loading) return <p>Loading details...</p>;
    if (error) return <p>Error loading details: {error}</p>;
    if (!data) return <></>;

    return <DetailsView key={data.id} data={data} />;
};

export default Details;
