import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LOCAL_STORAGE_KEY = "postDraft";

const PostNew = () => {
    const [value, setValue] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [draftLoaded, setDraftLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const draft = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (draft !== null) {
            setValue(draft);
        }
        setDraftLoaded(true);
    }, []);

    useEffect(() => {
        if (draftLoaded) {
            localStorage.setItem(LOCAL_STORAGE_KEY, value);
        }
    }, [value, draftLoaded]);

    const handlePost = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("http://localhost:7070/posts", {
                method: "POST",
                body: JSON.stringify({ id: 0, content: value }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            localStorage.removeItem(LOCAL_STORAGE_KEY); // Очистить черновик
            navigate("/");
        } catch (err: any) {
            setError(err.message || "Ошибка");
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Создать</h3>
                <button onClick={handleCancel}>❌</button>
            </div>

            <textarea
                rows={5}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <br />
            <button disabled={!value || loading} onClick={handlePost}>
                {loading ? "Отправка..." : "Опубликовать"}
            </button>
            {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}
        </div>
    );
};

export default PostNew;
