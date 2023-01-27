import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function NoteEdit() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    let NoteId = useParams().NoteId;
    const navigate = useNavigate();

    const loadJSON = (data) => {
        setTitle(data.title);
        setAuthor(data.author);
        setBody(data.body);
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

    const handleSubmit = (event, title, author, body) => {
        event.preventDefault();
        const options = {
            method: 'PUT',
            headers:  { 'Accept': 'application/json', 'Content-type': 'application/json'},
            body: JSON.stringify({"title": title, "author": author, "body": body})
        }
        const url = `https://docent.cmi.hro.nl/bootb/demo/notes/${NoteId}`

        fetch(url, options)
            .then((response) => response.json())
            .then((data) => navigate(`/note/${NoteId}`))
            .catch((err) => console.error(err));
    }

    const deleteNote = () => {
        const options = {
            method: 'DELETE',
            headers: { 'Accept': 'application/json' }
        }
        let url = `https://docent.cmi.hro.nl/bootb/demo/notes/${NoteId}`;

        fetch(url, options)
            .then(() => navigate("/"))
            .catch(err => console.error(err));
    }

    useEffect(fetchJSON, []);

    return (
        <div className="edit-note">
            <p>ID: { NoteId }</p>
            <Link to={`/note/${NoteId}`}>Return</Link>
            <form onSubmit={(e) => {handleSubmit(e, title, author, body)}}>
                <label>title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                <label>body</label>
                <input type="text" value={body} onChange={(e) => setBody(e.target.value)}></input>
                <input type="submit" value="submit" />
            </form>
            <button onClick={ () => deleteNote() }>Delete</button>
        </div>
    )
}