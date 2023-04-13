import style from "./style.module.css"

export function Item({object}) {



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
