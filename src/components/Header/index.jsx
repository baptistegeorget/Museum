import {Outlet} from "react-router-dom";

export function Header() {
    return (
        <>
            <di>
                <p>HEADER</p>
            </di>
            <Outlet/>
        </>
    )
}