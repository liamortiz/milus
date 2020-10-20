import React, { useState, useRef } from 'react';
import produce from 'immer';
import emoji from 'node-emoji';
import Form from './Form';
import ConfirmationForm from './ComfirmationForm';

const Card = ({ name, jobs, removeJobCard, id }) => {

    const [jobPosts, setJobPosts] = useState(jobs);
    const [showForm, setShowForm] = useState(false);
    const [editting, setEditting] = useState(false);
    const [currentEditJob, setCurrentEditJob] = useState(null);
    const [showingOptions, setShowingOptions] = useState(false);
    const [removingCard, setRemovingCard] = useState(false);
    const [cardName, setCardName] = useState(name);

    const cardContainer = useRef(null);

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
        setShowingOptions(false);
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

    const removeCard = (confirmation) => {
        if (confirmation) {
            removeJobCard(id);
        } else {
            setRemovingCard(false);
            setShowingOptions(false);
        }
    }

    return (
        <>
        <div ref={cardContainer} className="card" onMouseLeave={() => setShowingOptions(false)}>
            <div className="card-heading">
                <input type="text" value={cardName} className="card-name" onChange={(e) => setCardName(e.target.value)}/>

                <button onClick={() => setShowingOptions(!showingOptions)} className="icon more-icon"></button>
                <p>{jobPosts.length} Jobs</p>
                
                <div className={`options ${showingOptions ? '' : 'hidden'}`}>
                    <button onClick={() => setShowForm(true)} className="add-job-btn">New Job <i className="icon add-job-icon"></i></button>
                    <button onClick={() => setRemovingCard(true)} className="delete-card-btn">Delete Card <i className="icon remove-card-icon"></i></button>
                </div>

                {removingCard && <ConfirmationForm prompt="The card and all the jobs will be deleted." confirm={removeCard}/>}

            </div>
            <div className="job-posts-container">
                {jobPosts.map((job, index) => 
                <div className="job-post" key={index}>
                    <h3>{emoji.emojify(job.title, () => emoji.emojify(":coffee:"))}</h3>
                    <p>@{job.company}</p>

                    <button onClick={() => removeJobPost(job.id)} className="icon trash-icon"></button>
                    <button onClick={() => editJobPost(job)} className="icon edit-icon"></button>
                </div>
                )}
            </div>
        </div>

        {showForm && 
        <div className="job-post-form">
        <Form formTitle="Job Application" addJobPost={addJobPost} discardForm={discardForm} />
        </div> 
        }
        {editting &&
        <div className="job-post-form">
        <Form formTitle="Edit Job" handleEditSubmit={handleEditSubmit} discardForm={discardForm} job={currentEditJob}/>
        </div> 
        }
        </>
    )
}
export default Card;