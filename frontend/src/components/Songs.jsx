import { Song } from "./Song";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Songs () {

    const [songs, setSongs] = useState([]);

    const songsList = songs.map((song) => (
        <Song json={ song } />
    ));

    const loadJSON = (data) => {
        setSongs(data.items);
    }

    const fetchJSON = () => {
        const options = {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        }
        // const url = 'http://145.24.222.193:8000/songs'
        const url = 'https://docent.cmi.hro.nl/bootb/demo/notes/'

        fetch(url, options)
            .then(response => response.json())
            .then(data => loadJSON(data))
            .catch(err => console.error(err));
    }

    useEffect(fetchJSON)
    
    return (
        <div className="songs">
            <Link to={`/create`}>Create Song</Link>
            <h1>Song Collection</h1>
            <h2>Songs:</h2>
            <div>{ songsList }</div>
        </div>
    )
}