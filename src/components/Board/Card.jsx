import React, { useState } from 'react';
import JobPost from './JobPost';

const Card = ({ heading }) => {

    const [numOfJobs, setNumOfJobs] = useState(0);
    const [jobPosts, setJobPosts] = useState([]);

    const addJob = () => {
        setNumOfJobs(numOfJobs+1);
    }

    return (
        <div className="card">
            <div className="card-heading">
                <h2>{heading}</h2>
                <button onClick={addJob} className="icon add-job-icon"></button>
                <p>{numOfJobs} Jobs</p>
            </div>
            <div className="job-posts-container">
                <JobPost title="Jr Web Developer" company="Facebook"/>
            </div>
        </div>
    )
}
export default Card;