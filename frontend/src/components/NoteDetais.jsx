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

    return (
        <div className="notedetail">
            <Link to={`/`}>Go Back</Link>
            <p>Title: { note.title } </p>
            <p>ID: { NoteId }</p>
            <p>body: { note.body } </p>
            <p>Author: { note.author } </p>
            <Link to={`/note/${NoteId}/edit`}>Edit Note</Link>
        </div>
    )
}