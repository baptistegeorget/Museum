import s from "./style.module.css"
import {Item} from "../Item";
export function List({objectsList}){
    return( <>

        <div className={s.list}>
            {objectsList.map((objects)=>{
                return(
                    <span className={s.item}>
                        <Item objects={objects} />
                    </span>
                )

            })}
        </div>

    </>

    )
}