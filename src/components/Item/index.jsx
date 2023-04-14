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
                    console.log(data)
                    setObject(data)
                }
            })
    }, [])

    return (
        <>
            <div className={style.container}>
                <img
                    alt={object?.title}
                    className={style.img}
                    src={object?.primaryImageSmall}>
                </img>
                <div className={style.title}>
                    {object?.title}
                </div>
            </div>
        </>)
}
