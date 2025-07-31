import ListView from "./ListView.tsx";
import { useFetch } from "../hooks/useFetch";

interface IList {
    selectedId?: number;
    setSelectedId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const List: React.FC<IList> = ({ selectedId, setSelectedId }) => {
    const { data = [], loading, error } = useFetch<{ id: number; name: string }[]>(
        'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
    );

    if (loading) return <p>Loading list...</p>;
    if (error) return <p>Error loading list: {error}</p>;

    return <ListView data={data} selectedId={selectedId} setSelectedId={setSelectedId} />;
};

export default List;
