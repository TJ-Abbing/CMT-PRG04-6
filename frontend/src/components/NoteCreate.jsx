import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function NoteCreate() {
    const handleSubmit = (event, title, author, body) => {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers:  { 'Accept': 'application/json', 'Content-type': 'application/json'},
            body: JSON.stringify({"title": title, "author": author, "body": body})
        }
        const url = 'https://docent.cmi.hro.nl/bootb/demo/notes/'

        fetch(url, options)
            .then((response) => response.json())
            .catch((err) => console.error(err));
    }

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [body, setInRepertoireSince] = useState();
    console.log(title, author, body)

    return (
        <div className="create-note">
            <Link to={`/`}>Go Back</Link>
            <form onSubmit={(e) => {handleSubmit(e, title, author, body)}}>
                <label>title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                <label>body</label>
                <input type="text" value={body} onChange={(e) => setInRepertoireSince(e.target.value)}></input>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}