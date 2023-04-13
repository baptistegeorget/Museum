import {useEffect, useState} from "react";
import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {OBJECT_URL, SEARCH_URL} from "./config";
import {List} from "./components/List";
import {HomePage} from "./components/HomePage";
import {Error} from "./components/Error";

function App() {





    const search = (value = "", limit = 10, departmentId = Infinity, geoLocation = "", dateBegin = Infinity, dateEnd = Infinity, hasImages = false) => {
        let results = [];
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
                if (data.total !== 0) {
                    for (let i = 0; i < limit; i++) {
                        fetch(`${OBJECT_URL}${data?.objectIDs[i]}`)
                            .then((response) => response.json())
                            .then((data) => results.push(data))
                    }

                }
            })
        return results
    }



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header search={search}/>}>
                    <Route path="/home" element={<HomePage search={search} />}/>
                    <Route path="advanced-search" element={<p>Search</p>}/>
                    <Route path="details/:id" element={<Details/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
