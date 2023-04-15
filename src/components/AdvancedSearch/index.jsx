import {List} from "../List";

export function AdvancedSearch(props) {

    const onChange = () => {
        props.search(document.getElementById("q").value, 10, document.getElementById("location").value, document.getElementById("date-begin").value, document.getElementById("date-end").value)
    }

    return (
        <div>
            <h1 className="h1" style={{marginLeft: "5vw", marginBottom: "1em", marginTop: "2em"}}>Recherche avancée</h1>
            <div style={{marginLeft: "10vw", marginRight: "10vw", marginBottom: "2em"}} className="row">
                <div className="col-4">
                    <h3> Recherche: </h3>
                    <input onChange={onChange} id="q" className="w-100 form-control border-secondary rounded-pill" type="text" placeholder="Search any arts.."/>
                </div>
                <div className="col-4">
                    <h3> Recherche par lieux : </h3>
                    <input onChange={onChange} id="location" className="w-100 form-control border-secondary rounded-pill" type="text" placeholder="Search any arts.."/>
                </div>
                <div className="col-4">
                    <h3> Recherche par année : </h3>
                    <div className="row">
                        <div className="col-6">
                            <input onChange={onChange} id="date-begin" className="w-100 form-control border-secondary rounded-pill" type="number" min="-2000" max="2040" placeholder="Search by year.."/>
                        </div>
                        <div className="col-6">
                            <input onChange={onChange} id="date-end" className="w-100 form-control border-secondary rounded-pill" type="number" min="-2000" max="2040" placeholder="Search by year.."/>
                        </div>
                    </div>
                </div>
            </div>
            <List objectsID={props.objectsID}/>
        </div>
    )
}