import React, { useEffect, useRef } from 'react';
import Card from './Card';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { useRecoilState } from 'recoil';
import { defaultJobCards } from '../../atoms';

const BoardContainer = () => {

    const [jobCards, setJobCards] = useRecoilState(defaultJobCards);
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

    const removeJobCard = (id) => {
        const index = jobCards.findIndex(card => card.id === id);
        const newState = jobCards.slice(0, index).concat(jobCards.slice(index+1));
        setJobCards(newState);
    }
    const addJobCard = () => {
        setJobCards(produce(jobCards, state => {
            state.unshift({name: "New Card", id: uuidv4(), jobs:[]})
        }))
    }

    return (
        <div id="board-container" ref={boardContainer}>
            <div className="create-card">
                <button onClick={addJobCard} className="icon add-card-icon"></button>
            </div>
            {jobCards.map(({name, jobs, id}) => 
                <Card key={id} name={name} jobs={jobs} id={id} removeJobCard={removeJobCard} />
            )}
        </div>
    )
}
export default BoardContainer;