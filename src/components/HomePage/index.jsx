import {List} from "../List";
import {useEffect} from "react";
import {SEARCH_URL} from "../../config";

export function HomePage({search}) {
    let listObjects = []
    useEffect(()=>{
        listObjects = search("mona lisa")
        console.log(listObjects)
    },[]);

    return(<>

            <h1>KJHG</h1>
            <List objectsList={listObjects}/>
    </>

    )
}