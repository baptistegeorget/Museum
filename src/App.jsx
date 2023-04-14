import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SEARCH_URL} from "./config";
import {HomePage} from "./components/HomePage";
import {Error} from "./components/Error";
import {Details} from "./components/Details";
import {useState} from "react";

function App() {

    const [objectsID, setObjectsID] = useState()

    const search = (value = "", limit = 10, departmentId = Infinity, geoLocation = "", dateBegin = Infinity, dateEnd = Infinity, hasImages = false) => {
        let results = []
        let parameters = `?q=${value}`
        if (departmentId !== Infinity) {
            parameters += `&departmentId=${departmentId}`
        }
        if (geoLocation !== "") {
            parameters += `&geoLocation=${geoLocation}`
        }
        if (dateBegin !== Infinity) {
            parameters += `&dateBegin=${dateBegin}`
        }
        if (dateEnd !== Infinity) {
            parameters += `&dateEnd=${dateEnd}`
        }
        if (hasImages) {
            parameters += `&hasImages=true`
        }
        fetch(`${SEARCH_URL}${parameters}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.objectIDs) {
                    //let temp = data.objectIDs
                    //let results = []
                    //for (let i = 0; i < limit; i++) {
                    //    temp.push(temp[i])
                    //}
                    //setObjectsID(results)
                    setObjectsID(data.objectIDs)
                }
            })
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header search={search}/>}>
                    <Route path="/" element={<HomePage search={search} objectsID={objectsID}/>}/>
                    <Route path="advanced-search" element={<p>Search</p>}/>
                    <Route path="details/:id" element={<Details/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
