import './App.css'
import List from "./components/List.tsx";
import {useState} from "react";
import Details from "./components/Details.tsx";

function App() {
    const [selectedId, setSelectedId] = useState<number|undefined>(0);

    return (
        <div className="app-container">
            <List selectedId={selectedId} setSelectedId={setSelectedId}/>
            <Details selectedId={selectedId}/>
        </div>
    )
}

export default App
