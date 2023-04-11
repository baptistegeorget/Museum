import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [objects, setObjects] = useState([])
  const day = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()

  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?metadataDate=${year}-${month}-${day}`)
        .then((response) => response.json())
        .then((data) => setObjects(data))
  }, [])



  return (
    <div>

    </div>
  );
}

export default App;
