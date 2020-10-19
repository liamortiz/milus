import React, { useState, useEffect, useRef } from 'react';
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
    const boardContainer = useRef(null);

    const adjustContainerHeight = () => {
        if (boardContainer.current) {
            boardContainer.current.style.height = `${window.innerHeight - 65}px`;
        }
    }
    useEffect(() => {
        adjustContainerHeight();
    }, [])
    window.onresize = adjustContainerHeight;

    const removeJobCard = () => {

    }
    const addJobCard = () => {

    }

    return (
        <div id="board-container" ref={boardContainer}>
            <div className="create-card">
                <button className="icon add-card-icon"></button>
            </div>
            {jobCards.map(({name, jobs}) => <Card key={name} name={name} jobs={jobs} removeJobCard={removeJobCard}/>)}
        </div>
    )
}
export default BoardContainer;