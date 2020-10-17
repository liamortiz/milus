import React, { useState } from 'react';
import Card from './Card';
import produce from 'immer';

const defaultJobCards = [
{name: "Applied", jobs: []}, 
{name: "Phone Interview", jobs: []}, 
{name: "On Site", jobs: []}, 
{name: "Offer", jobs: []}, 
{name: "Rejected", jobs: []}
];

const BoardContainer = () => {

    const [jobCards, setJobCards] = useState(defaultJobCards);

    const removeJobCard = () => {

    }
    const addJobCard = () => {

    }

    return (
        <div id="board-container">
            {jobCards.map(({name, jobs}) => <Card key={name} name={name} jobs={jobs} removeJobCard={removeJobCard}/>)}

            <div className="create-card">
                <button className="icon add-card-icon"></button>
            </div>

        </div>
    )
}
export default BoardContainer;