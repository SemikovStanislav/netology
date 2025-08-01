import { useNavigate } from "react-router-dom";
import { useJsonFetch } from "../hooks/useJsonFetch"; // путь проверь, если нужно
type Post = {
    id: number;
    content: string;
    created: number;
};

const PostList = () => {
    const navigate = useNavigate();

    const [data, loading, error] = useJsonFetch<Post[]>("http://localhost:7070/posts");

    const handleCardClick = (id: number) => {
        navigate(`/posts/${id}`);
    };

    return (
        <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Список</h3>
                <button onClick={() => navigate("/posts/new")}>Создать пост</button>
            </div>

            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: "red" }}>{error.message}</p>}

            {!loading && !error && data?.length === 0 && <p>Нет постов</p>}

            {!loading && !error && data?.map(post => (
                <div
                    key={post.id}
                    onClick={() => handleCardClick(post.id)}
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        marginBottom: "10px",
                        cursor: "pointer",
                        borderRadius: "6px",
                    }}
                >
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
