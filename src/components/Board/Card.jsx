import React, { useState } from 'react';
import JobPost from './JobPost';
import produce from 'immer';

const Card = ({ heading }) => {

    const [jobPosts, setJobPosts] = useState([]);

    const addJob = () => {
        const newState = produce(jobPosts, nextState => {
            nextState.push(<JobPost title="Jr Software Engineer" company="Facebook"/>)
        })
        setJobPosts(newState);
    }
    return (
        <div className="card">
            <div className="card-heading">
                <h2>{heading}</h2>
                <button onClick={addJob} className="icon add-job-icon"></button>
                <p>{jobPosts.length} Jobs</p>
            </div>

            <div className="job-posts-container">
                {jobPosts}
            </div>
        </div>
    )
}
export default Card;