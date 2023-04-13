import style from "./style.module.css"

export function Item({objects}){
    return (
        <>
        <div className={style.container}    >
            <img
                alt={objects.title}
                className={style.img}
                src={objects?.primaryImageSmall}>
            </img>
            <div className={style.title}>
                {objects.title}
            </div>
        </div>
    </>)
}
