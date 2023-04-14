import s from "./style.module.css"
import {Item} from "../Item";

export function List(props) {

    return (
        <div className={s.list}>
            {props.objectsID ? props.objectsID?.map((objectID) => <Item key={objectID} objectID={objectID}/>) : <p>Loading</p>}
        </div>
    )
}