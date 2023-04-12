import {Outlet} from "react-router-dom";
import style from "./style.module.css"
import {Searchbar} from "../Searchbar";



export function Header() {
    return (
        <>
            <div className={style.container}>
                <div className={style.logo_container}>
                    <a href="/" > <img src="/logo-musée.jpeg" alt="logo du site" width="70"/></a>
                    <h1>Musée SMBMA</h1>
                </div>
                <div>

                    <Searchbar/>
                </div>
                <div className={style.button_container}>
                    <a href="/advanced-search">
                    <button>Advanced Search </button>
                    </a>
                </div>
            </div>
            <Outlet/>
        </>
    )
}