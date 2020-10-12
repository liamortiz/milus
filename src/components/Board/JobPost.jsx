import React, { useState } from 'react';

const JobPost = ({ title, company }) => {
    return (
        <div className="job-post">
            <h3>{title}</h3>
            <p>@{company}</p>

            <button className="icon trash-icon"></button>
            <button className="icon edit-icon"></button>
        </div>
    )
}
export default JobPost;