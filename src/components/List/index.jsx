import s from "./style.module.css"
import {Item} from "../Item";
import {useEffect, useState} from "react";

export function List(props) {

    const [objects, setObjects] = useState()

    useEffect(() => {
        if (props.objectsID) {
            let temp = []
            for (let i = 0; i < 10; i++) {
                temp.push(props.objectsID[i])
            }
            setObjects(temp)
            console.log(temp)
        }
    }, [props.objectsID])

    return (
        <div className={s.list}>
            {
                objects?.map((objectID) => <p>{objectID}</p>)
            }
        </div>
    )
}