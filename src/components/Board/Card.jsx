import React, { useState } from 'react';
import produce from 'immer';

const Card = (props) => {

    const [jobPosts, setJobPosts] = useState([]);

    const openJobForm = () => {
        props.openJobForm(null, {addJobPost});
    }

    const addJobPost = (job) => {
        setJobPosts(
            produce(jobPosts, nextState => {
                nextState.push(job)
        }));
    }

    const removeJobPost = (id) => {
        const index = jobPosts.findIndex(job => job.id === id);
        const newState = jobPosts.slice(0, index).concat(jobPosts.slice(index+1));
        setJobPosts(newState);
    }

    return (
        <div className="card">
            <div className="card-heading">
                <h2>{props.heading}</h2>
                <button onClick={openJobForm} className="icon add-job-icon"></button>
                <p>{jobPosts.length} Jobs</p>
            </div>

            <div className="job-posts-container">
                {
                jobPosts.map(job => 
                    <div className="job-post">
                        <h3>{job.title}</h3>
                        <p>@{job.company}</p>

                        <button onClick={() => removeJobPost(job.id)} className="icon trash-icon"></button>
                        <button className="icon edit-icon"></button>
                    </div>
                    )
                }
            </div>
        </div>
    )
}
export default Card;