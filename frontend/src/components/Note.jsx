import React from 'react';
import { Link } from "react-router-dom";

export function Note ({json}) {

    return (
        <div className="note">
            <h2>Title: { json.title } </h2>
            <h3>Date: { json.body } </h3>
            <Link to={`/note/${json.id}`}>Check note</Link>
        </div>
    )
}