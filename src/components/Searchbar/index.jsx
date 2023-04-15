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
            <div className="col-10">
                <input className="w-100 form-control border-secondary rounded-pill" type="text" placeholder="Search any arts.." onKeyUp={submit}/>
            </div>
            <Search color="white" fontSize="1.5em" className="col-2"/>
        </div>
    )
}