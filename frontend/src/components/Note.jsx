import React from 'react';
import { Link } from "react-router-dom";

export function Note ({json}) {

    return (
        <div className="note">
            <p>Title: { json.title } </p>
            <p>Body: { json.body } </p>
            <Link to={`/note/${json.id}`}>View Note</Link>
        </div>
    )
}