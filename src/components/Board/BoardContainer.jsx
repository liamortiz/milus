import React from 'react';
import Card from './Card';

const BoardContainer = () => {
    return (
        <div id="board-container">
            <Card/>
            <Card/>
            <div className="create-card">

            </div>
        </div>
    )
}
export default BoardContainer;