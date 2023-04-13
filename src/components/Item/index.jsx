import style from "./style.module.css"
import {OBJECT_URL} from "../../config";
import {useEffect, useState} from "react";

export function Item({objectID}) {

    const [object, setObject] = useState(null)

    useEffect(() => {
        fetch(`${OBJECT_URL}${objectID}`)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setObject(data)
                }
            })
    }, [])

    return (
        <>
            <div className={style.container}>
                <img
                    alt={objectID?.title}
                    className={style.img}
                    src={objectID?.primaryImageSmall}>
                </img>
                <div className={style.title}>
                    {objectID?.title}
                </div>
            </div>
        </>)
}
