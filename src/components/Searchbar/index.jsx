import 'bootstrap/dist/css/bootstrap.css';
import {Search} from "react-bootstrap-icons";
import style from "./style.module.css"

export function Searchbar() {

    const submit = (input) => {
        if (input.key === "Enter" && input.target.value !== "") {

        }
    }

    return (
        <form className="row align-items-center" >
            <div className="col-auto">
                <input className="form-control border-secondary rounded-pill" type="search" placeholder="Search any arts.." onKeyUp={submit} style={{width:"28vh"}} />
            </div>
            <div className="col-auto">
                <Search color="white" fontSize="1.5em"/>
            </div>
        </form>
    )
}