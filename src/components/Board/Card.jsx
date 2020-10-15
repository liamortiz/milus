import React, { useState } from 'react';
import JobPost from './JobPost';

const Card = ({ heading, subheading }) => {

    const [numOfJobs, setNumOfJobs] = useState(0);
    const [jobPosts, setJobPosts] = useState([]);

    const addJob = () => {
        setNumOfJobs(numOfJobs+1);
        setJobPosts([...jobPosts, <JobPost title="Jr Software Engineer" company="Facebook"/>]);
    }
    return (
        <div className="card">
            <div className="card-heading">
                <h2>{heading}</h2>
                <button onClick={addJob} className="icon add-job-icon"></button>
                <p className="subheading">{subheading}</p>
                <p>{numOfJobs} Jobs</p>
            </div>
            <div className="job-posts-container">
                {jobPosts}
            </div>
        </div>
    )
}
export default Card;