import {Outlet} from "react-router-dom";
import style from "./style.module.css"
import {Searchbar} from "../Searchbar";


export function Header(props) {
    return (
        <>
            <div style={{backgroundColor: "#2b2b2b", height: "18vh"}} className="row  col-auto align-items-center">
                <div className="col-md-3 col-12 d-flex justify-content-center">
                    <a href="/"> <img src="/logo-musée.jpeg" alt="logo du site" width="100"/></a>
                </div>
                <div className="col-md-6 col-9 d-flex justify-content-center">

                    <Searchbar search={props.search}/>
                </div>
                <div className="col-md-3 col-3 d-flex justify-content-center">
                    <a href="/advanced-search">
                        <button className={style.button}>Advanced Search</button>
                    </a>
                </div>
            </div>
            <Outlet/>
        </>
    )
}