import './App.css'
import FetchComponent from "./components/FetchComponent.tsx";


function App() {
    return (
        <>
            <FetchComponent url={"http://localhost:7070/data"}/>
            <FetchComponent url={"http://localhost:7070/error"}/>
            <FetchComponent url={"http://localhost:7070/loading"}/>
        </>
    )
}

export default App
