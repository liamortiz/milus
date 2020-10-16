import React, { useState } from 'react';

const JobPost = (props) => {
    return (
        <div className="job-post">
            <h3>{props.title}</h3>
            <p>@{props.company}</p>

            <button className="icon trash-icon"></button>
            <button className="icon edit-icon"></button>
        </div>
    )
}
export default JobPost;