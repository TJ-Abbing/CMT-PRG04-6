import { Note } from "./Note";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Notes () {

    const [notes, setSongs] = useState([]);

    const songsList = notes.map((note) => (
        <Note json={ note } />
    ));

    const loadJSON = (data) => {
        setSongs(data.items);
    }

    const fetchJSON = () => {
        const options = {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        }
        // const url = 'http://145.24.222.193:8000/notes'
        const url = 'https://docent.cmi.hro.nl/bootb/demo/notes/'

        fetch(url, options)
            .then(response => response.json())
            .then(data => loadJSON(data))
            .catch(err => console.error(err));
    }

    useEffect(fetchJSON)
    
    return (
        <div className="notes">
            <Link to={`/create`}>Create Note</Link>
            <h1>Note Collection</h1>
            <h2>Notes:</h2>
            <div>{ songsList }</div>
        </div>
    )
}