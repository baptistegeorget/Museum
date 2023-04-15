import {useParams} from "react-router-dom";
import {OBJECT_URL} from "../../config";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';


export function Details() {

    const [object, setObject] = useState()
    let params = useParams()

    useEffect(() => {
        fetch(`${OBJECT_URL}${params.id}`)
            .then((response) => response.json())
            .then((data) => {
                setObject(data)
            })
    }, [])

    const displayArtist = () => {
        if (object?.artistDisplayName) {
            return (
                <>
                    <p><b>Artist : </b>{object?.artistDisplayName} {object?.artistBeginDate}-{object?.artistEndDate} <em className="text-muted">{object?.artistNationality}</em></p>
                </>
            )
        }
    }
    console.log(object)
    return (
        <div style={{marginTop: "7vh", marginBottom: "2em"}} className="container">
            <div className="row">
                <div className="col-md-5">
                    <img className="w-100 rounded" alt={object?.title} src={`${object?.primaryImage}`}/>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5">
                    <h2 style={{fontSize:"3em"}}>{object?.title}</h2>
                    <p>{object?.creditLine}</p>
                    <p><b>Date : </b>{object?.objectDate}</p>
                    {displayArtist()}
                    <div className="rounded-pill d-inline-block bg-black">
                        <p className="text-white mb-0 p-2 ps-4 pe-4">{object?.department}</p>
                    </div>
                    <div className="mt-2">
                        <a href={object?.objectWikidata_URL} target="_blank">
                            <p>En savoir plus</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}