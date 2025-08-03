import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageFilmSearch from "./pages/PageFilmSearch.tsx";
import PageFilmDetail from "./pages/PageFilmDetail.tsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<PageFilmSearch />}/>
                    <Route path="/film/:id" element={<PageFilmDetail />}/>
                    <Route path="favourites" element={<h1>Избранное</h1>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
