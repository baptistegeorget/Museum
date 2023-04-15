import {Outlet} from "react-router-dom";
import style from "./style.module.css"
import {Searchbar} from "../Searchbar";

export function Header(props) {

    return (
        <div className="container-fluid">
            <div style={{backgroundColor: "#2b2b2b"}} className="row">
                <div className="col-3 col-md-3 col-lg-3 align-self-center text-center">
                    <a href="/">
                        <img src="/logo-musée.jpeg" alt="logo du site" style={{maxWidth: "100px"}}/>
                    </a>
                </div>
                <div className="col-9 col-md-5 col-lg-6 align-self-center">
                    <Searchbar search={props.search}/>
                </div>
                <div className="col-12 col-md-4 col-lg-3 align-self-center text-center">
                    <a href="/advanced-search">
                        <button className={style.button}>Advanced Search</button>
                    </a>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}