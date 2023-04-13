import 'bootstrap/dist/css/bootstrap.css';
import {Search} from "react-bootstrap-icons";

export function Searchbar(props) {

    const submit = (e) => {
        if (e.key === "Enter" && e.target.value !== "") {
            props.search(e.target.value)
        }
    }

    return (
        <div className="container row align-items-center" >
            <div className="col-10">
                <input className="w-100 form-control border-secondary rounded-pill" type="text" placeholder="Search any arts.." onKeyUp={submit} style={{width:"28vh"}} />
            </div>
            <div className="col-2">
                <Search color="black" fontSize="1.5em" style={{marginLeft: "-3em"}}/>
            </div>
        </div>
    )
}