import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMenu from "../widgets/MainMenu/MainMenu.tsx";
import {PageFilmSearch, PageFilmDetail, PageFilmFavorites} from "../pages";

function App() {
    return (
        <Router>
            <MainMenu />
            <div className="app-container ">

                <Routes>
                    <Route path="/" element={<PageFilmSearch/>}/>
                    <Route path="/film/:film_id" element={<PageFilmDetail/>}/>
                    <Route path="favorites" element={<PageFilmFavorites/>}/>
                </Routes>

            </div>
        </Router>
    )
}

export default App
