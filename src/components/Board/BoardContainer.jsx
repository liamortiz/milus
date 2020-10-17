import React, { useRef, useState } from 'react';
import Card from './Card';
import JobPostForm from './JobPostForm';

const BoardContainer = () => {

    const formRef = useRef(null);
    const [currentCard, setCurrentCard] = useState(null);

    const toggleForm = (e=null, card=null) => {
        if (e) e.preventDefault();
        if (card) setCurrentCard(card);
        formRef.current.classList.toggle('hidden');
    } 

    const submitJobPost = (job) => {
        toggleForm()
        currentCard.addJobPost(job);
    }
    return (
        <div id="board-container">
            <Card openJobForm={toggleForm} heading="Applied"/>
            <Card openJobForm={toggleForm} heading="Phone Interview"/>
            <Card openJobForm={toggleForm} heading="On Site"/>
            <Card openJobForm={toggleForm} heading="Offer"/>

            <div className="create-card">
                <button className="icon add-card-icon"></button>
            </div>

            <div ref={formRef} id="job-post-form" className="hidden">
                <JobPostForm handleSubmit={submitJobPost} toggleForm={toggleForm}/>
            </div>
        </div>
        
    )
}
export default BoardContainer;