import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useJsonFetch } from "../hooks/useJsonFetch";

const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [editing, setEditing] = useState(false);
    const [editValue, setEditValue] = useState("");

    const [data, loading, error, refetch] = useJsonFetch<{ post: { id: number; content: string } }>(
        `http://localhost:7070/posts/${id}`
    );

    useEffect(() => {
        if (data?.post) {
            setEditValue(data.post.content);
        }
    }, [data]);

    const handleDelete = async () => {
        await fetch(`http://localhost:7070/posts/${id}`, {
            method: "DELETE",
        });
        navigate("/");
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`http://localhost:7070/posts/${id}`, {
                method: "PUT",
                body: JSON.stringify({ content: editValue }),
            });

            if (!response.ok) {
                throw new Error(`Ошибка при обновлении: ${response.status}`);
            }
            refetch()
            setEditing(false);
        } catch (e) {
            console.error(e);
        }
    };

    const handleCancelEdit = () => {
        setEditValue(data?.post?.content ?? "");
        setEditing(false);
    };

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error.message}</p>;
    if (!data?.post) return <p>Пост не найден</p>;

    const post = data.post;

    return (
        <div className="card">
            {!editing ? (
                <>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h3>Посмотреть</h3>
                        <button onClick={() => navigate("/")}>❌</button>
                    </div>
                    <p>{post.content}</p>
                    <button onClick={() => setEditing(true)}>Редактировать</button>
                    <button onClick={handleDelete}>Удалить</button>
                </>
            ) : (
                <>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h3>Редактировать</h3>
                        <button onClick={handleCancelEdit}>❌</button>
                    </div>
                    <textarea
                        rows={5}
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <br />
                    <button onClick={handleSave}>Сохранить</button>
                </>
            )}
        </div>
    );
};

export default PostDetail;
