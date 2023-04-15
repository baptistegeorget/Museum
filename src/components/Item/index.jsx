import style from "./style.module.css"
import {OBJECT_URL} from "../../config";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

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
        <div className={style.container}>
            <Link to={`/details/${objectID}`}>
                <img
                    alt={object?.title}
                    className={style.img}
                    src={object?.primaryImageSmall}>
                </img>
                <div className={style.title}>
                    {object?.title}
                </div>
            </Link>
        </div>
    )
}
