import React, { useState, useEffect, useRef } from 'react';
import produce from 'immer';
import NewPostForm from './NewPostForm';
import EditForm from './EditForm';
import { Sortable } from '@shopify/draggable';
import emoji from 'node-emoji';

const Card = ({ name, jobs }) => {

    const [jobPosts, setJobPosts] = useState(jobs);
    const [showForm, setShowForm] = useState(false);
    const [editting, setEditting] = useState(false);
    const [currentEditJob, setCurrentEditJob] = useState(null);

    const cardContainer = useRef(null);
    
    useEffect(() => {
        const draggable = new Sortable(cardContainer.current, {
            draggable: '.broken'
        })
    }, [])

    

    const addJobPost = (job) => {
        setJobPosts(
            produce(jobPosts, nextState => {
                nextState.push(job)
        }));

        discardForm();
    }

    const removeJobPost = (id) => {
        const index = jobPosts.findIndex(job => job.id === id);
        const newState = jobPosts.slice(0, index).concat(jobPosts.slice(index+1));
        setJobPosts(newState);
    }

    const discardForm = () => {
        setShowForm(false);
        setEditting(false);
    }

    const editJobPost = (job) => {
        setCurrentEditJob(job);
        setEditting(true);
    }

    const handleEditSubmit = (job) => {
        setJobPosts(
            produce(jobPosts, state => {
                const index = jobPosts.findIndex(job => job.id === currentEditJob.id);
                state[index] = job;
        }))
        discardForm();
    }

    const fixEmoji = () => {
        return emoji.emojify(":coffee:");
    }

    return (
        <>
        <div ref={cardContainer} className="card">
            <div className="card-heading">
                <button className="icon delete-card-icon"></button>
                <h2>{name}</h2>
                <button onClick={() => setShowForm(true)} className="icon add-job-icon"></button>
                <p>{jobPosts.length} Jobs</p>
            </div>
            <div className="job-posts-container">
                {jobPosts.map((job, index) => 
                <div className="job-post" key={index}>
                    <h3>{emoji.emojify(job.title, fixEmoji)}</h3>
                    <p>@{job.company}</p>

                    <button onClick={() => removeJobPost(job.id)} className="icon trash-icon"></button>
                    <button onClick={() => editJobPost(job)} className="icon edit-icon"></button>
                </div>
                )}
                
            </div>
        </div>

        {showForm && 
        <div className="job-post-form">
        <NewPostForm addJobPost={addJobPost} discardForm={discardForm} />
        </div> 
        }
        {editting &&
        <div className="job-post-form">
        <EditForm handleEditSubmit={handleEditSubmit} discardForm={discardForm} job={currentEditJob}/>
        </div> 
        }
        </>
    )
}
export default Card;