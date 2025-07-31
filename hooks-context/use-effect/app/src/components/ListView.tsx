import React, { useState } from 'react';
import './ListView.css';

interface IListView {
    data?: { id: number; name: string }[] | null;
    selectedId?: number;
    setSelectedId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const ListView: React.FC<IListView> = ({ data, selectedId, setSelectedId }) => {
    const [visible, setVisible] = useState(3);

    if (!data) {
        return <div className="list-view">Loading...</div>; // или null
    }

    const hasMore = data.length > visible;

    return (
        <div className="list-view">
            {data.slice(0, visible).map((item) => (
                <div
                    key={item.id}
                    className={`list-item ${item.id === selectedId ? 'active' : ''}`}
                    onClick={() => setSelectedId(item.id)}
                >
                    {item.name}
                </div>
            ))}
            {hasMore && (
                <div
                    className="list-item ellipsis"
                    onClick={() => setVisible((prev) => prev + 3)}
                >
                    ...
                </div>
            )}
        </div>
    );
};

export default ListView;
