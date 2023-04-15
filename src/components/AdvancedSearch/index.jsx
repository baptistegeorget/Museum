import {Search} from "react-bootstrap-icons";

export function AdvancedSearch () {

return(
    <div className="row align-items-center" >
        <h1> Recherche avancée</h1>
        <div className="col-10">
            <h3> Recherche: </h3>
            <input className="w-100 form-control border-secondary rounded-pill" type="text" placeholder="Search any arts.." />
        </div>
        <div>
            <h3> Recherche par lieux : </h3>
            <input className="w-100 form-control border-secondary rounded-pill" type="text" placeholder="Search any arts.." />
        </div>
        <div>
            <h3> Recherche par année : </h3>
            <input className="w-100 form-control border-secondary rounded-pill" type="number" min="-2000" max="2040" placeholder="Search by year.." />
            <input className="w-100 form-control border-secondary rounded-pill" type="number" min="-2000" max="2040" placeholder="Search by year.." />
        </div>
    </div>
    )
}