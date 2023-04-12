import 'bootstrap/dist/css/bootstrap.css';
import {Search} from "react-bootstrap-icons";

export function Searchbar(props) {

    const submit = (e) => {
        if (e.key === "Enter" && e.target.value !== "") {
            props.search(e.target.value)
        }
    }

    return (
        <div className="row align-items-center" >
            <div className="col-auto">
                <input className="form-control border-secondary rounded-pill" type="text" placeholder="Search any arts.." onKeyUp={submit} style={{width:"28vh"}} />
            </div>
            <div className="col-auto">
                <Search color="white" fontSize="1.5em"/>
            </div>
        </div>
    )
}