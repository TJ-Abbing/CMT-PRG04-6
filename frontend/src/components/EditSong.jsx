import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function EditSong() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [inRepertoireSince, setInRepertoireSince] = useState("");
    let songId = useParams().songId;
    const navigate = useNavigate();

    const loadJSON = (data) => {
        setTitle(data.title);
        setAuthor(data.author);
        setInRepertoireSince(data.body);
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

    const handleSubmit = (event, title, author, inRepertoireSince) => {
        event.preventDefault();
        const options = {
            method: 'PUT',
            headers:  { 'Accept': 'application/json', 'Content-type': 'application/json'},
            body: JSON.stringify({"title": title, "author": author, "body": inRepertoireSince})
        }
        const url = `https://docent.cmi.hro.nl/bootb/demo/notes/${songId}`

        fetch(url, options)
            .then((response) => response.json())
            .then((data) => navigate(`/song/${songId}`))
            .catch((err) => console.error(err));
    }

    const deleteSong = () => {
        const options = {
            method: 'DELETE',
            headers: { 'Accept': 'application/json' }
        }
        let url = `https://docent.cmi.hro.nl/bootb/demo/notes/${songId}`;

        fetch(url, options)
            .then(() => navigate("/"))
            .catch(err => console.error(err));
    }

    useEffect(fetchJSON, []);

    return (
        <div className="edit-song">
            <h3>ID: { songId }</h3>
            <Link to={`/song/${songId}`}>Go Back</Link>
            <form onSubmit={(e) => {handleSubmit(e, title, author, inRepertoireSince)}}>
                <label>title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                <label>inRepertoireSince</label>
                <input type="text" value={inRepertoireSince} onChange={(e) => setInRepertoireSince(e.target.value)}></input>
                <input type="submit" value="submit" />
            </form>
            <button onClick={ () => deleteSong() }>Delete</button>
        </div>
    )
}