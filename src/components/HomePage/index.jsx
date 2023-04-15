import {List} from "../List";
import {useEffect,} from "react";

export function HomePage(props) {

    useEffect(() => {
        props.search(" ", 10, Infinity, "Paris", Infinity, Infinity, true)
    }, [])

    return (
        <div>
            <h1 style={{ fontFamily: 'Bradley Hand, Ariel', fontSize: '2.5em' }}>Nos recommandations :</h1>
            <List objectsID={props.objectsID}/>
        </div>
    )
}