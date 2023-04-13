import s from "./style.module.css"
import {Item} from "../Item";
import {useEffect} from "react";

export function List({objects}) {

    useEffect(() => {
    }, []);

    return (
        <>
            <div className={s.list}>
                {objects?.map((object) => {
                    console.log(object)
                    return (
                        <span className={s.item}>
                        <Item object={object}/>
                    </span>
                    )
                })}
            </div>
        </>
    )
}