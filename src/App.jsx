import {useEffect, useState} from "react";
import {Header} from "./components/Header";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";

function App() {

    const [objects, setObjects] = useState([])

    useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`)
            .then((response) => response.json())
            .then((data) => setObjects(data))
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route path="advanced-search" element={<p>Search</p>}/>
                    <Route path="details" element={<p>details</p>}/>
                </Route>
                <Route path="*" element={<p>NOT FOUND</p>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
