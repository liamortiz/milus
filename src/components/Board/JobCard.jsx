import React from 'react';

const JobCard = ({title, jobs}) => {
    return (
        <div id="job-card">
            <h2>{title}</h2>
            <span>{jobs} Jobs</span>
            <button className="btn add-job-btn"></button>
        </div>
    )
}
export default JobCard;