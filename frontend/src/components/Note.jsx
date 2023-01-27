import React from 'react';
import { Link } from "react-router-dom";

export function Note ({json}) {
    // console.log(json)

    return (
        <div className="note">
            <h2>Title: { json.title } </h2>
            <h3>inRepertoireSince: { json.body } </h3>
            <Link to={`/note/${json.id}`}>View Note</Link>
        </div>
    )
}