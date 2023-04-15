import {List} from "../List";
import {useEffect,} from "react";

export function HomePage(props) {

    return (
        <div>
            <h1 className="h1" style={{marginLeft: "5vw", marginBottom: "2em", marginTop: "2em"}}>Nos recommandations :</h1>
            <List objectsID={props.objectsID}/>
        </div>
    )
}