import './App.css'
import ServiceList from "./components/ServiceList.tsx";
import ServiceInput from "./components/ServiceInput.tsx";
import ServiceFilter from "./components/ServiceFilter.tsx";

function App() {
    return (
        <>
            <ServiceFilter />
            <ServiceInput />
            <ServiceList />
        </>
    )
}

export default App
