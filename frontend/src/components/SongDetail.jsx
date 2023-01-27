import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function SongDetail ({json}) {
    const [song, setSong] = useState({})
    let songId = useParams().songId;

    const loadJSON = (data) => {
        setSong(data);
    }

    const fetchJSON = () => {
        const options = {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        }
        const url =  `https://docent.cmi.hro.nl/bootb/demo/notes/${songId}`;

        fetch(url, options)
            .then(response => response.json())
            .then(data => loadJSON(data))
            .catch(err => console.error(err));
    }

    useEffect(fetchJSON, []);

    console.log(songId)

    return (
        <div className="songdetail">
            <Link to={`/`}>Go Back</Link>
            <h2>Title: { song.title } </h2>
            <h3>ID: { songId }</h3>
            <h3>inRepertoireSince: { song.body } </h3>
            <h3>Author: { song.author } </h3>
            <Link to={`/song/${songId}/edit`}>Edit Song</Link>
        </div>
    )
}