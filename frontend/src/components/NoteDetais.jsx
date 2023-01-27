import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function NoteDetails ({json}) {
    const [note, setNote] = useState({})
    let NoteId = useParams().NoteId;

    const loadJSON = (data) => {
        setNote(data);
    }

    const fetchJSON = () => {
        const options = {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        }
        const url =  `https://docent.cmi.hro.nl/bootb/demo/notes/${NoteId}`;

        fetch(url, options)
            .then(response => response.json())
            .then(data => loadJSON(data))
            .catch(err => console.error(err));
    }

    useEffect(fetchJSON, []);

    console.log(NoteId)

    return (
        <div className="notedetail">
            <Link to={`/`}>Go Back</Link>
            <h2>Title: { note.title } </h2>
            <h3>ID: { NoteId }</h3>
            <h3>body: { note.body } </h3>
            <h3>Author: { note.author } </h3>
            <Link to={`/note/${NoteId}/edit`}>Edit Note</Link>
        </div>
    )
}