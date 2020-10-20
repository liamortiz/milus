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

    const sortJobs = (e) => {
        switch(e.target.value) {
            case 'date':
                break;
            case 'high-salary':
                break;
            case 'low-salary':
                break;
            case 'a-z':
                setJobPosts([...jobPosts].sort((a, b) => (a.company > b.company) ? 1 : -1));
                break;
            case 'z-a':
                setJobPosts([...jobPosts].sort((a, b) => (a.company < b.company) ? 1 : -1));
                break;
            default:
                break;
        }
    }

    return (
        <>
        <div ref={cardContainer} className="card" onMouseLeave={() => setShowingOptions(false)}>
            <div className="card-heading">
                <input type="text" value={cardName} className="card-name" onChange={(e) => setCardName(e.target.value)}/>
                
                <div className="sorting">
                    <p>Sort</p>
                    <select onChange={sortJobs}>
                        <option value="date">Date</option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                        <option value="high-salary">High Salary</option>
                        <option value="low-salary">Low Salary</option>
                    </select>
                </div>

                <button onClick={() => setShowingOptions(!showingOptions)} className="icon more-icon"></button>
                <p className="jobs-counter">{jobPosts.length} Jobs</p>
                
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
                    <small>Applied: {job.date}</small>
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