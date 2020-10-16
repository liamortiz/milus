import React from 'react';
import Card from './Card';

const BoardContainer = () => {

    const closeJobForm = (e) => {
        e.preventDefault();
        document.getElementById('job-post-form').classList.add('hidden');
    }

    const openJobForm = () => {
        document.getElementById('job-post-form').classList.remove('hidden');
    }

    const submitJobPost = (e) => {
        e.preventDefault();

    }

    return (
        <div id="board-container">
            <Card openJobForm={openJobForm} heading="Applied"/>
            <Card openJobForm={openJobForm} heading="Phone Interview"/>
            <Card openJobForm={openJobForm} heading="On Site"/>
            <Card openJobForm={openJobForm} heading="Offer"/>
            <div className="create-card">
                <button className="icon add-card-icon"></button>
            </div>
            <div id="job-post-form" className="hidden">
                <form>
                    <h2>Add Job</h2>
                    <input type="text" placeholder="Company"/>
                    <input type="text" placeholder="Job Title"/>
                    <input type="text" placeholder="Board"/>
                    <button type="submit">Submit</button>
                    <button className="exit-button" onClick={closeJobForm}>Discard</button>
                </form>
            </div>
        </div>
    )
}
export default BoardContainer;