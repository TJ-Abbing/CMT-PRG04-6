import { Note } from "./Note";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Notes () {

    const [notes, setNotes] = useState([]);

    const notesList = notes.map((note) => (
        <Note json={ note } />
    ));

    const loadJSON = (data) => {
        setNotes(data.items);
    }

    const fetchJSON = () => {
        const options = {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        }
        const url = 'https://docent.cmi.hro.nl/bootb/demo/notes/'

        fetch(url, options)
            .then(response => response.json())
            .then(data => loadJSON(data))
            .catch(err => console.error(err));
    }

    useEffect(fetchJSON)
    
    return (
        <div className="notes">
            <Link to={`/create`}>Create note</Link>
            <h1>Notes Collection</h1>
            <h2>Notes:</h2>
            <div>{ notesList }</div>
        </div>
    )
}