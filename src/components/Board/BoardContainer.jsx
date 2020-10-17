import React, { useRef, useState } from 'react';
import Card from './Card';
import JobPostForm from './JobPostForm';

const BoardContainer = () => {

    const formRef = useRef(null);
    const [currentCard, setCurrentCard] = useState(null);
    const [currentJob, setCurrentJob] = useState(null);

    const toggleForm = (e=null, card=null, job=null) => {
        if (e) e.preventDefault();
        if (card) setCurrentCard(card);
        setCurrentJob(job);

        formRef.current.classList.toggle('hidden');
    } 

    const submitJobPost = (job) => {
        toggleForm()
        setCurrentCard(null);
        setCurrentJob(null);
        currentCard.addJobPost(job);
    }

    const editJobPost = (job) => {
        toggleForm(null, null, job);
    }

    return (
        <div id="board-container">
            <Card openJobForm={toggleForm} editJobPost={editJobPost} heading="Applied"/>
            <Card openJobForm={toggleForm} editJobPost={editJobPost} heading="Phone Interview"/>
            <Card openJobForm={toggleForm} editJobPost={editJobPost} heading="On Site"/>
            <Card openJobForm={toggleForm} editJobPost={editJobPost} heading="Offer"/>

            <div className="create-card">
                <button className="icon add-card-icon"></button>
            </div>

            <div ref={formRef} id="job-post-form" className="hidden">
                <JobPostForm handleSubmit={submitJobPost} toggleForm={toggleForm} currentJob={currentJob}/>
            </div>
        </div>
        
    )
}
export default BoardContainer;