import React from 'react';
import { Link } from "react-router-dom";

export function Song ({json}) {
    // console.log(json)

    return (
        <div className="song">
            <h2>Title: { json.title } </h2>
            <h3>inRepertoireSince: { json.body } </h3>
            <Link to={`/song/${json.id}`}>View Song</Link>
        </div>
    )
}