import {List} from "../List";
import {useEffect,} from "react";

export function HomePage(props) {

    useEffect(() => {
        props.search("mona", 10, Infinity, "", Infinity, Infinity, true)
    }, [])

    return (
        <div>
            <h1>Nos recommandations :</h1>
            <List objectsID={props.objectsID}/>
        </div>
    )
}