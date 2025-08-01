import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostNew from "./components/PostNew.tsx";
import PostDetail from "./components/PostDetail.tsx";
import PostList from "./components/PostList.tsx";

function App() {
    return (
        <Router>
            <div className="page">
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/posts/new" element={<PostNew />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
