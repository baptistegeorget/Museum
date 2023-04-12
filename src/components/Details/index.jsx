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
            .then((data) => setObject(data))
    }, [])

    const displayArtist = () => {
        if (object?.artistDisplayName) {
            return (
                <>
                    <h3>{object?.artistDisplayName} {object?.artistBeginDate}-{object?.artistEndDate}</h3>
                    <em>{object?.artistNationality}</em>
                    <p>{object?.artistDisplayBio}</p>
                </>
            )
        }
    }

    return (
        <div className="row">
            <img className="" alt="image" src={`${object?.primaryImage}`}/>
            <div className="">
                <h2>{object?.title}</h2>
                <p>{object?.creditLine}</p>
                <p>Date : {object?.objectDate}</p>
                {displayArtist()}
                <div>
                    <p>{object?.department}</p>
                </div>
            </div>
        </div>
    )
}