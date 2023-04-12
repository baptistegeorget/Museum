import 'bootstrap/dist/css/bootstrap.css';
import {Search} from "react-bootstrap-icons";

export function Searchbar() {

    const submit = (input) => {
        if (input.key === "Enter" && input.target.value !== "") {
            
        }
    }

    return (
        <form className="row no-gutters mt-3 align-items-center">
            <div className="col col-md-4">
                <input className="form-control border-secondary rounded-pill pr-5" id="searchbar" type="search" onKeyUp={submit}/>
            </div>
            <div className="col-auto">
                <Search color="black" fontSize="1.5em"/>
            </div>
        </form>
    )
}